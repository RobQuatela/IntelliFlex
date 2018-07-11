const request = require('supertest');

const {server} = require('../server/server');
const seedData = require('../mock-repository/seed-data');
const {mongoose} = require('../server/database/mongoose');

beforeAll((done) => {
    return new Promise((resolve, reject) => {
        
        resolve(seedData.removeAndseedData);
        reject('could not complete');
    }).then(done());
});

afterAll((done) => {
    mongoose.disconnect();
    server.close();
    done();
});

describe('api/exercises', () => {
    describe('GET', () => {
        test('listExercises_GET list all exercises', (done) => {
            request(server)
                .get('/api/exercises')
                .expect(200)
                .expect((res) => {
                    expect(res.body.result.length).toEqual(3);
                })
                .end((err, res) => {
                    if (err) return done(err);
                    done();
                });
        });

        test('getExercise_GET returns exercise by id', (done) => {
            seedData.listExercises().then((exercises) => {
                request(server)
                .get(`/api/exercises/${exercises[0]._id}`)
                .expect(200)
                .expect((res) => {
                    expect(res.body.result._id).toEqual(exercises[0]._id);
                })
                .end((err, res) => {
                    if (err) return done(err);
                    done();
                });
            });
        });
    });
});

describe('api/logs', () => {
    describe('GET', () => {
        test('listLogs_GET list all logs', (done) => {
            request(server)
                .get('/api/logs')
                .expect(200)
                .expect((res) => {
                    expect(res.body.result.length).toEqual(3);
                })
                .end((err, res) => {
                    if (err) return done(err);
                    done();
                });
        });

        // test('getLog_GET returns log by id', (done) => {
        //     request(server)
        //         .get('/api/logs/2')
        //         .expect(200)
        //         .expect((res) => {
        //             expect(res.body.result._id).toEqual(logs.find(e => e._id === 2)._id);
        //         })
        //         .end((err, res) => {
        //             if (err) return done(err);
        //             done();
        //         });
        // });
    });
});

describe('/api/musclegroups', () => {
    describe('GET', () => {
        test('listMuscleGroups_GET retreive all muscle groups', (done) => {
            request(server)
                .get('/api/musclegroups')
                .expect(200)
                .expect((res) => {
                    expect(res.body.result.length).toEqual(5);
                })
                .end((err, res) => {
                    if (err) return done(err);
                    done();
                });
        });

        // test('getMuscleGroup_GET retreive muscle group by id', (done) => {
        //     request(server)
        //         .get('/api/musclegroups/2')
        //         .expect(200)
        //         .expect((res) => {
        //             expect(res.body.result).toEqual(muscleGroups.find(mg => mg._id === 2));
        //         })
        //         .end((err, res) => {
        //             if (err) return done(err);
        //             done();
        //         });
        // });
    });
});

describe('api/users', () => {
    describe('GET', () => {
        test('listUsers_GET list all users', (done) => {
            request(server)
                .get('/api/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body.result.length).toEqual(3);
                })
                .end((err, res) => {
                    if (err) return done(err);
                    done();
                });
        });

        // test('getUser_GET returns user by id', (done) => {
        //     request(server)
        //         .get('/api/users/2')
        //         .expect(200)
        //         .expect((res) => {
        //             expect(res.body.result).toEqual(users.find(e => e._id === 2));
        //         })
        //         .end((err, res) => {
        //             if (err) return done(err);
        //             done();
        //         });
        // });
    });
});

