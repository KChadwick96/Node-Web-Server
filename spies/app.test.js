const expect = require('expect')
const sinon = require('sinon')
const rewire = require('rewire')

const app = rewire('./app')

describe('App', () => {
    const db = {
        saveUser: sinon.spy()
    }
    app.__set__('db', db)

    it('should call the spy correctly', () => {
        const spy = sinon.spy()

        const message = 'hello'
        spy(message)

        sinon.assert.calledOnce(spy)
        sinon.assert.calledWith(spy, message)
    })

    it('should call saveUser with user object', () => {
        const email = 'bob@outlook.com'
        const password = 'abc123'

        app.handleSignup(email, password)
        sinon.assert.calledOnce(db.saveUser)
        sinon.assert.calledWith(db.saveUser, {email, password})
    })
})