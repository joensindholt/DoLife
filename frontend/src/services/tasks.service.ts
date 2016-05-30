/// <reference path="../../typings/tsd.d.ts"/>

module Services {
    'use strict';

    export class TasksService extends CrudService<Model.Task> {

        static $inject = ['$http', '$q'];

        constructor($http: ng.IHttpService, $q: ng.IQService) {
            super($http, $q, "tasks");
        }
    }
}

angular.module('Services')
    .service('TasksService', Services.TasksService);
