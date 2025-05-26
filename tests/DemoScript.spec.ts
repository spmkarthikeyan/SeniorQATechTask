//Main Script

import { Page, test } from '@playwright/test'
import { HomePage } from '../pages/homepage'; 
import { LoginPage } from '../pages/loginPage';
import { DashBoard } from '../pages/Dashboard';
import {EmployeeHub} from '../pages/employeehub';
import { NewAddEmployee } from '../pages/newemppopup';
import { validateEmp } from '../utilities/validateemp';


test('Add new employee', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const dashboard = new DashBoard(page);
  const employeehub = new EmployeeHub (page);
  const newaddemp = new NewAddEmployee (page);
  const validateemp = new validateEmp (page);

  await page.goto ('https://sandbox-app.brighthr.com/lite');
  await homePage.Click_Login() 
  await loginPage.LoginPage_ClickLogin();
  await dashboard.Click_EmpLink();
  await  employeehub.Click_AddEmp ();
  await newaddemp.AddEmployee();
  await dashboard.Click_EmpLink();
  await validateemp.Validate_Emp ();
 
});