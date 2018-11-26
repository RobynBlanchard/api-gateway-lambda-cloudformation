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
            ProductID: { N: "6" },
            Title: { S: "pewter photo frame" },
            Price: { N: "3200" }
          }
        }
      },
      {
        PutRequest: {
          Item: {
            ProductID: { N: "7" },
            Title: { S: "birthstone necklace" },
            Price: { N: "4500" }
          }
        }
      },
      {
        PutRequest: {
          Item: {
            ProductID: { N: "8" },
            Title: { S: "life sized cow" },
            Price: { N: "78000" }
          }
        }
      }
    ]
  }
};
// ddb.batchWriteItem(params2, function(err, data) {
//     if (err) {
//       console.log("Error", err);
//     } else {
//       console.log("Success", data);
//     }
// });

var params = {
  Key: {
    ProductID: {
      N: "1"
    }
  },
  TableName: "Products"
};
//  ddb.getItem(params, function(err, data) {
//    if (err) console.log(err, err.stack); // an error occurred
//    else     console.log(data);           // successful response
//  });

var params3 = {
  TableName: "Products"
};
ddb.scan(params3, function(err, data) {
  if (err) {
    console.log(err, err.stack); // an error occurred
  } else {
    data.Items.forEach(e => {
      console.log(e.ProductID, e.Title, e.Price);
    });
  }
});
