# Simple Todo Application Development
-----------------------------------------------
  - A simple, yet advanced take on the todo app

# Database Schema for Users
-----------------------------------------------
  - Create an isAdmin field/attribute on the User table.
  - Dashboard for isAdmin to be able to provide logistical support for
    the application's users.

# Export of Todo Items
----------------------------------------------
  - Allow users to Import/Export CSV Todo List values in the application
    for batch, long todo list todoers.

# Creation of User and User Auth Token tables
-----------------------------------------------
  - User sign in process for sessions with UserAuthToken
  - Show login screen first on entrance.
  - Add userId to each database table entry of Todo items.
  - Save UUID for saved session to localStorage
    - Check if uuid for localStorage session exists for user-x
    - Check the expiration of the current uuid session auth token.
    - Invalidate and require login if expiration is exceeded.
    - Check for user status on each view presented to the user except registration
    - Disallow registration process if already logged in, give explanation to the user.
    - Reset database and ensure that there is no data in the database at all.
    - Allow temporary todo list saved to localStorage for users who do not wish to share data
    - Make the temporary todo list able to be converted to a user with a saved todo list.
      - Convert to user with registration,
      - After registration check localStorage for the array of todo objects and add to database
        if they exist.

# Amazon SES
-----------------------------------------------
  - Create emails and email templates for Amazon SES to send out in the event of needed maintenance
    notices

# Marketing
-----------------------------------------------
  - Call users "Todoers" in branding materials for a fun way to market the app.
  - Plan to roll out a Social Media strategy for the Todo Application
  - Treat this like a real project.
  - Go through the entire creation of this project on YouTube with a tutorial
    for other developers to use as a guidebook for creating the perfect multi-faceted Todo
    appilcation for their portfolio.
  - Implement a Test Driven Development approach to the creation of the App for the tutorial
  - Perhaps advertise and sell the tutorial on Udemy as your first class.
  - Offer purchasers of the project a lot for a simple and small monetary investment.

# Styling
----------------------------------------------
  - Go through the app and re-style everything to meet the current vision, but to also
