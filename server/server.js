const express = require('express');
const bodyParser = require('body-parser');

const userController = require('../controllers/users-controller');
const muscleGroupsController = require('../controllers/muscle-groups-controller');
const exercisesController = require('../controllers/exercises-controller');
const logsController = require('../controllers/logs-controller');
const seedData = require('../mock-repository/seed-data');

const app = express();

//adding middleware to parse json from request
app.use(bodyParser.json());

seedData.removeAndseedData();

// USER ROUTING //
app.get('/api/users', userController.listUsers_GET);
app.get('/api/users/:id', userController.getUser_GET);
app.post('/api/users', userController.saveUser_POST);

// BODYPART ROUTING //
app.get('/api/musclegroups', muscleGroupsController.listMuscleGroups_GET);
app.get('/api/musclegroups/:id', muscleGroupsController.getMuscleGroup_GET);
app.post('/api/musclegroups', muscleGroupsController.saveMuscleGroup_POST);

// EXERCISE ROUTING //
app.get('/api/exercises', exercisesController.listExercises_GET);
app.get('/api/exercises/:id', exercisesController.getExercise_GET);
app.post('/api/exercises', exercisesController.saveExercise_POST);

// LOG ROUTING //
app.get('/api/logs', logsController.listLogs_GET);
app.get('/api/logs/:id', logsController.getLog_GET);
app.post('/api/logs', logsController.saveLog_POST);


// start the server on port 3000
const server = app.listen(3000, () => {
    console.log('listening on 3000');
});

module.exports = {
    app,
    server
};