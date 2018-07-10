const {User} = require('../models/user');
const {MuscleGroup} = require('../models/muscle-group');
const {Exercise} = require('../models/exercise');
const {Log} = require('../models/log');
const {Template} = require('../models/template');
const {TemplateExercise} = require('../models/template-exercise');


// create collections to store documents
const removeAndseedData = () => {
    // removing the users data
    User.remove({}).then(() => {
        // based on resolve of promise, we create the user data
        User.create([
            new User({
                name: 'rob',
                email: 'rob.quatela@gmail.com',
                password: 'password'
            }),
            new User({
                name: 'sarah',
                email: 'sarah.quatela@gmail.com',
                password: 'password'
            }),
            new User({
                name: 'eli',
                email: 'eli.franklin@gmail.com',
                password: 'password'
            })
        ]).then((userDocs) => {
            // the create user method returns a promise that contains the new array of users
            // we will use this array later to add logs to users

            // remove the current muscle groups in mongodb
            MuscleGroup.remove({}).then(() => {
                // remove returns a promise in which we resolve and create a new array of muscle groups
                MuscleGroup.create([
                    new MuscleGroup({
                        name: 'Chest'
                    }),
                    new MuscleGroup({
                        name: 'Back'
                    }),
                    new MuscleGroup({
                        name: 'Quadriceps'
                    }),
                    new MuscleGroup({
                        name: 'Biceps'
                    }),
                    new MuscleGroup({
                        name: 'Triceps'
                    })
                ]).then((muscleGroupDocs) => {
                    // promise returns a new array of muscle groups
                    // we will use this to add reference docs to exercises

                    //remove current exercise data in mongodb
                    Exercise.remove({}).then(() => {
                        // create new exercise documents in mongodb with muscle groups as sub reference
                        Exercise.create([
                            new Exercise({
                                name: 'Barbell Bench Press',
                                muscleGroup: muscleGroupDocs[0]
                            }),
                            new Exercise({
                                name: 'Barbell Squat',
                                muscleGroup: muscleGroupDocs[2]
                            }),
                            new Exercise({
                                name: 'Dumbbell Curl',
                                muscleGroup: muscleGroupDocs[3]
                            })
                        ]).then((exerciseDocs) => {
                            // exercise array is returned based on promise
                            // we will use this to add sub documents to muscle groups
                            muscleGroupDocs[0].exercises.push(exerciseDocs[0]);
                            muscleGroupDocs[2].exercises.push(exerciseDocs[1]);
                            muscleGroupDocs[3].exercises.push(exerciseDocs[2]);
                            muscleGroupDocs[0].save();
                            muscleGroupDocs[2].save();
                            muscleGroupDocs[3].save();

                            // remove current logs from mongodb
                            Log.remove({}).then(() => {
                                // create new array of log documents referencing the exercise array result and user array result above
                                Log.create([
                                    new Log({
                                        date: new Date('5/1/2018'),
                                        exercise: exerciseDocs[0],
                                        set: 1,
                                        weight: 280,
                                        reps: 10,
                                        user: userDocs[0]
                                    }),
                                    new Log({
                                        date: new Date('5/1/2018'),
                                        exercise: exerciseDocs[0],
                                        set: 2,
                                        weight: 280,
                                        reps: 10,
                                        user: userDocs[0]
                                    }),
                                    new Log({
                                        date: new Date('5/1/2018'),
                                        exercise: exerciseDocs[1],
                                        set: 1,
                                        weight: 405,
                                        reps: 10,
                                        user: userDocs[0]
                                    })
                                ]).then((logDocs) => {
                                    // using log document array result, we will push log sub documents to the correct exercise and user documents
                                    exerciseDocs[0].logs.push(logDocs[0]);
                                    exerciseDocs[0].logs.push(logDocs[1]);
                                    exerciseDocs[1].logs.push(logDocs[2]);
                                    exerciseDocs[0].save();
                                    exerciseDocs[1].save();

                                    userDocs[0].logs.push(logDocs[0]);
                                    userDocs[0].logs.push(logDocs[1]);
                                    userDocs[0].logs.push(logDocs[2]);
                                    userDocs[0].save();
                                });
                            });
                    });
                    });
                });
            });
        });       
    });
}

module.exports = {
    removeAndseedData
};


