//This script to click the 'Log in' button on the home screen.this will laucn a  dashboard screen .
//Type : Link ;  Name : Log in
// Class Name :  HomePage ; Function Name: Click_Login


import { Page } from '@playwright/test';


export class HomePage {
  constructor(private page: Page) {}

  async Click_Login() {

    try{
  
    await this.page.getByRole('link', { name: 'Log in' }).click();

    }catch(error){

        console.error('Not able to find/ click the Log In link on the home screen', error)
    }
  }
}


