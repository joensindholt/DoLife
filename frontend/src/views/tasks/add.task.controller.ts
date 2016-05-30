/// <reference path="../../../typings/tsd.d.ts"/>

module Views {

    export class AddTaskController {

        task: Model.Task;
        form: ng.IFormController;

        static $inject = ['$state', 'TasksService'];

        constructor(
            private $state: angular.ui.IStateService,
            private tasksService: Services.TasksService) {
        }

        addTask() {
            this.tasksService.add(this.task).then(() => {
                this.$state.go('tasks');
            });
        }
    }
}

angular.module('Views')
    .controller('AddTaskController', Views.AddTaskController);
