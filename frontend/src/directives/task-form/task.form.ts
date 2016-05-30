/// <reference path="../../../typings/tsd.d.ts"/>

module Directives {

    export class TaskFormController {

        form: ng.IFormController;
        submit: () => void;

        static $inject = ['$scope'];
        constructor(private $scope: ng.IScope){
        }

        handleSubmit() {
            if (this.form.$valid) {
                this.submit();
            }
        }
    }

    export function taskForm() {

        return {
            scope: {
                task: '=',
                submit: '&',
                submitText: '@'
            },
            controller: Directives.TaskFormController,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: 'partials/directives/task-form/task-form.html',
            restrict: 'E'
        };
    }
}

angular.module('Directives')
    .directive('taskForm', Directives.taskForm);
