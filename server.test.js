const request = require('supertest')
const expect = require('expect')

const app = require('./server')
const utils = require('./helpers/utils')

describe('Users', () => {
    it('should return user response', done => {
        request(app)
            .get('/users/1')
            .expect(200)
            .expect(res => {
                expect(res.body).toEqual(expect.objectContaining({
                    first_name: expect.any(String),
                    last_name: expect.any(String),
                    age: expect.any(Number)
                }))
            })
            .end(done)
    })
    
    it('should return array of users', done => {
        request(app)
            .get('/users')
            .expect(200)
            .expect(res => {
                const expecting = expect.arrayContaining([{
                    first_name: expect.any(String),
                    last_name: expect.any(String),
                    age: expect.any(Number)
                }])
                expect(res.body).toEqual(expecting)
            })
            .end(done)
    })
})

describe('Misc', () => {
    it('should return hello world response', done => {
        request(app)
            .get('/hello')
            .expect(200)
            .expect({
                message: 'Hello world!'
            })
            .end(done);
    })

    it('should square a number', () => {
        const value = 4
        const res = utils.square(value)
        expect(res).toEqual(value * value)
    })
})