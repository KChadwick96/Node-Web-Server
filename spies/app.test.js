const jest = require('jest')
const expect = require('expect')

describe('App', () => {
    it('should call the spy correctly', () => {
        const spy = jest.fn()
        spy()
        //expect(spy).toHaveBeenCalled()
    })
})