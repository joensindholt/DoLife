/// <reference path="../../../typings/tsd.d.ts"/>

module Views {

    export class EditEventController {

        eventId: string;
        event: Model.Event;
        members: Array<Model.Member>;

        form: ng.IFormController;

        static $inject = ['$state', '$stateParams', 'EventsService', 'MembersService'];

        constructor(
            private $state: angular.ui.IStateService,
            private $stateParams: any,
            private eventsService: Services.EventsService,
            private membersService: Services.MembersService) {

                this.eventId = this.$stateParams.id;
                this.eventsService.get(this.eventId).then((event) => {
                    this.event = event;
                });

                this.membersService.getAll().then((members: Array<Model.Member>) => {
                    this.members = members;
                });
        }

        updateEvent() {
            this.eventsService.update(this.event).then(() => {
                this.$state.go('events');
            });
        }
    }
}

angular.module('Views')
    .controller('EditEventController', Views.EditEventController);
