//This script to fill the employee details from the testdata file and based on the  no of recored 
// and it will click 'add another epmloyee' option/button to proceed with next testdata
//Type : Textbox ;  Name : 'First name' , 'Last name' , 'Email address' , 'Phone number (optional)','Job title'
//Type : Button ; Name : ''Save new employee' // the Calendar Button names are dynamic
// Class Name :  NewAddEmployee ; Function Name: AddEmployee


import { Page } from "playwright-core";
import path from 'path';
import { ReadEmpData, EmpData} from '../utilities/readempdata';
import { exit } from "process";
import { AddAnotherEmp } from "./addanotheremp";

export class NewAddEmployee {

constructor (private page: Page) {}

async AddEmployee ()

{

try {
const csvPath = path.resolve(__dirname, '../testdata/EmployeeDetails.csv'); // in Playwright project
// const csvPath = './Data/testdata.csv'; // Git/Jenkins CI-friendly

const employeedetails: EmpData[] = ReadEmpData(csvPath);
const addnewemp = new AddAnotherEmp(this.page);
const today = new Date();
const Current_month = today.toLocaleString('default', { month: 'long' });
const Current_year = today.getFullYear().toString();


let File_Count = employeedetails.length;
let Last_Record_Count = 0;

for (const { First_Name, Last_name, Email_Address ,Phone_Number, Start_Year, Start_Month, Start_Date ,Job_Title } of employeedetails) {
 Last_Record_Count++;

 
  await this.page.getByRole('textbox', { name: 'First name' }).click();
  await this.page.getByRole('textbox', { name: 'First name' }).fill(First_Name);
  await this.page.getByRole('textbox', { name: 'Last name' }).click();
  await this.page.getByRole('textbox', { name: 'Last name' }).fill(Last_name);
  await this.page.getByRole('textbox', { name: 'Email address' }).click();
  await this.page.getByRole('textbox', { name: 'Email address' }).fill(Email_Address);
  await this.page.getByRole('textbox', { name: 'Phone number (optional)' }).click();
  await this.page.getByRole('textbox', { name: 'Phone number (optional)' }).fill(Phone_Number);
  

  await this.page.locator('#startDate [data-testid="input-selector"]').click();
  await this.page.getByRole('button', { name: Current_year }).click();
  await this.page.getByRole('button', { name: Start_Year }).click();
  await this.page.getByRole('button', { name: Current_month }).click();
  await this.page.getByRole('button', { name: Start_Month }).click();
  await this.page.getByText(Start_Date , { exact: true }).click();


  await this.page.getByRole('textbox', { name: 'Job title' }).click();
  await this.page.getByRole('textbox', { name: 'Job title' }).fill(Job_Title); 
  await this.page.getByRole('button', {name : 'Save new employee'}).click();
 

  await this.page.waitForSelector('text=Success! New employee added', { state: 'visible' });

  if (File_Count === Last_Record_Count)
  {

   await this.page.getByRole('link', {name : 'Go to profile'}).click();
  
  }
  else 
  {
    await addnewemp.Click_AddAnotherEmp();
    
  }
 
}

}catch (error){
    console.error('Not able to fill the employee details', error)
 }
 } 
}
