// const path = event.path;
// const httpMethod = event.httpMethod;
// const queryParams = event.queryStringParameters;

// if (path === "/products" && httpMethod === "GET") {
//   if (queryParams === null) {
//     const products = getProducts();
//     var response = responses.success(db);
//   } else if (queryParams.hasOwnProperty('id')) {
//     const productID = queryParams.id;
//     const product = getProduct(productID)
//     var response = responses.success(product);
//   } else {
//     var response =  responses.notFound();
//   }
// }
// callback(null, response);

// const AWS = require("aws-sdk");
// const response = require("cfn-response");
// const docClient = new AWS.DynamoDB.DocumentClient();
// exports.handler = function(event, context) {
//     console.log(JSON.stringify(event,null,2));
//     var params = {
//       TableName: event.ResourceProperties.DynamoTableName,
//       Item:{
//           "id": "abc123"
//       }
//   };
// docClient.put(params, function(err, data) { if (err) {
//   response.send(event, context, "FAILED", {});
// } else {
//   response.send(event, context, "SUCCESS", {});
// }
// });
// };

// getProduct = id => {
//   var params = {
//     Key: {
//       ProductID: {
//         N: `"${id}"`
//       }
//     },
//     TableName: "Products"
//   };
//   ddb.getItem(params, function(err, data) {
//     if (err) console.log(err, err.stack);
//     // an error occurred
//     else return data; // successful response
//   });
// };
