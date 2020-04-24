const request = require('supertest');
const server = require('./server')
const db = require('../data/dbConfig');

describe('server router functions', () => {
    describe('GET @ /foods ', () => {
        it('return 200 status on request', () => {
            request(server).get('/').then(res => {
                expect(res.status).toBe(200);
            })
        })
        it('should return JSON', () => {
            return request(server).get('/')
            .then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
        })

    describe('POST @ /', () => {
       beforeEach(async () => {
           await db('food').truncate();
       })
       it("return 201 on success", () => {
           return request(server)
            .post('/')
            .send({name: 'chicken'})
            .then(res => {
                expect(res.status).toBe(201)
            })
       })

    })
    describe('DELETE @ /foods/:id', () => {
    })
})