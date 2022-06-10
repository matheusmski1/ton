"use strict";
const AWS = require("aws-sdk");
AWS.config.update({ region: process.env.DEV_REGION });

module.exports.createUser = async (event, context, callback) => {
  const data = event.body;
  const ddb = new AWS.DynamoDB();

  if (!data.email || !data.name)
    return { Status: 400, message: "Did you forget the email or name?" };

  const name = data.name;
  const email = data.email;

  const params = {
    TableName: "usersTable",
    Item: {
      email: { S: email },
      name: { S: name },
    },
  };

  return ddb.putItem(params).promise()
  .then((data) => {
      callback(null, response(200, "User created"))
    }).catch(err => callback(null, response(err.statusCode, err)))

};

function response(statusCode, message) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(message)
  }
}