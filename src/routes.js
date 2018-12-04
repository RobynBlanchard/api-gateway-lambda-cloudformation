const operations = require('./operations');
const responses = require('./responses');

exports.handleRequest = (event, context) => {
  if (event.path === '/products') {
    let response;

    switch (event.httpMethod) {
      case 'GET':
        // or if not null - get the property and pass it in - so could be title etc.
        if (event.queryStringParameters.hasOwnProperty('id')) {
          response = operations.getProduct(event.queryStringParameters.id);
        }
        // if (event.queryStringParameters === null) {
        response = operations.getProducts();
        break;

      case 'POST':
        const product = JSON.parse(event.body);
        if (!product.ProductID || !product.Title || !product.Price) {
          // return dif response code
          callback(null, JSON.stringify('All fields are required'));
        } else {
          response = operations.putProduct(product);
        }
        break;

      case 'DELETE':
        response = operations.deleteProduct(event.queryStringParameters.id);
        break;

      case PUT:
        response = operations.putItem(event.queryStringParameters.id);
        break;

      default:
        callback(null, responses.notFound);
    }

    return response;
  }
};
