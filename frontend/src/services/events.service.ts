/// <reference path="../../typings/tsd.d.ts"/>

module Services {
    'use strict';

    export class EventsService extends CrudService<Model.Event> {

        static $inject = ['$http', '$q'];

        constructor($http: ng.IHttpService, $q: ng.IQService) {
            super($http, $q, 'events');
        }
    }
}

angular.module('Services')
    .service('EventsService', Services.EventsService);
