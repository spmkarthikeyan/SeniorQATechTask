import { Page, test } from '@playwright/test';

export class SelectDate {

constructor (private page: Page) {}


 async  SelectDate (Start_Year ,Start_Month,Start_Date){

const today = new Date();
const monthName = today.toLocaleString('default', { month: 'long' });
const year = today.getFullYear().toString();
 
  await this.page.locator('#startDate [data-testid="input-selector"]').click();
  await this.page.getByRole('button', { name: year }).click();
  await this.page.getByRole('button', { name: Start_Year }).click();
  await this.page.getByRole('button', { name: monthName }).click();
  await this.page.getByRole('button', { name: Start_Month }).click();
  await this.page.getByText(Start_Date , { exact: true }).click();

}
}