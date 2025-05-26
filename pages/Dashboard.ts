//This script to click the 'Employees' option (link) on the sidebar of the dashboard screen.This will laucn the Employee hub screen
//Type : Link , Name : Employees
// Class Name :  DashBoard ; Function Name: Click_EmpLink

import { Page } from '@playwright/test';


export class DashBoard {
constructor (private page: Page) {}

async Click_EmpLink () {

try {

  await this.page.getByTestId('sideBar').getByRole('link', { name: 'Employees' }).click();

} catch (error) {
    console.error ('Not able to find/Click the Employee link on the sidebar',error)
}


}

}