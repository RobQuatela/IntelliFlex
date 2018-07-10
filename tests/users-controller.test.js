const request = require('supertest');

const {server} = require('../server/server');
const {users} = require('../mock-repository/users-data');
const seedData = require('../mock-repository/seed-data');

beforeAll((done) => {
    seedData.removeAndseedData();
    done();
});

afterAll((done) => {
    server.close();
    done();
});

describe('api/users', () => {
    describe('GET', () => {
        test('listUsers_GET list all users', (done) => {
            request(server)
                .get('/api/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body.result).toEqual(users);
                })
                .end((err, res) => {
                    if (err) return done(err);
                    done();
                });
        });

        test('getUser_GET returns user by id', (done) => {
            request(server)
                .get('/api/users/2')
                .expect(200)
                .expect((res) => {
                    expect(res.body.result).toEqual(users.find(e => e._id === 2));
                })
                .end((err, res) => {
                    if (err) return done(err);
                    done();
                });
        });
    });
});