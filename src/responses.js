exports.success = data => {
  return {
    "statusCode": 200,
    "headers": {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    "body": JSON.stringify(data),
    "isBase64Encoded": false
  };
};

exports.notFound = () => {
  return {
    "statusCode": 404,
    "body": JSON.stringify({ message: 'Resource not found' }),
    "headers": {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    }
  };
};
