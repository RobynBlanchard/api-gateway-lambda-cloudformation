# pushd ./src
# yarn install -s

# Zip artifacts
path="./tmp/"
file="my-lambda-lambdi-api-demo-stack-`date '+%Y%m%d%H%M%S'`.zip"
echo $path$file
mkdir -p $path
zip -qr $path$file ./src/*

# popd

# # upload to s3 bucket
aws s3 cp $path$file --region eu-west-1 s3://my-lambda-api2/artifacts/ --profile robyn
rm $path$file

aws cloudformation deploy --stack-name my-lambdi-api-demo-stack --capabilities CAPABILITY_IAM --template-file api.yml --region eu-west-1 --parameter-overrides S3Key=artifacts/$file --profile robyn

