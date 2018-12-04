exports.getProducts = () => {
  return new Promise((resolve, reject) => {
    var params = {
      TableName: 'Products'
    };

    ddb.scan(params, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.getProduct = id => {
  return new Promise((resolve, reject) => {
    var params = {
      Key: {
        ProductID: {
          N: `${id}`
        }
      },
      TableName: 'Products'
    };
    ddb.getItem(params, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.putProduct = product => {
  return new Promise((resolve, reject) => {
    var params = {
      TableName: 'Products',
      Item: {
        ProductID: {
          N: `${product.ProductID.toString()}`
        },
        Title: {
          S: `${product.Title.toString()}`
        },
        Price: {
          N: `${product.Price}`
        }
      }
    };

    ddb.putItem(params, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.deleteProduct = id => {
  return new Promise((resolve, reject) => {
    var params = {
      Key: {
        ProductID: {
          N: `${id}`
        }
      },
      TableName: 'Products'
    };
    ddb.deleteItem(params, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.putItem = product => {
  // // TODO
  // var params = {
  //   ExpressionAttributeNames: {
  //    "#AT": "AlbumTitle",
  //    "#Y": "Year"
  //   },
  //   ExpressionAttributeValues: {
  //    ":t": {
  //      S: "Louder Than Ever"
  //     },
  //    ":y": {
  //      N: "2015"
  //     }
  //   },
  //   Key: {
  //    "Artist": {
  //      S: "Acme Band"
  //     },
  //    "SongTitle": {
  //      S: "Happy Day"
  //     }
  //   },
  //   ReturnValues: "ALL_NEW",
  //   TableName: "Music",
  //   UpdateExpression: "SET #Y = :y, #AT = :t"
  //  };
  //  dynamodb.updateItem(params, function(err, data) {
  //    if (err) console.log(err, err.stack); // an error occurred
  //    else     console.log(data);
};
