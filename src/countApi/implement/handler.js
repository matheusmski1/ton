const countapi = require("countapi-js");
module.exports.count = async (event, context, callback) => {
  return countapi
    .hit("4yg85wp1v7.execute-api.us-east-1.amazonaws.com")
};
