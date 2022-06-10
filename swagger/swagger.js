// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "aws-node-http-api",
    "version": "1"
  },
  "paths": {
    "/user": {
      "post": {
        "summary": "createUser",
        "description": "",
        "operationId": "createUser.post./user",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "Return that you have success creating the user."
          }
        }
      }
    },
    "/user/{email}": {
      "get": {
        "summary": "readUser",
        "description": "",
        "operationId": "readUser.get./user/{email}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "email",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Will return the entity associated with that email."
          }
        }
      }
    },
    "/count/increment": {
      "get": {
        "summary": "incrementCount",
        "description": "",
        "operationId": "incrementCount.get./count/increment",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "The visit number will be incremented by one."
          }
        }
      }
    },
    "/count": {
      "get": {
        "summary": "getCount",
        "description": "",
        "operationId": "getCount.get./count",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "Returns the amount of access that this project has"
          }
        }
      }
    }
  },
  "definitions": {},
  "securityDefinitions": {}
};