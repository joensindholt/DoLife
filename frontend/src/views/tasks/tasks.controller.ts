/// <reference path="../../../typings/tsd.d.ts"/>

module Views {

    export class TasksController {

        tasks: Array<Model.Task>

        static $inject = ['$state', '$mdDialog', 'TasksService'];

        constructor(
            private $state: angular.ui.IStateService,
            private $mdDialog: ng.material.IDialogService,
            private tasksService: Services.TasksService) {
                this.tasksService.getAll().then((tasks) => {
                    this.tasks = tasks;
                });
        }

        openTask(task: Model.Task) {
            this.$state.go('edittask', {id: task._id});
        }

        deleteTask(task: Model.Task, event: any) {
            let confirm =
                this.$mdDialog.confirm()
                    .title('Er du helt sikker på at du vil slette ' + task.title)
                    .textContent('Slettede opgaver kan ikke genskabes eller på anden måde findes frem igen')
                    .ariaLabel('Er du sikker?')
                    .targetEvent(event)
                    .ok('Ja, slet ' + task.title)
                    .cancel('Hov nej, det var ikke meningen');

            this.$mdDialog.show(confirm).then(() => {
                // User confirmed - let's delete the task
                this.tasksService.delete(task).then(() => {
                    // ...and reflect it in the UI
                    _.remove(this.tasks, (m) => {
                        return m._id == task._id;
                    });
                });
            }, () => {
                // User denied - lets do nothing
            });
        }
    }
}

angular.module('Views')
    .controller('TasksController', Views.TasksController);
