React app demonstration

Overview
In order to get a better impression of your technical skills, we would like to offer
you this coding assignment.
Your solution might become the basis for a deeper discussion with the
engineering team at the final stage of the interviewing process.
We think a good solution could be found within approximately 6 hours. That said,
we will expect to receive it within 3 days.
Guidelines
● Document your code as needed
● Use Git features that you see fit (source code link)
Task Details
Create System For User management.

- Provided the following JSON response from an API endpoint:
  [
  {
  " name ":”ahmed”,
  " id ": 1 ,
  " email ": "a@test.com" ,
  " phone ": 4353453543,
  “Status” :”active”
  } ,
  {
  " name ":”omar”,
  " id ": 2 ,
  " email ": "a@test.com" ,
  " phone ": 372636722,
  “Status” :”active”
  } ,
  {
  " name ":”ali”,
  " id ": 3 ,
  " email ": "c@test.com" ,
  " phone ": 82736,
  “Status” :”soft_deleted”
  } , ]
  Task 1 : User Crud Operations
- Build a users list page with the following details:
  ---> each user has data like : name,phone,mail,and status(active,soft_deleted)
  ---> listing page must have pagination , sorting and filtration.
- Add / edit with validation error messages(required,wrong data)
- delete user
  Task 2: Localization (ar,en)
  Task 3:Authentication (login with dummy data)
- The system has 2 types of users
  --->admin : can view or control all system
  --->basic user : can view only listing (without delete or edit)
  Task 4: Notification Messages with success & failure for all actions
  Task 5: Ui Responsive
