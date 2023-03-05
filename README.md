## <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYKq4hggSSPA3QvDqSStGRAroLw_vUDlOJdT6IrJIlehPc5sQSei4VhMnF85cXfm7W1hg&usqp=CAU" align="left" width="50" />Tests QA DEV for ZARA 

## 📫 <a name="section-installation">Getting Started</a>

### 💬 Previous Requirements

Required
You need google chrome installed locally but supported: Frirefox, Edge, Electron, Brave.

1. Install cypress https://www.cypress.io/
2. Install node.js https://nodejs.org/en/
3. Install cypress/xpath https://github.com/cypress-io/cypress/tree/develop/npm/xpath

Recommended

- Javascript
- VS Code
- Postman
- Python

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
<img src="https://github.com/MrClodd/StoreZara_byClod/blob/8e777c1df2368d0072640c2522ee40f4a46a900a/Exercise%203%20Data%20processing%20in%20APIs%20with%20Postman%20test%201%20and%202/Screenshot/PetStore.png" width=100% height=100%>
 
🧪Test case 1: Create your user with the HTTP request and retrieve their data by calling the corresponding service.
<br>Action is: Open Postman and create a new HTTP GET request and enter the endpoint URL ```POST/user```
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
<br>Result is: If the request was successful, you should receive a response with a ```200 OK``` status code and the user's information.

🧪Test Case 2: Send HTTP request, JSON returns the ```/pet/findByStatus``` endpoint and lists the names of the pets that have been sold through a function.
<br>Action is: Open Postman and create a new HTTP GET request and enter the endpoint URL ```GET/pet/findByStatus```
<br>Test Data is: list by names of the pets that have been sold
<br>Result is: The output format must be formed by the tuple ```{id, name}```

🧪Test Case 3: Create a class whose constructor requires the above data structure and make a method that can loop through it to identify how many pets have the same name.
<br>Action is: Can use the python request library and create a class that takes this list as an argument
<br>Test Data is: pets have the same name in the Swagger API data structure
<br>Result is: Example output: ```{"doggie": 35, "Собака": 1, "кыца": 1, "Кошка": 1, "Кошки": 1, "kitten1": 1, "Анаконда": 1, "LAPIN LAPIN": 1, "Star": 1}```

 <p align="center">
<img src="https://github.com/MrClodd/StoreZara_byClod/blob/cc8e262e5c7fdfb0c66b396ee96713a934c19266/Exercise%203%20Data%20processing%20in%20APIs%20with%20python%20test%203/Report/screen%20result.png" width=100% height=100%>


