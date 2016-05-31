# Do Life

Simple todo app with:

Frontend: AngularJS

Backend: Express

Database: Amazon DynamoDB

### API

Before running the api add aws credentials in `api/src/aws.config.json`. Create the file yourself.

```
{
    "region": "eu-west-1",
    "endpoint": "https://dynamodb.eu-west-1.amazonaws.com",
    "accessKeyId": "{accessKeyId}",
    "secretAccessKey": "{secretAccessKey}"
}
```

Then start the server:

```
cd api
npm build
npm start
```
