# Auth App

### Deployed to Heroku -

### 1. Create a basic NodeJs App and start Express server which greets user when he sends a get request to it.

Created a NodeJS app and user can send get request to this link '' to get a greeting message

### 2. Create a database in MongoDB and connect it with your Nodejs application using mongoose, then create an API to register user and insert the data in database, take the followingfields from user:

#### firstname

#### lastname

#### email

#### phone

#### address

#### Password

Created a Database in MongoDB and connected it to the application using mongoose, API to register user is created and user can create account by sending POST request to this link '', the body should contain firstname,lastname,email,phone,address,password in json format, the email should be valid and the pasword should be minimum 8 characters. If the user already exists then API responds with message User Exists

Passwords are stored in database in hashed format

### 3. Create a post request which takes user’s email and password from payload, and validates its email and password from database, generate the Json Web Token using user’s Id and send this token in response.

Created an API to log in user, user can send POST request to this link '' to login, the body the request should contain email and password and the email should be valid, if the password is incorrect then the API responds with message Password is incorrect. If email and password is correct then it responds with the json web token created using mongo db id of the user

### 4. Create a get request which sends user’s details in response. Add authorization to this API, use JWT based authorization to validate user’s token and then send user’s profile details (firstname, lastname, email, phone, address only).

Created an API which takes json web token as header and validates it and if it is valid then it responds with the profile data of the user (specifically firstname, lastname, email, phone and address). This API can be accessed through the following link ''

## React

### 1. User Registration : Take the following details from user and post it to the API which you’ll be going to create in NodeJs application.

#### firstname

#### lastname

#### email

#### phone

#### address

#### Password

Created a Signup route in react APP which takes firstname, lastname, email, phone,address and password from the user and then makes a POST request to API to create a new user. The form has all the validation it also checks whether the email is valid or not and if the password it minimum 8 characters or not and it all the data is correct it gives message to the user that the user is created successfully and if the email already exists it gives error to user that the email already exists. This route can be accessed by this link ''

### 2. User Login: Create a login page where user can enter their email and password. In this page you have to send login request to thebackend and store the token you receive in response in order to manage login session.

Created a login route which accepts email and password from user and validates the email and if the email is valid then makes a POST request to the API to validate the credentials given by user, if Json web token is received then it stores it in the local storage to manage login session. If the password is incorrect then it gives error to user

### 3. User Profile Page: Create a page which in which user can view their information like name, email, phone etc.. Make This page will only be accessible for logged in users. Use API to get user’s information from backend(Nodejs). Since this API require authorization, so make use of the token in headers for accessing API.

Created a Profile Route which can only be accessed if the user is logged in and has a valid json web token. This page displays the information of user which is stored in Mongo DB like firstname, lastname, phone, address and email
