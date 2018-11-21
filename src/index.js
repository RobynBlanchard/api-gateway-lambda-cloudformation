const responses = require('./responses');

const db = [
  {
    id: 1,
    title: "little bag of happiness",
    price: 2500
  },
  {
    id: 2,
    title: "personalised scarf",
    price: 1250
  }
];

exports.router = (event, context, callback) => {
  const path = event.path;
  const httpMethod = event.httpMethod;
  const queryParams = event.queryStringParameters;

  if (path === "/products" && httpMethod === "GET") {
    if (queryParams === null) {
      var response = responses.success(db);
    } else if (queryParams.hasOwnProperty('id')) {
      const productID = queryParams.id;
      const productIndex = db.findIndex(el => el.id.toString() === productID);
      var response = responses.success(db[productIndex]);
    } else {
      var response =  responses.notFound();
    }
  }
  callback(null, response);
};


