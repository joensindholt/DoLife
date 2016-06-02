/// <reference path="../../../typings/tsd.d.ts"/>

module Common {
    export function navbar() {
        return {
            bindings: {
            },
            controller: Common.NavbarController,
            controllerAs: 'vm',
            templateUrl: 'common/navbar/navbar.html',
            restrict: 'E',
            replace: true
        };
    }

    export class NavbarController{
    }
}

angular.module('Common')
    .component('dlNavbar', Common.navbar());
