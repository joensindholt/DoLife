/// <reference path="../../../typings/tsd.d.ts"/>

module Views {

    export class EventsController {

        events: Array<Model.Event>

        static $inject = ['$state', '$mdDialog', 'EventsService'];

        constructor(
            private $state: angular.ui.IStateService,
            private $mdDialog: ng.material.IDialogService,
            private eventsService: Services.EventsService) {
                this.eventsService.getAll().then((events) => {
                    this.events = events;
                });
        }

        openEvent(event: Model.Event) {
            this.$state.go('editevent', {id: event._id});
        }

        deleteEvent(event: Model.Event, _event: any) {
            let confirm =
                this.$mdDialog.confirm()
                    .title('Er du helt sikker på at du vil slette ' + event.title)
                    .textContent('Slettede kampe kan ikke genskabes eller på anden måde findes frem igen')
                    .ariaLabel('Er du sikker?')
                    .targetEvent(_event)
                    .ok('Ja, slet ' + event.title)
                    .cancel('Hov nej, det var ikke meningen');

            this.$mdDialog.show(confirm).then(() => {
                // User confirmed - let's delete the event
                this.eventsService.delete(event).then(() => {
                    // ...and reflect it in the UI
                    _.remove(this.events, (m) => {
                        return m._id == event._id;
                    });
                });
            }, () => {
                // User denied - lets do nothing
            });
        }
    }
}

angular.module('Views')
    .controller('EventsController', Views.EventsController);
