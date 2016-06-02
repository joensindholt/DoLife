/// <reference path="../../typings/tsd.d.ts"/>

module Tasks {
    'use strict';

    export class TasksController {

        newTaskTitle: string;
        allTasks: Array<Task>;

        static $inject = ['TasksService'];

        constructor(
            private TasksService: TasksService
        ) {
            this.TasksService.getTasks().then(tasks => {
                this.allTasks = tasks;
            }).catch(err => {
                // TODO: Handle error nicer
                console.error(err);
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

            this.TasksService.addTask(title).then(task => {
                this.allTasks.push(task);
            }).catch(err => {
                _.remove(this.allTasks, {taskId: 'new'});
            });
        }

        handleNewTaskTitleKeyDown(event) {
            if (event.keyCode === 13) {
                this.addTask();
            }
        }

        markTaskComplete(task: Task) {
            task.taskStatus = 'complete';
            this.TasksService.updateStatus(task.taskId, 'complete').catch(err => {
                task.taskStatus = 'incomplete';
                // TODO: Handle error nicer
                console.error(err);
            });
        }

        markTaskIncomplete(task: Task) {
            task.taskStatus = 'incomplete';
            this.TasksService.updateStatus(task.taskId, 'incomplete').catch(err => {
                task.taskStatus = 'complete';
                // TODO: Handle error nicer
                console.error(err);
            });
        }

        deleteTask(task: Task) {
            // TODO: Do undo functionality
            _.remove(this.allTasks, { taskId: task.taskId });

            this.TasksService.deleteTask(task.taskId).then(() => {
                // TODO show saved
            }).catch(err => {
                this.allTasks.push(task);
                // TODO: Handle error nicer
                console.error(err);
            });
        }
    }
}

angular.module('Tasks')
    .controller('TasksController', Tasks.TasksController);
