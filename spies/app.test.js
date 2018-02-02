const expect = require('expect')
const sinon = require('sinon')

describe('App', () => {
    it('should call the spy correctly', () => {
        const spy = sinon.spy()

        const message = 'hello'
        spy(message)

        sinon.assert.calledOnce(spy)
        sinon.assert.calledWith(spy, message)
    })
})