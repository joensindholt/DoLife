/// <reference path="../../../typings/tsd.d.ts"/>

module Views {

    export class AddMemberController {

        member: Model.Member;
        form: ng.IFormController;

        static $inject = ['$state', 'MembersService'];

        constructor(
            private $state: angular.ui.IStateService,
            private membersService: Services.MembersService) {
        }

        addMember() {
            this.membersService.add(this.member).then(() => {
                this.$state.go('members');
            });
        }
    }
}

angular.module('Views')
    .controller('AddMemberController', Views.AddMemberController);
