/// <reference path="../../../typings/tsd.d.ts"/>

module Views {

    export class EditMemberController {

        memberId: string;
        member: Model.Member;
        form: ng.IFormController;

        static $inject = ['$state', '$stateParams', 'MembersService'];

        constructor(
            private $state: angular.ui.IStateService,
            private $stateParams: any,
            private membersService: Services.MembersService) {
                this.memberId = this.$stateParams.id;
                this.membersService.get(this.memberId).then((member) => {
                    this.member = member;
                });
        }

        updateMember() {
            this.membersService.update(this.member).then(() => {
                this.$state.go('members');
            });
        }
    }
}

angular.module('Views')
    .controller('EditMemberController', Views.EditMemberController);
