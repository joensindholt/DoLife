/// <reference path="../../../typings/tsd.d.ts"/>

module Views {

    export class HomeController {

        static $inject = ['$state'];

        constructor(private $state: angular.ui.IStateService) {
        }
    }
}

angular.module('Views')
    .controller('HomeController', Views.HomeController);
