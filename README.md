# Simple Todo Application Development
-----------------------------------------------
  - A simple, yet advanced take on the todo app


# Creation of User and User Auth Token tables
-----------------------------------------------
  - Roll-your-own (I know, I know...) authentiation

  - Going to utilize bcryptjs for this.

  - Must create a salt, obtain password and then hash
    the password for pass checks for login and other
    activities

      - We will use the following pattern:
          > Obtain password from user 
            - const password = userInputAsPwd.value;

          > Create a salt for the password
              - use a server action and pass the password
              to it along with other user creation data
                 > var password = password as: String
              - create a salt for the password
                 > var salt = bcrypt.genSaltSync(10) as String
              - hash the password w/ the salt
                  > var hash = bcrypt.hashSync(password, salt) as String

          > Store the Hashed Password in the Database

          > along with other user information

      - Remove the token validation system, bad plan. 

# User Sign Up Process
-----------------------------------------------
1. Remove the Table: UserAuthToken
2. Create a Form Component and handle Client Side Validatiaon
3. Verify user entered data on the server side with TypeScript
   and the use of type interface validation.
4. Save the information into the database.