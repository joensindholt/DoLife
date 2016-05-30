/// <reference path="../../../typings/tsd.d.ts"/>

module Views {

    export class EditTaskController {

        taskId: string;
        task: Model.Task;
        form: ng.IFormController;

        static $inject = ['$state', '$stateParams', 'TasksService'];

        constructor(
            private $state: angular.ui.IStateService,
            private $stateParams: any,
            private tasksService: Services.TasksService) {
                this.taskId = this.$stateParams.id;
                this.tasksService.get(this.taskId).then((task) => {
                    this.task = task;
                });
        }

        updateTask() {
            this.tasksService.update(this.task).then(() => {
                this.$state.go('tasks');
            });
        }
    }
}

angular.module('Views')
    .controller('EditTaskController', Views.EditTaskController);
