/// <reference path="../../typings/tsd.d.ts"/>

module Services {
    'use strict';

    export class CrudService<T extends Model.Identifiable> {

        static $inject = ['$http', '$q'];

        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private resourceName: string) {

        }

        getAll(): ng.IPromise<Array<T>> {
            var defered = this.$q.defer();

            console.debug('CrudService: Getting all with resource name %s', this.resourceName);
            this.$http.get('http://127.0.0.1:8888/api/' + this.resourceName).then((result => {
                defered.resolve(result.data);
            }));

            return defered.promise;
        }

        get(id: string): ng.IPromise<T> {
            var defered = this.$q.defer();

            this.$http.get('http://127.0.0.1:8888/api/' + this.resourceName + '/' + id).then((result => {
                defered.resolve(result.data);
            }));

            return defered.promise;
        }

        add(resource: T): ng.IPromise<T> {
            var defered = this.$q.defer();

            this.$http.post('http://127.0.0.1:8888/api/' + this.resourceName, resource).then((result => {
                defered.resolve(result.data);
            }));

            return defered.promise;
        }

        update(resource: T): ng.IPromise<T> {
            var defered = this.$q.defer();

            this.$http.put('http://127.0.0.1:8888/api/' + this.resourceName + '/' + resource._id, resource).then((result => {
                defered.resolve(result.data);
            }));

            return defered.promise;
        }

        delete(resource: T): ng.IPromise<{}> {
            var defered = this.$q.defer();

            this.$http.delete('http://127.0.0.1:8888/api/' + this.resourceName + '/' + resource._id).then((result => {
                defered.resolve();
            }));

            return defered.promise;
        }
    }
}
