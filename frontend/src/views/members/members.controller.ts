/// <reference path="../../../typings/tsd.d.ts"/>

module Views {

    export class MembersController {

        members: Array<Model.Member>

        static $inject = ['$state', '$mdDialog', 'MembersService'];

        constructor(
            private $state: angular.ui.IStateService,
            private $mdDialog: ng.material.IDialogService,
            private membersService: Services.MembersService) {
                console.debug('MembersCtrl: Getting members from members service');
                this.membersService.getAll().then((members) => {
                    this.members = members;
                });
        }

        openMember(member: Model.Member) {
            this.$state.go('editmember', {id: member._id});
        }

        deleteMember(member: Model.Member, event: any) {
            let confirm =
                this.$mdDialog.confirm()
                    .title('Er du helt sikker på at du vil slette ' + member.name)
                    .textContent('Slettede spillere kan ikke genskabes eller på anden måde findes frem igen')
                    .ariaLabel('Er du sikker?')
                    .targetEvent(event)
                    .ok('Ja, slet ' + member.name)
                    .cancel('Hov nej, det var ikke meningen');

            this.$mdDialog.show(confirm).then(() => {
                // User confirmed - let's delete the member
                this.membersService.delete(member).then(() => {
                    // ...and reflect it in the UI
                    _.remove(this.members, (m) => {
                        return m._id == member._id;
                    });
                });
            }, () => {
                // User denied - lets do nothing
            });
        }
    }
}

angular.module('Views')
    .controller('MembersController', Views.MembersController);
