var AWS = require("aws-sdk");
var credentials = new AWS.SharedIniFileCredentials({ profile: "robyn" });
AWS.config.credentials = credentials;
AWS.config.update({ region: "eu-west-1" });

// Create the DynamoDB service object
ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08" });

// var params = {
//   TableName: 'Products',
//     Item: {
//         'ProductID' : {N: '5'},
//         'Title' : {S: 'lava lamp'},
//         'Price' : {N: '0850'}
//     }
// };

// // Call DynamoDB to add the item to the table
// ddb.putItem(params, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data);
//   }
// });

var params2 = {
  RequestItems: {
    Products: [
      {
        PutRequest: {
          Item: {
            productID: { N: "1" },
            title: { S: "Little Bag of Happiness" },
            price: { N: "3200" },
            imageURL: { S: 'bag.jpg' }
          }
        }
      },
      {
        PutRequest: {
          Item: {
            productID: { N: "2" },
            title: { S: "Himalyan Silk Scarves" },
            price: { N: "19900" },
            imageURL: { S: 'scarves.jpg' }
          }
        }
      },
      {
        PutRequest: {
          Item: {
            productID: { N: "3" },
            title: { S: "Life Size Cow" },
            price: { N: "100000" },
            imageURL: { S: 'life-size-cow.jpg' }
          }
        }
      },
      {
        PutRequest: {
          Item: {
            productID: { N: "4" },
            title: { S: "Leather Timeless Watches" },
            price: { N: "5500" },
            imageURL: { S: 'watches.jpg.jpg' }
          }
        }
      },
      {
        PutRequest: {
          Item: {
            productID: { N: "5" },
            title: { S: "Super Comfy Socks" },
            price: { N: "600" },
            imageURL: { S: 'socks.jpg' }
          }
            }
                },
      {
        PutRequest: {
          Item: {
            productID: { N: "6" },
            title: { S: "Smelly Candles" },
            price: { N: "1499" },
            imageURL: { S: 'candles.jpg' }
          }
        }
      },
      {
        PutRequest: {
          Item: {
            productID: { N: "7" },
            title: { S: "Pair of Three Succulents" },
            price: { N: "500" },
            imageURL: { S: 'succulents.jpg' }
          }
        }
      }
    ]
  }
};
ddb.batchWriteItem(params2, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
});

// var params = {
//   Key: {
//     ProductID: {
//       N: "1"
//     }
//   },
//   TableName: "Products"
// };
//  ddb.getItem(params, function(err, data) {
//    if (err) console.log(err, err.stack); // an error occurred
//    else     console.log(data);           // successful response
//  });

// var params3 = {
//   TableName: "Products"
// };
// ddb.scan(params3, function(err, data) {
//   if (err) {
//     console.log(err, err.stack); // an error occurred
//   } else {
//     data.Items.forEach(e => {
//       console.log(e.ProductID, e.Title, e.Price);
//     });
//   }
// });
