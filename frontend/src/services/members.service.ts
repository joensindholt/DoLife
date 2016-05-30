/// <reference path="../../typings/tsd.d.ts"/>

module Services {
    'use strict';

    export class MembersService extends CrudService<Model.Member> {

        static $inject = ['$http', '$q'];

        constructor($http: ng.IHttpService, $q: ng.IQService) {
            super($http, $q, "members");
        }
    }
}

angular.module('Services')
    .service('MembersService', Services.MembersService);
