/*jslint node: true */
"use strict";

const AWS = require("aws-sdk");
const uuid = require('node-uuid');

class TaskRepository {
    constructor() {
        this.docClient = new AWS.DynamoDB.DocumentClient();
        this.tableName = "Tasks";
    }

    getTasks(userId) {
        let promise = new Promise((resolve, reject) => {

            console.log('querying tasks from db');

            let params = {
                TableName: this.tableName,
                KeyConditionExpression: "userId = :userId",
                ExpressionAttributeValues: {
                    ":userId": userId
                }
            };

            this.docClient.query(params, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(data.Items);
            });
        });

        return promise;
    }

    addTask(userId, task) {
        let promise = new Promise((resolve, reject) => {

            console.log('adding task to db', task);

            task.userId = userId;
            task.taskId = uuid.v1();
            task.taskStatus = 'incomplete';

            let params = {
                TableName: this.tableName,
                Item: task
            };

            this.docClient.put(params, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(task);
            });
        });

        return promise;
    }

    updateTaskStatus(userId, taskId, status) {
        let promise = new Promise((resolve, reject) => {

            console.log('updating task status in db', taskId);

            let params = {
                TableName: this.tableName,
                Key: {
                    "userId": userId,
                    "taskId": taskId
                },
                UpdateExpression: "set taskStatus = :status",
                ExpressionAttributeValues:{
                    ":status":status
                },
                ReturnValues:"UPDATED_NEW"
            };

            this.docClient.update(params, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(data);
            });
        });

        return promise;
    }

    deleteTask(userId, taskId) {
        let promise = new Promise((resolve, reject) => {

            console.log('deleting task from db', taskId);

            let params = {
                TableName: this.tableName,
                Key: {
                    "userId": userId,
                    "taskId": taskId
                }
            };

            this.docClient.delete(params, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(data);
            });
        });

        return promise;
    }
}

module.exports = TaskRepository;
