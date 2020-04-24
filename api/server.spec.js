const request = require('supertest');
const server = require('./server')
const db = require('../data/dbConfig');
const Foods = require('../food/foodModel')

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
            await db('foods').truncate();
        });
        it('should add the food', async () => {
            await Foods.addFood({name: 'candy', protein: '0', carbs: '0', fat: '0'})

            const foods = await db('foods');

            expect(foods).toHaveLength(1);
        })
        it('should add the provided food to the database', async () => {
            let food = await Foods.addFood({name: 'candy', protein: '0', carbs: '0', fat: '0'})
            expect(food.name).toBe('candy')
        })
    })

    describe('DELETE', () => {
        beforeEach (async () => {
            await db('foods').truncate();
        })
        it('should delete a food from the list', async () => {
            await Foods.addFood({name: 'candy', protein: '0', carbs: '0', fat: '0'})
            await Foods.addFood({name: 'corn', protein: '0', carbs: '0', fat: '0'})
            await Foods.addFood({name: 'soda', protein: '0', carbs: '0', fat: '0'})
    
            await Foods.deleteFood(1);

            const foods = await db('foods');
    
            expect(foods.length).toBe(2);
        })
        it('should return JSON', () => {
            return request(server).get('/')
            .then(res => {
                expect(res.type).toMatch(/json/i);
            })
        })
    })
})