var AWS = require("aws-sdk");
AWS.config.update({ region: "eu-west-1" });
ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08" });

const responses = require("./responses");
const operations = require("./operations");

exports.router = (event, context, callback) => {
  if (event.path === "/products" && event.httpMethod === "GET") {
    if (event.queryStringParameters === null) {
      const products = operations.getProducts();
      products
        .then(data => callback(null, responses.success(data)))
        .catch(error => callback(null, responses.notFound));
    } else if (event.queryStringParameters.hasOwnProperty("id")) {
      const products = operations.getProduct(event.queryStringParameters.id);
      products
        .then(data => callback(null, responses.success(data)))
        .catch(error => callback(null, responses.notFound));
    }
  } else if (event.path === "/products" && event.httpMethod === "POST") {
    const product = event.body;
    const response = operations.putProduct(product);
    if (!product.ProductID || !product.Title || !product.Price) {
      callback(null, JSON.stringify("Missing required information"));
    } else {
      response
        .then(data => callback(null, responses.success(data)))
        .catch(error => callback(null, responses.notFound));
    }
  }
  // For testing
  // let data = {
  //   event: event
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
};

// option 1
/*
  const done = (err, res) =>
    callback(null, {
      statusCode: err ? "400" : "200",
      body: err ? err.message : JSON.stringify(res),
      headers: {
        "Content-Type": "application/json"
      }
    });

  if (event.path === "/products") {
    switch (event.httpMethod) {
      case "GET":
        if (event.queryStringParameters === null) {
          ddb.scan({ TableName: "Products" }, done);
          break;
        } else if (event.queryStringParameters.hasOwnProperty("id")) {
          var params = {
            Key: {
              ProductID: {
                N: `"${event.queryStringParameters.id}"`
              }
            },
            TableName: "Products"
          };
          ddb.getItem(params, done);
        }

      default:
        callback("err");
    }
  }
*/
// option 2

// TODO - understand calllbacks

// if (process.env.TESTING === "true") exports.router("", "", console.log);
