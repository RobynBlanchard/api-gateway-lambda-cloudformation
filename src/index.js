const responses = require("./responses");
var AWS = require("aws-sdk");
AWS.config.update({ region: "eu-west-1" });
ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08" });

getProducts = () => {
  return new Promise((resolve, reject) => {
    var params = {
      TableName: "Products"
    };

    ddb.scan(params, function(err, data) {
      if (err) {
        console.log(err, err.stack); // an error occurred
        reject(err);
      } else {
        const prod = data.Items.map(item => {
          return {
            id: item.ProductID,
            title: item.Title,
            price: item.Price
          };
        });

        resolve(prod);
      }
    });
  });
};

exports.router = (event, context, callback) => {
  if (event.path === "/products" && event.httpMethod === "GET") {
    const products = getProducts();
    products
      .then(data => callback(null, responses.success(data)))
      .catch(error => callback(null, responses.notFound));
  }
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

if (process.env.TESTING === "true") exports.router("", "", console.log);
