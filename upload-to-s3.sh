# aws s3 mb s3://product-api --profile robyn --region eu-west-1

# yarn install
pushd ./src/api
yarn install -s

# Zip artifacts
file="/tmp/product-api-`date '+%Y%m%d%H%M%S'`.zip"
zip -qr $file ./*

popd

# upload to s3 bucket
aws --profile robyn s3 cp $file --region eu-west-1 s3://product-api/artifacts/
rm $file


