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
