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
* Devarshi Vyas (dv459527@dal.ca)
* Ayush Verma (ayush.verma@dal.ca)
* Smit Thakkar (sm928548@dal.ca)
* Benny Tharigopala (bn489600@dal.ca)

## Features developed


1. Group Expense Tracking

2. Payment Reminder

3. Categorial Expense (Tags)

4. User management

5. Expense Tracker

6. In-App Payment Integration

7. Coupon Management

8. Notifications

9. Analytics


## Tasks developed

1. Group Expense Tracking
   1. Create Group
   2. Edit Group
   3. View Group
   4. Delete Group

2. Payment Reminder
   1. Create Payment Reminder
   2. Modify Payment Reminder
   3. Delete Payment Reminder
   4. View Payment Reminder

3. Categorical Expense (Tags)
   1. Create Tag
   2. Edit Tag
   3. View Tag Details (an individual tag)
   4. View Tags (per user)
   5. Delete Tag

4. User Management
   1. SignIn
   2. SignUp
   3. Change Password
   4. Logout

5. Expense Tracker
   1. Add Expense
   2. Edit Expense
   3. Settle Uppe
   4. Delete Expense

6. In-App Payment Integration
   1. Initiate Payment
   2. Input Payment Method Details
   3. View Payment Status
   4. View Payment History

7. Coupon Management
   1. View Coupons
   2. Redeem Coupons
   3. Coupon Redeemed

8. Notifications
   1. Notification Settings
   2. Email Notification
   3. View Notification

9. Analytics
   1. Analytics
   2. Expense Analytics
   3. Spending Trends
   4. Expense Tracking

## Individual Branches

### 1. Abhishek Uppe

https://git.cs.dal.ca/ayushv/group24_expensetracker/-/tree/abhishek-uppe-b00885768

### 2. Vatsal Yadav
https://git.cs.dal.ca/ayushv/group24_expensetracker/-/tree/vatsal-yadav-b00893030

### 3. Devarshi Vyas
https://git.cs.dal.ca/ayushv/group24_expensetracker/-/tree/devarshi-vyas-b00878443

### 4. Ayush Verma
https://git.cs.dal.ca/ayushv/group24_expensetracker/-/tree/ayush-verma-b00893024

### 5. Smit Thakkar
https://git.cs.dal.ca/ayushv/group24_expensetracker/-/tree/smit-thakkar-b00896215

### 6. Benny Tharigopala
https://git.cs.dal.ca/ayushv/group24_expensetracker/-/tree/benny-tharigopala-b00899629


## Files worked on

## 1. Abhishek Uppe

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
9. frontend/src/components/notifications/EmailNotification.jsx
10. frontend/src/components/notifications/NotificationSettings.jsx
11. frontend/src/components/notifications/ViewNotification.jsx
12. frontend/src/redux/actions/group.js
13. frontend/src/redux/actions/index.js
14. frontend/src/redux/reducers/group.js
15. frontend/src/redux/reducers/index.js
16. frontend/src/redux/sagas/group.js
17. frontend/src/redux/sagas/index.js
18. frontend/src/redux/store.js
19. frontend/src/App.js (Partial)
20. frontend/src/constants.js (Partial)
21. frontend/src/App.css (Partial)
22. frontend/src/css/group.css
23. frontend/src/css/heading.css

**Backend**

1. backend/controllers/group.js
2. backend/controllers/notification.js
3. backend/routes/index.js (Partial)
4. backend/index.js
5. backend/utils.js


## 2. Vatsal Yadav

**Feature: Payment Reminder**
**Frontend**

1. frontend\src\components\paymentReminders\RemindersGrid.js
2. frontend\src\components\paymentReminders\CreateReminder.js
3. frontend\src\redux\actions\reminder.js
4. frontend\src\redux\reducers\reminder.js
5. frontend\src\redux\sagas\reminder.js
6. frontend/src/components/analytics/AnalyticsHome.jsx 
7. frontend/src/components/analytics/ExpenseAnalysis.jsx 
8. frontend/src/components/analytics/ExpenseTracking.jsx 
9. frontend/src/components/analytics/SpendingAnalysis.jsx
10. frontend\src\redux\actions\index.js (partial)
11. frontend\src\redux\reducers\index.js (partial)
12. frontend\src\redux\sagas\index.js (partial)
13. frontend\src\components\routing\index.js (partial)

**Backend**

1. backend/controllers/reminders.js
2. backend/routes/index.js (Partial)

## 3. Devarshi Vyas

**Feature: Categorial Expense (Tags)**

**Frontend**
1. frontend/src/components/UserManagement/ChangePassword.jsx
2. frontend/src/components/UserManagement/ForgetPassword.jsx
3. frontend/src/components/UserManagement/Signup.jsx
4. frontend/src/components/UserManagement/Login.jsx
5. frontend/src/redux/reducers/config.js
6. frontend/src/components/HomePage.jsx
7. frontend/src/routing/index.js (partial)

**Backend**
1. backend/controllers/tags.js
2. backend/routes/index.js (partial)

