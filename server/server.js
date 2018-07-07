const express = require('express');
const bodyParser = require('body-parser');

const userController = require('../controllers/users-controller');
const muscleGroupsController = require('../controllers/muscle-groups-controller');
const exercisesController = require('../controllers/exercises-controller');
const logsController = require('../controllers/logs-controller');

const app = express();

//adding middleware to parse json from request
app.use(bodyParser.json());

// USER ROUTING //
app.get('/api/users', userController.listUsers_GET);
app.get('/api/users/:id', userController.getUser_GET);

// BODYPART ROUTING //
app.get('/api/bodyparts', muscleGroupsController.listMuscleGroups_GET);
app.get('/api/bodyparts/:id', muscleGroupsController.getMuscleGroup_GET);

// EXERCISE ROUTING //
app.get('/api/exercises', exercisesController.listExercises_GET);
app.get('/api/exercises/:id', exercisesController.getExercise_GET);

// LOG ROUTING //
app.get('/api/logs', logsController.listLogs_GET);
app.get('/api/logs/:id', logsController.getLog_GET);


// start the server on port 3000
app.listen(3000, () => {
    console.log('listening on 3000');
});