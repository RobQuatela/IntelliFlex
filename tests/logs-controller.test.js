const request = require('supertest');

const {server} = require('../server/server');
const {logs} = require('../mock-repository/log-data');
const seedData = require('../mock-repository/seed-data');

beforeAll((done) => {
    seedData.removeAndseedData();
    done();
});

afterAll((done) => {
    server.close();
    done();
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

        test('getLog_GET returns log by id', (done) => {
            request(server)
                .get('/api/logs/2')
                .expect(200)
                .expect((res) => {
                    expect(res.body.result._id).toEqual(logs.find(e => e._id === 2)._id);
                })
                .end((err, res) => {
                    if (err) return done(err);
                    done();
                });
        });
    });
});