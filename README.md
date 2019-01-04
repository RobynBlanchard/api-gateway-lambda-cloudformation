# Product API

## Description
A serverless restless API that uses API Gateway, AWS Lambda, DynamoDB and CloudFormation.

- Images are hosted on S3
- Products are stored in DynamoDB

- The endpoint for the API is /products TODO

![Alt text](./diagram.png?raw=true "AWS diagram")


## Deployment
- `aws s3 mb s3://product-api --profile robyn --region eu-west-1`
- `./deploy.sh`

- The endpoint is found under API Gateway -> APIs -> Stages -> Invoke URL
- The API key is found under API Gateway -> API Keys -> API Key
