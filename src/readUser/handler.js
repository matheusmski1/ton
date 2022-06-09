"use strict";
const AWS = require('aws-sdk');
AWS.config.update({region: 'REGION'});



export async function hello(event) {

const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

ddb.createTable(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Table Created", data);
  }
});


return
}
