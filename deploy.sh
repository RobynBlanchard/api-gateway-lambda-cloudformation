# pushd ./src
# yarn install -s

# Zip artifacts
path="./tmp/"
file="product-api-`date '+%Y%m%d%H%M%S'`.zip"
echo $path$file
mkdir -p $path
zip -qr $path$file ./src/*

# popd

# # upload to s3 bucket
aws s3 cp $path$file --region eu-west-1 s3://product-api/artifacts/ --profile robyn
rm $path$file

aws cloudformation deploy --stack-name product-api --capabilities CAPABILITY_IAM --template-file api.yml --region eu-west-1 --parameter-overrides S3Key=artifacts/$file --profile robyn

