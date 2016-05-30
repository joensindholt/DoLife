/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="repository.interface.ts" />

import Repository = require('./repository.interface');

export class MongoDbCrudRepository<T extends Common.Identifiable> implements Repository.Repository<T> {
    constructor(private db: any, public collection: string) {

    }

    public getAll(): Promise<Array<T>> {
        var promise = new Promise((resolve, reject) => {
            var collection = this.db.get(this.collection);
            collection.find({}, {}, (e, resources) => {
                resolve(resources);
            });
        });

        return promise;
    }

    public create(resource: T) {
        var promise = new Promise((resolve, reject) => {
            var collection = this.db.get(this.collection);
            collection.insert(resource, function(err, doc) {
                if (err) throw err;
                resolve(doc);
            });
        });

        return promise;
    }

    public read(id: number): Promise<T> {
        var promise = new Promise((resolve, reject) => {
            var collection = this.db.get(this.collection);
            collection.findById(id, function(err, doc) {
                if (err) throw err;
                resolve(doc);
            });
        });

        return promise;
    }

    public update(resource: T) {
        var promise = new Promise((resolve, reject) => {
            var collection = this.db.get(this.collection);
            collection.update({ _id: resource._id }, resource, function(err, doc) {
                if (err) throw err;
                resolve(doc);
            });
        });

        return promise;
    }

    public delete(id: number): Promise<{}> {
        var promise = new Promise((resolve, reject) => {
            var collection = this.db.get(this.collection);
            collection.remove({ _id: id }, function(err, doc) {
                if (err) throw err;
                resolve(doc);
            });
        });

        return promise;
    }
}
