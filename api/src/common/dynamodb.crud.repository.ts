/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="repository.interface.ts" />

import Repository = require('./repository.interface');

var AWS = require("aws-sdk");

export class DynamoDbCrudRepository<T extends Common.Identifiable> implements Repository.Repository<T> {
    private docClient;

    constructor(private db: any, public collection: string) {
        this.docClient = new AWS.DynamoDB.DocumentClient();
    }

    public create(resource: T) {
        var promise = new Promise((resolve, reject) => {
            var params = {
                TableName: this.collection,
                Item: resource
            };

            this.docClient.put(params, (err, data) => {
                if (err) throw err;
                resolve(data);
            });
        });

        return promise;
    }

    public read(id: number): Promise<T> {
        var promise = new Promise((resolve, reject) => {
            var params = {
                TableName: this.collection,
                Key: { id }
            };

            this.docClient.get(params, function(err, data) {
                if (err) throw err;
                resolve(data);
            });
        });

        return promise;
    }

    public delete(id: number): Promise<{}> {
        var promise = new Promise((resolve, reject) => {
            var params = {
                TableName: this.collection,
                Key: { id }
            };

            this.docClient.delete(params, function(err, data) {
                if (err) throw err;
                resolve(data);
            });
        });

        return promise;
    }
}
