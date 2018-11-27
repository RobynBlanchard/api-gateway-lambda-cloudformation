var AWS = require("aws-sdk");
AWS.config.update({ region: "eu-west-1" });
ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08" });

const responses = require("./responses");
const routes = require("./routes");

exports.router = (event, context, callback) => {
  routes
    .handleRequest(event, context)
    .then(data => callback(null, responses.success(data)))
    .catch(error => callback(error));
};

// For testing
// let data = {
//   event: event.queryStringParameters
// };
// let response = {
//   statusCode: 200,
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(data),
//   isBase64Encoded: false
// };
// callback(null, response);

// queryStringParameters":{"id":"1"}

// if (process.env.TESTING === "true") exports.router("", "", console.log);