## 4. Ayush Verma

**Feature: Categorial Expense (Tags)**

**Frontend**
1. frontend/src/components/tags/CreateEditTag.jsx
2. frontend/src/components/tags/ViewTags.jsx
3. frontend/src/components/tags/ViewTagDetails.jsx
4. frontend/src/redux/actions/tags.jsx
5. frontend/src/redux/reducers/tags.jsx
6. frontend/src/redux/sagas/tags.jsx
7. frontend/src/components/CouponManagement/Helpers/footer.jsx 
8. frontend/src/components/CouponManagement/Helpers/header.jsx 
9. frontend/src/components/CouponManagement/Helpers/menu.jsx 
10. frontend/src/components/CouponManagement/Helpers/meta.jsx
11. frontend/src/components/CouponManagement/Layout/Layout.jsx 
12. frontend/src/components/CouponManagement/couponRedeemed.jsx 
13. frontend/src/components/CouponManagement/notFound.jsx 
14. frontend/src/components/CouponManagement/redeemCoupon.jsx 
15. frontend/src/components/CouponManagement/viewCoupons.jsx
16. frontend/src/routing/index.js (partial)
17. frontend/src/App.js (Partial)
18. frontend/src/constants.js (Partial)
19. frontend/src/App.css (Partial)

**Backend**
1. backend/controllers/coupons.js
2. backend/controllers/userManagement.js


## 5. Smit Thakkar
**Feature: Expense Tracker**
**Frontend**

1. frontend/src/components/expense/AddExpense.jsx
2. frontend/src/components/expense/DeleteExpense.jsx
3. frontend/src/components/expense/EditExpense.jsx
4. frontend/src/components/expense/ExpenseHomePage.jsx
5. frontend/src/components/expense/helpers.js
6. frontend/src/components/expense/ViewExpense.jsx
7. frontend/src/redux/actions/expense.js
8. frontend/src/redux/reducers/expense.js
9. frontend/src/redux/sagas/expense.js
10. frontend/src/css/expense.css


**Backend**

1. backend/controllers/expense.js
2. backend/routes/index.js (Partial)

## 6. Benny Tharigopala

**Feature: In-App Payment Integration**
**Frontend**

1. frontend/src/components/Payments/InitiatePayment.jsx
2. frontend/src/components/Payments/PaymentMethod.jsx
3. frontend/src/components/Payments/PaymentStatus.jsx
4. frontend/src/components/Payments/PaymentHistory.jsx
5. frontend/src/components/Payments/checkout.jsx
6. frontend/src/redux/actions/transaction.jsx
7. frontend/src/redux/reducers/transaction.jsx
8. frontend/src/redux/sagas/transaction.jsx
9. frontend/src/routing/index.js (Team-Effort)
10. frontend/src/App.js (Partial)
11. frontend/src/constants.js (Partial)
12. frontend/src/App.css (Partial)

**Backend**

1. backend/controllers/transaction.js
2. backend/routes/index.js (Team-Effort)



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

**Frontend**

- [ReactJS](https://reactjs.org/) - The core web library (framework) used.
- [React Router DOM](https://v5.reactrouter.com/) - Routing library for single page application.
- [React Bootstrap](https://react-bootstrap.github.io/) - User Interface components for React.
- [SweetAlert2](https://sweetalert2.github.io/) - Beautiful Alerts for React.
- [React Redux](https://react-redux.js.org/) - Used for state management.
- [Redux Saga](https://redux-saga.js.org/) - Middleware for redux.
- [React Datepicker](https://www.npmjs.com/package/react-datepicker) - Reusable datepicker component for React.
- [Moment](https://www.npmjs.com/package/moment) - A JavaScript date library for parsing, validating, manipulating, and formatting dates.

**Backend**

* [Node](https://nodejs.org/en/) - The core backend library (framework) used.
* [Express](https://expressjs.com/) - Framework for creating single page routes.
* [Postgresql](https://www.postgresql.org/) - SQL Database for the application.
* [Supabase](https://supabase.com/) - API Client for PostgreSQL.
* [Docker](https://www.docker.com/) - Creating single container for frontend and backend folder.
* [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) - Used for deploying both frontend and backend applications using Docker.
* [Nodemailer](https://nodemailer.com/about/) - Node.js module to send emails.
* [Node Schedule](https://github.com/node-schedule/node-schedule#readme) - A flexible job scheduler for Node.js for scheduling emails.

## Folder Structure

**Frontend**

* For frontend the folder structure used is the default react folder structure.
* All the assets are stored in frontend/src/assets.
* All the React Components are stored in frontend/src/components.
* All the css files other then App.css and index.css are stored in frontend/src/css.
* The redux structure containing actions, reducers and sagas in frontend/src/redux.

**Backend**

* For backend the folder structure used is the default nodejs and expressjs folder structure.
* All the API logic and end points are stored in backend/controllers.
* All the models or database connection are stored in backend/models.
* All the backend routes are stored in backend/routes.

