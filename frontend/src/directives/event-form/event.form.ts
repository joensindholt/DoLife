/// <reference path="../../../typings/tsd.d.ts"/>

module Directives {

    export class EventFormController {

        form: ng.IFormController;
        submit: () => void;

        event: Model.Event;
        members: Array<Model.Member>;

        static $inject = ['$scope'];
        constructor(private $scope: ng.IScope){
        }

        handleSubmit() {
            if (this.form.$valid) {
                this.submit();
            }
        }

        addTask() {
            this.event.tasks = this.event.tasks || <any>[];
            this.event.tasks.push(<any>{});
        }
    }

    export function eventForm() {

        return {
            scope: {
                event: '=',
                members: '=',
                submit: '&',
                submitText: '@'
            },
            controller: Directives.EventFormController,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: 'partials/directives/event-form/event-form.html',
            restrict: 'E'
        };
    }
}

angular.module('Directives')
    .directive('eventForm', Directives.eventForm);
