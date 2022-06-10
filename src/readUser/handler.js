"use strict";
const AWS = require("aws-sdk");
AWS.config.update({ region: process.env.DEV_REGION });
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

module.exports.readUser = (event, context, callback) => {
  const email = event.pathParameters.email

  const params = {
    TableName: "usersTable",
    Key: {
      email: { S: email },
    },
  };
  
  return ddb.getItem(params).promise()
  .then((data) => {
      callback(null, response(200, data.Item))
    }).catch(err => callback(null, response(err.statusCode, err)))
  }
  
  function response(statusCode, message) {
    return {
      statusCode: statusCode,
      body: JSON.stringify(message)
    }
  }
  
  