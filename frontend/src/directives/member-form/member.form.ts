/// <reference path="../../../typings/tsd.d.ts"/>

module Directives {

    export class MemberFormController {

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

    export function memberForm() {

        return {
            scope: {
                member: '=',
                submit: '&',
                submitText: '@'
            },
            controller: Directives.MemberFormController,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: 'partials/directives/member-form/member-form.html',
            restrict: 'E'
        };
    }
}

angular.module('Directives')
    .directive('memberForm', Directives.memberForm);
