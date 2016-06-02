/// <reference path="../../typings/tsd.d.ts"/>

module Tasks {
    'use strict';

    export class TasksService {

        private API_PATH = 'http://localhost:8888';

        static $inject = ['$http', '$q'];

        constructor(
            private $http: ng.IHttpService,
            private $q: ng.IQService
        ) {
        }

        getTasks(): ng.IPromise<Array<Task>> {
            var deferred = this.$q.defer();

            this.$http.get(this.API_PATH + '/tasks').then(response => {
                deferred.resolve(response.data)
            }).catch(err => {
                deferred.reject(err);
            })

            return deferred.promise;
        }

        addTask(title: string): ng.IPromise<Task> {
            var deferred = this.$q.defer();

            this.$http.post(this.API_PATH + '/tasks', {
                title: title
            }).then(response => {
                var task = response.data;
                deferred.resolve(task)
            }).catch(err => {
                deferred.reject(err);
            })

            return deferred.promise;
        }

        updateStatus(taskId, status) {
            var deferred = this.$q.defer();

            this.$http.put(this.API_PATH + '/tasks/' + taskId + '/status', {
                value: status
            }).then(response => {
                deferred.resolve(response.data)
            }).catch(err => {
                deferred.reject(err);
            });

            return deferred.promise;
        }

        deleteTask(taskId) {
            var deferred = this.$q.defer();

            this.$http.delete(this.API_PATH + '/tasks/' + taskId).then(response => {
                deferred.resolve(response.data)
            }).catch(err => {
                deferred.reject(err);
            });

            return deferred.promise;
        }
    }
}

angular.module('Tasks')
    .service('TasksService', Tasks.TasksService);
