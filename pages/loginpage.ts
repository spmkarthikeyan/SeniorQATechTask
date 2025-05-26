//This script to click the 'Log in' button on the home screen.this will laucn a  dashboard screen .
//Type : Textbox ;  Name : 'Email address' , 'Password visibility' 
//Type : Button ; Name : 'Login'
// Class Name :  LoginPage ; Function Name: LoginPage_ClickLogin

import { Page} from '@playwright/test';


export class LoginPage {
    constructor (private page : Page) {}

  async LoginPage_ClickLogin () {

 try {
  await this.page.getByRole('textbox', { name: 'Email address' }).click();
  await this.page.getByRole('textbox', { name: 'Email address' }).fill('qaAutomationTechTask@grr.la');
  await this.page.getByRole('textbox', { name: 'Password visibility' }).click();
  await this.page.getByRole('textbox', { name: 'Password visibility' }).fill('A1234567890-');
  await this.page.getByRole('button', { name: 'Login' }).click();   
 } catch (error){
    console.error ('Not able to Login', error)
 }



 
  }

} 

