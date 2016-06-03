# Do Life

Simple todo app with:

- Frontend: AngularJS using npm, bower, gulp, typescript

- Backend: Json api using Express on Node

- Database: Amazon DynamoDB

### Backend

Before running the backend you must add AWS credentials (supplied via different channel) in `api/src/aws.config.json`. The file does not exists so you'll have to create it yourself.

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

A succesful start should show

```
Server listening at: http://localhost:8888
```

...in the terminal.

### Frontend

Build and run the frontend by running:

```
cd frontend
npm run build
npm start
```

Then open a browser at `http://localhost:8000`

If all is well you should see the app running and a couple of tasks already added.
