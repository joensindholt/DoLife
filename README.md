# Do Life

Simple todo app with:

Frontend: AngularJS

Backend: Web Api using Express

Database: Amazon DynamoDB

### Backend

Before running the backend add aws credentials in `api/src/aws.config.json`.

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
npm install
npm start
```
