/// <reference path="../../typings/tsd.d.ts"/>

module Tasks {
    'use strict';

    export class TasksController {

        newTaskTitle: string;
        allTasks: Array<Task>;
        errorMessage: string;
        loading: boolean;

        static $inject = ['$timeout', 'TasksService'];

        constructor(
            private $timeout: ng.ITimeoutService,
            private TasksService: TasksService
        ) {
            this.loading = true;

            this.TasksService.getTasks()
                .then(tasks => {
                    this.allTasks = tasks;
                    this.loading = false;
                }).catch(err => {
                    this.loading = false;
                    this.showError('We could not get your tasks from server', err);
                });
        }

        get tasks() {
            return _.filter(this.allTasks, { taskStatus: 'incomplete' });
        }

        get completedTasks() {
            return _.filter(this.allTasks, { taskStatus: 'complete' });
        }

        addTask() {
            if (!this.newTaskTitle) return;
            if (this.newTaskTitle.trim().length === 0) return;

            var title = this.newTaskTitle;

            this.newTaskTitle = '';

            this.TasksService.addTask(title)
                .then(task => {
                    this.allTasks.push(task);
                }).catch(err => {
                    _.remove(this.allTasks, {taskId: 'new'});
                    this.showError('We could not add your tasks', err);
                });
        }

        handleNewTaskTitleKeyDown(event) {
            if (event.keyCode === 13) {
                this.addTask();
            }
        }

        markTaskComplete(task: Task) {
            task.taskStatus = 'complete';
            this.TasksService.updateStatus(task.taskId, 'complete')
                .catch(err => {
                    task.taskStatus = 'incomplete';
                    this.showError('We could not complete your task', err);
                });
        }

        markTaskIncomplete(task: Task) {
            task.taskStatus = 'incomplete';
            this.TasksService.updateStatus(task.taskId, 'incomplete')
                .catch(err => {
                    task.taskStatus = 'complete';
                    this.showError('We could not mark you task as incomplete', err);
                });
        }

        deleteTask(task: Task) {
            _.remove(this.allTasks, { taskId: task.taskId });

            this.TasksService.deleteTask(task.taskId)
                .catch(err => {
                    this.allTasks.push(task);
                    this.showError('We could delete your task', err);
                });
        }

        showError(message: string, error: any) {
            this.errorMessage = 'Sorry. ' + message + '. There\'s more information in the console';
            console.log(error);

            this.$timeout(() => {
                this.errorMessage = null;
            }, 3000);
        }
    }
}

angular.module('Tasks')
    .controller('TasksController', Tasks.TasksController);
