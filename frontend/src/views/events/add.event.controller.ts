/// <reference path="../../../typings/tsd.d.ts"/>

module Views {

    export class AddEventController {

        event: Model.Event;
        members: Array<Model.Member>;

        form: ng.IFormController;

        static $inject = ['$state', 'EventsService', 'MembersService'];

        constructor(
            private $state: angular.ui.IStateService,
            private eventsService: Services.EventsService,
            private membersService: Services.MembersService) {

                this.membersService.getAll().then((members: Array<Model.Member>) => {
                    this.members = members;
                });
        }

        addEvent() {
            this.eventsService.add(this.event).then(() => {
                this.$state.go('events');
            });
        }
    }
}

angular.module('Views')
    .controller('AddEventController', Views.AddEventController);
