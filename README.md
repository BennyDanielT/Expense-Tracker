# Assignment 3

## Group Information

1. *Group No*: 24
2. *Date Created*: 13 JUL 2022
3. *Last Modification Date*: 15 JUL 2022
4. *Website URL*: http://group24-expensetracker-dev.us-east-1.elasticbeanstalk.com/
5. *Git URL*: https://git.cs.dal.ca/ayushv/group24_expensetracker

## Authors

* Abhishek Uppe (ab577089@dal.ca)
* Vatsal Yadav

## Features developed

1. Abhishek Uppe
   1. Group Expense Tracking

2. Vatsal Yadav
   1. Payment Reminder

## Tasks developed

1. Abhishek Uppe
   1. Create Group
   2. Edit Group
   3. View Group
   4. Delete Group

2. Vatsal Yadav
   1. Create Payment Reminder
   2. Modify Payment Reminder
   3. Delete Payment Reminder
   4. View Payment Reminder

## Individual Branches

### 1. Abhishek Uppe

https://git.cs.dal.ca/ayushv/group24_expensetracker/-/tree/abhishek-uppe-b00885768

## Files worked on

### 1. Abhishek Uppe

**Feature: Group Expense Tracking**

**Frontend**
1. frontend/src/components/group/CreateGroup.jsx
2. frontend/src/components/group/DeleteGroup.jsx
3. frontend/src/components/group/EditGroup.jsx
4. frontend/src/components/group/GroupHomePage.jsx
5. frontend/src/components/group/helpers.js
6. frontend/src/components/group/ViewGroup.jsx
7. frontend/src/components/Heading/Heading.jsx
8. frontend/src/components/SideBar/index.js
9. frontend/src/redux/actions/group.js
10. frontend/src/redux/actions/index.js
11. frontend/src/redux/reducers/group.js
12. frontend/src/redux/reducers/index.js
13. frontend/src/redux/sagas/group.js
14. frontend/src/redux/sagas/index.js
15. frontend/src/redux/store.js
16. frontend/src/App.js (Partial)
17. frontend/src/constants.js (Partial)
18. frontend/src/App.css (Partial)
19. frontend/src/css/group.css
20. frontend/src/css/heading.css

**Backend**
1. backend/controllers/group.js
2. backend/routes/index.js (Partial)
3. backend/index.js
4. backend/utils.js

### 2. Vatsal Yadav

**Feature: Payment Reminder**

**Frontend**
1. frontend\src\components\paymentReminders\RemindersGrid.js
2. frontend\src\components\paymentReminders\CreateReminder.js
3. frontend\src\redux\actions\reminder.js
4. frontend\src\redux\reducers\reminder.js
5. frontend\src\redux\sagas\reminder.js
6. frontend\src\redux\actions\index.js (partial)
7. frontend\src\redux\reducers\index.js (partial)
8. frontend\src\redux\sagas\index.js (partial)
9. frontend\src\components\routing\index.js (partial)

**Backend**
1. backend/controllers/reminders.js
2. backend/routes/index.js (Partial)

## Getting Started

### Prerequisites

To have a local copy of this lab / assignment / project up and running on your local machine, you will first need to
install the following software / libraries / plug-ins

```
NodeJS: Latest LTS version download from https://nodejs.org/en/.
Git: Latest source release download from https://git-scm.com/downloads.
```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

Run the following commands in both the frontend and backend root folder to install and run the application

```
npm install
npm start
```

## Deployment

1. Create a AWS account from [here](https://portal.aws.amazon.com/billing/signup).
2. Install elastic beanstalk client using from [here](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html)
4. Run the following commands

```
eb init
eb create
eb deploy
```

## Built With

Frontend

- [ReactJS](https://reactjs.org/) - The core web library (framework) used.
- [React Router DOM](https://v5.reactrouter.com/) - Routing library for single page application.
- [React Bootstrap](https://react-bootstrap.github.io/) - User Interface components for React.
- [SweetAlert2](https://sweetalert2.github.io/) - Beautiful Alerts for React.
- [React Redux](https://react-redux.js.org/) - Used for state management.
- [Redux Saga](https://redux-saga.js.org/) - Middleware for redux.
- [React Datepicker](https://www.npmjs.com/package/react-datepicker) - Reusable datepicker component for React.
- [Moment](https://www.npmjs.com/package/moment) - A JavaScript date library for parsing, validating, manipulating, and formatting dates.

Backend

* [Node](https://nodejs.org/en/) - The core backend library (framework) used.
* [Express](https://expressjs.com/) - Framework for creating single page routes.
* [Postgresql](https://www.postgresql.org/) - SQL Database for the application.
* [Supabase](https://supabase.com/) - API Client for PostgreSQL.
* [Docker](https://www.docker.com/) - Creating single container for frontend and backend folder.
* [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) - Used for deploying both frontend and backend applications using Docker.
* [Nodemailer](https://nodemailer.com/about/) - Node.js module to send emails.
* [Node Schedule](https://github.com/node-schedule/node-schedule#readme) - A flexible job scheduler for Node.js for scheduling emails.

## Folder Structure

Frontend

* For frontend the folder structure used is the default react folder structure.
* All the assets are stored in frontend/src/assets.
* All the React Components are stored in frontend/src/components.
* All the css files other then App.css and index.css are stored in frontend/src/css.
* The redux structure containing actions, reducers and sagas in frontend/src/redux.

Backend

* For backend the folder structure used is the default nodejs and expressjs folder structure.
* All the API logic and end points are stored in backend/controllers.
* All the models or database connection are stored in backend/models.
* All the backend routes are stored in backend/routes.

