/// <reference path="../typings/tsd.d.ts"/>

module app {
    'use strict';

    angular.module('app', [
        // External modules
        'ngRoute',
        'ui.router',
        // App modules
        'Common',
        'Tasks'
    ])
    .config(['$stateProvider', Config])
    .run([Run])

    angular.module('Tasks', []);
    angular.module('Common', []);

    function Config($stateProvider: angular.ui.IStateProvider): void {
        $stateProvider
            .state('tasks', {
                url: "",
                templateUrl: "tasks/tasks.html",
                controller: 'TasksController',
                controllerAs: 'vm'
            });
    }

    function Run(): void {
        console.log('app running');
    }
}
