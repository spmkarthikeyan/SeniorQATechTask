// This script is to idenditify the main division and narrow down the employee entries based on the heading  and job tile from div
// to validate with the test data to make sure its addedd successfully
// Locators : '#main-content div.grid > div' , 'div.flex.flex-col > h1' , div.flex.flex-col > div'

import { Page } from '@playwright/test';
import { expect , test} from '@playwright/test';
import path from 'path';
import { ReadEmpData , EmpData } from './readempdata';

export class validateEmp {

constructor (private page: Page) {}

async Validate_Emp () {

    try {
 
    const csvPath = path.resolve(__dirname, '../testdata/EmployeeDetails.csv'); // in Playwright project
    // const csvPath = './Data/testdata.csv'; // Git/Jenkins CI-friendly
   
    const validationrecord: EmpData[] = ReadEmpData(csvPath);

    await this.page.waitForSelector('#main-content div.grid > div',{timeout : 10000}); 
    const HTML_Div = this.page.locator ('#main-content div.grid > div');
    const HTML_Div_Count = await HTML_Div.count();

for ( let Div_Count = 0; Div_Count < HTML_Div_Count ; Div_Count++) {

    
    const Result_Name = await HTML_Div.locator('div.flex.flex-col > h1').nth(Div_Count).innerText();
    const Result_Title = await HTML_Div.locator('div.flex.flex-col > div').nth(Div_Count).innerText();

  for (const { First_Name, Last_name,Job_Title } of validationrecord) {
 
 const target_name = First_Name + ' ' + Last_name;
 const target_job =   Job_Title;


 if ( Result_Name === target_name &&  Job_Title === Result_Title)

  {
    console.log ( 'Expected = ' , target_name , ' Actual = ', Result_Name);
    console.log ( 'Expected = ' , Job_Title , ' Actual = ', Result_Title);
    console.log (' Details Matching');
    break
  }  
else {
    //console.log ('Not Matching')
}
 
  }
}

} catch(error){
   console.error('Not able to validate', error);
}

}
}