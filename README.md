# QA-Automation
# Playwright automation using TypeScript
# Project Structure
# Repo URL : https://github.com/spmkarthikeyan/SeniorQATechTask.git
# kjgkgksdaf

SeniorQATechTask
--.github
  --workflows
     --QuickDemo.yml
--pages
  --addanotheremp.ts
  --Dashboard.ts
  --employeehub.ts
  --loginPage.ts
  --newemppopup.ts
--testdata
  --EmployeeDetails.csv
--tests
  --DemoScript.spec.ts
--Utilities
  --readempdata.ts
  --validateemp.ts
--package.json
--package-lock.json
--playwright.config.ts
--.gitignore


Prerequisites

- Node.js
- npm
- Git

Commands to run the scripts

To Install NPM
  npm install  
  
To Verify Version
  npm -v
  
To install playwright
  npm playwright install
  
To test script
  npx playwright test
  
To open the Playwright Test Report
  npx playwright show-report

To download your scripts from Git to Local
  git clone REPO URL
  
To create Subbranch
  git checkout -b BRANCH NAME

To Initializes a new Git repository in your local folder.
  git init

To stages all changed files in the current directory (and subdirectories) for commit.
  git add .

To creates a snapshot of your staged files in your local Git repo with a message describing the change.
  git commit -m "SHORT MESSAGE"

To Pushes your committed changes to the remote repository on the given branch name.
  git push origin branch name

To Switches your current working branch to main.
  git checkout main

To switches your current working branch to Subbranch
  git checkout SUB BRANCH NAME

For Authendication
git remote set-url origin REPO URL WITH TOKEN

To shows the current state of your working directory and staging area.
  git status


#Make sure the .gitignore file contains the below to avoid unnecessary files to GitHub

node_modules/
/test-results/
/playwright-report/
/blob-report/
/playwright/.cache/











