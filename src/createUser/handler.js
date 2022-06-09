"use strict";
const AWS = require("aws-sdk");
AWS.config.update({ region: process.env.DEV_REGION });

module.exports.createUser = async (event, context, callback) => {
  const data = event.body;
  const ddb = new AWS.DynamoDB();

  if (!data.email || !data.name)
    return new Error("Did you forget any email or name?");

  const name = data.name;
  const email = data.email;

  const params = {
    TableName: "usersTable",
    Item: {
      email: { S: email },
      name: { S: name },
    },
  };

  ddb.putItem(params, function (err, data) {
    if (err) 
    throw new Error(err)
  });

  return callback(null, "[200] User created");
};
