const request = require('supertest');

const {server, app} = require('../server/server');
const {muscleGroups} = require('../mock-repository/muscle-group-data');
const seedData = require('../mock-repository/seed-data');

beforeAll((done) => {
    seedData.removeAndseedData();
    done();
});

afterAll((done) => {
    server.close();
    done();
});

describe('/api/musclegroups', () => {
    describe('GET', () => {
        test('listMuscleGroups_GET retreive all muscle groups', (done) => {
            request(server)
                .get('/api/musclegroups')
                .expect(200)
                .expect((res) => {
                    expect(res.body.result).toEqual(muscleGroups);
                })
                .end((err, res) => {
                    if (err) return done(err);
                    done();
                });
        });

        test('getMuscleGroup_GET retreive muscle group by id', (done) => {
            request(server)
                .get('/api/musclegroups/2')
                .expect(200)
                .expect((res) => {
                    expect(res.body.result).toEqual(muscleGroups.find(mg => mg._id === 2));
                })
                .end((err, res) => {
                    if (err) return done(err);
                    done();
                });
        });
    });
});