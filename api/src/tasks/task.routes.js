/*jslint node: true */
"use strict";

const TaskRepository = require('./task.repository');

class TaskRoutes {
    constructor() {
        this.taskRepository = new TaskRepository();
    }

    registerRoutes(app) {
        // Get all tasks
        app.get('/tasks', (req, res) => {
            console.log('getting tasks from repository');
            this.taskRepository.getTasks(req.userId).then(tasks => {
                res.status(200).json(tasks);
            }).catch(err => {
                console.error('ERROR', err);
                res.status(500);
            });
        });

        // Add new task
        app.post('/tasks', (req, res) => {
            console.log('adding task to repository');
            let task = req.body;
            console.log('task', task);
            this.taskRepository.addTask(req.userId, task).then(taskResponse => {
                res.status(201).json(taskResponse);
            }).catch(err => {
                console.error('ERROR', err);
                res.status(500);
            });
        });

        // Update task status (complete/incomplete)
        app.put('/tasks/:taskId/status', (req, res) => {
            console.log('updating task status');
            let taskId = req.params.taskId;
            console.log('taskId', taskId);
            let status = req.body.value;
            console.log('status', status);
            this.taskRepository.updateTaskStatus(req.userId, taskId, status).then(() => {
                // TODO: Maybe do 303 response with task location '/tasks'
                res.status(200).send();
            }).catch(err => {
                console.error('ERROR', err);
                res.status(500);
            });
        });

        // Delete task
        app.delete('/tasks/:taskId', (req, res) => {
            console.log('deleting task');
            let taskId = req.params.taskId;
            console.log('taskId', taskId);
            this.taskRepository.deleteTask(req.userId, taskId).then(() => {
                res.status(204).send();
            }).catch(err => {
                console.error('ERROR', err);
                res.status(500);
            });
        });
    }
}

module.exports = TaskRoutes;
