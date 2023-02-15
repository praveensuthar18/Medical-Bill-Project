# Medical Bill Project

There are two endpoints created where one endpoint is used to post medical bill information and another endpoint is used to get all medical bills stored in memory on the server.

There are unit tests created for both endpoints where for the GET endpoint we have handled conditions when there are no medical bills and when there is medical bill. For POST requests, we have tested by sending a bill and checking if everything goes right and if we miss some information in the bill data and checking the error.

## Installation

Use npm install to download required packages mainly express and testing libraries like chai by running the below command from the project's root.

```bash
npm install
```

## Usage

To test the application using Postman, we need to run the server and then fire a request from the Postman client

```javascript
node index.js

```
To test the application by running unit tests written for both endpoints, we need to run the below command in the terminal at the root of the project
```javascript
npm test

```