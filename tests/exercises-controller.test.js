const request = require('supertest');

const {server} = require('../server/server');
const {exercises} = require('../mock-repository/exercise-data');
const seedData = require('../mock-repository/seed-data');

beforeAll((done) => {
    seedData.removeAndseedData();
    done();
});

afterAll((done) => {
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
                    expect(res.body.result).toEqual(exercises);
                })
                .end((err, res) => {
                    if (err) return done(err);
                    done();
                });
        });

        test('getExercise_GET returns exercise by id', (done) => {
            request(server)
                .get('/api/exercises/2')
                .expect(200)
                .expect((res) => {
                    expect(res.body.result).toEqual(exercises.find(e => e._id === 2));
                })
                .end((err, res) => {
                    if (err) return done(err);
                    done();
                });
        });
    });
});