"use strict";
const AWS = require("aws-sdk");
AWS.config.update({ region: process.env.DEV_REGION });

module.exports.createUser = async (event, context, callback) => {
  const data = JSON.parse(event.body);
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

  ddb.putItem(params, function (err) {
    if (err) throw new Error(err);
  });

  return { Status: 200, message: "User created" };
};
