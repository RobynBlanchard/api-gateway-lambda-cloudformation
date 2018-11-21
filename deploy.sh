pushd ./src/api
yarn install -s

# Zip artifacts
file="/tmp/my-lambda-lambdi-api-demo-stack-`date '+%Y%m%d%H%M%S'`.zip"
zip -qr $file ./*

popd

# upload to s3 bucket
aws --profile robyn s3 cp $file --region eu-west-1 s3://my-lambda-api2/artifacts/
rm $file

echo "run aws cloudformation deploy --stack-name my-lambdi-api-demo-stack --capabilities CAPABILITY_IAM --template-file api.yml --profile robyn --region eu-west-1 --parameter-overrides S3Key=artifacts/<file-name>"

