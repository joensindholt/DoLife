/// <reference path="../../../typings/tsd.d.ts"/>

module Common {
    export function footer() {
        return {
            bindings: {
            },
            controller: Common.FooterController,
            controllerAs: 'vm',
            template: '<div class="footer"></div>',
            restrict: 'E',
            replace: true
        };
    }

    export class FooterController{
    }
}

angular.module('Common')
    .component('dlFooter', Common.footer());
