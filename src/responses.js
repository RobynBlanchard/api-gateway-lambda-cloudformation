exports.success = data => {
  return {
    "statusCode": 200,
    "headers": {
      'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin',
      // 'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods" : "*",
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
      "Access-Control-Allow-Methods" : "*",
      "Content-Type": "application/json",
      // "Access-Control-Allow-Credentials": true
    }
  };
};
