# Tests QA DEV for ZARA #

## 📫 <a name="section-installation">Getting Started</a>

### 💬 Previous Requirements

Required
You need google chrome installed locally but supported: Frirefox, Edge, Electron, Brave.

1. Install cypress https://www.cypress.io/
2. Install node.js https://nodejs.org/en/
- Javascript

Recommended

- VS Code
- Postman

## Check versions:

1. node -v
2. npm -v
3. npx cypress -v

## Cypress enables you to write all types of tests:

* End-to-end tests
* Integration tests
* Unit tests

## 🚀 Get start project create package.json

1. npm init -y
2. npm install cypress
3. npx cypress verify

How tu use Cypress

1. Setup test
2. Write tests
3. Run tests
4. Debug

## 📍 ## Execute the tests with Cypress

            npx cypress open


![Report](https://freefrontend.com/assets/img/css-loaders/loading.gif)            

## Video

![image](https://freefrontend.com/assets/img/css-loaders/loading.gif)

### 📖 API test

https://petstore.swagger.io/

## 💖 <a name="result">Result of Test Cases</a>

 The tests cases is ejecuting to check the API Rest on Petstore
 
 <p align="center">
<img src="https://freefrontend.com/assets/img/css-loaders/loading.gif" width=90% height=90%>
 
🧪Test case 1: Create your user with the HTTP request and retrieve their data by calling the corresponding service.
<br>Action is: Open Postman and create a new HTTP GET request and enter the endpoint URL POST/user
<br>Test Data is: data of the user you want to create:
```json
 {
  "id": 1234,
  "username": "mrclod",
  "firstName": "claudiu",
  "lastName": "alexandru",
  "email": "mrlod@claudiu.com",
  "password": "123456",
  "phone": "755-5556",
  "userStatus": 1
}
```
  

<br>Result is: If the request was successful, you should receive a response with a 200 OK status code and the user's information.

🧪Test Case 2: Send HTTP request, JSON returns the /pet/findByStatus endpoint and lists the names of the pets that have been sold through a function.
<br>Action is: Open Postman and create a new HTTP GET request and enter the endpoint URL GET/pet/findByStatus
<br>Test Data is: list by names of the pets that have been sold
<br>Result is: The output format must be formed by the tuple {id, name}

🧪Test Case 3: Create a class whose constructor requires the above data structure and make a method that can loop through it to identify how many pets have the same name.
<br>Action is: 
<br>Test Data is: Example output: {“William”: 11, “ Floyd”: 2}
<br>Result is: 




