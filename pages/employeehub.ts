//This script to click the 'Add employee' button on the employeehub screen.this will laucn a pop screen to fill employee details.
//Type : button ;  Name : Add employee
// Class Name :  EmployeeHub ; Function Name: Click_AddEmp

import { Page } from "playwright-core";

export class EmployeeHub {

constructor (private page : Page) {}

async Click_AddEmp () {

try{

await this.page.getByRole('button', { name: 'Add employee' }).click();    

}catch(error){

    console.error('Not able to find/click the Add employee button on the Employeehub screen ')
}

}

}