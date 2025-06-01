//This script to click the 'Add another employee' button on the popup screen after successfully saved an employee
//Type : Button , Name : 'Add another employee'
// Class Name : AddAnotherEmp ; Function Name: Click_AddAnotherEmp
// for testing

import { Page } from '@playwright/test';


export class AddAnotherEmp {
constructor (private page: Page) {}




async Click_AddAnotherEmp () {
    try {
  await this.page.getByRole('button', { name: 'Add another employee' }).click();   

}
catch(error){
    console.error('Button Not Available', error);
}

}
}


