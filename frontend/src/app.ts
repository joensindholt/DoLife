/// <reference path="../typings/tsd.d.ts"/>

module app {
    'use strict';

    angular.module('app', [
        // External modules
        'ngRoute',
        'ui.router',
        'ngAnimate',
        'ngMaterial',
        'matchMedia',
        // App modules
        'Directives',
        'Services',
        'Views'
    ])
    .config(['$stateProvider', Config])
    .run([Run]);

    function Config($stateProvider: angular.ui.IStateProvider): void {
        $stateProvider
            .state('home', {
                url: "",
                templateUrl: "partials/views/home/home.html",
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .state('members', {
                url: "/members",
                templateUrl: "partials/views/members/members.html",
                controller: 'MembersController',
                controllerAs: 'vm'
            })
            .state('addmember', {
                url: "/addmember",
                templateUrl: "partials/views/members/add.member.html",
                controller: 'AddMemberController',
                controllerAs: 'vm'
            })
            .state('editmember', {
                url: "/editmember/:id",
                params: {
                    id: { value: null }
                },
                templateUrl: "partials/views/members/edit.member.html",
                controller: 'EditMemberController',
                controllerAs: 'vm'
            })
            .state('events', {
                url: "/events",
                templateUrl: "partials/views/events/events.html",
                controller: 'EventsController',
                controllerAs: 'vm'
            })
            .state('addevent', {
                url: "/addevent",
                templateUrl: "partials/views/events/add.event.html",
                controller: 'AddEventController',
                controllerAs: 'vm'
            })
            .state('editevent', {
                url: "/editevent/:id",
                params: {
                    id: { value: null }
                },
                templateUrl: "partials/views/events/edit.event.html",
                controller: 'EditEventController',
                controllerAs: 'vm'
            })
            .state('tasks', {
                url: "/tasks",
                templateUrl: "partials/views/tasks/tasks.html",
                controller: 'TasksController',
                controllerAs: 'vm'
            })
            .state('addtask', {
                url: "/addtask",
                templateUrl: "partials/views/tasks/add.task.html",
                controller: 'AddTaskController',
                controllerAs: 'vm'
            })
            .state('edittask', {
                url: "/edittask/:id",
                params: {
                    id: { value: null }
                },
                templateUrl: "partials/views/tasks/edit.task.html",
                controller: 'EditTaskController',
                controllerAs: 'vm'
            });
    }

    function Run(): void {

    }
}
