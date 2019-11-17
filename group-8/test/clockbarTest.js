var chai = require('chai')
var expect = chai.expect
var { describe, it } = require('mocha')
// get instant for testing
let clockBar = require('../clock_bar/class.js')


describe('clock bar unit test', function () {

  describe('test time out before running process', function () {
    it('getTimeout should return 0', function () {
      expect(clockBar.getTimeout()).to.equal(0)
    })
  })

  describe('test setTimeout', function () {

    it('getTimeout should return 1 when setTimeout true', function () {
      clockBar.setTimeout('true')
      expect(clockBar.getTimeout()).to.equal(1)
    })

    it('getTimeout should return 0 when setTimeout false', function () {
      clockBar.setTimeout('false')
      expect(clockBar.getTimeout()).to.equal(0)
    })
  })

  describe('test timeProcess', function () {
    it('expect getTimeout return 1 after timeProcess finsih', function (done) {
      clockBar.setTimeout('false')
      clockBar.timeProcess()
      done()
      expect(clockBar.getTimeout()).to.equal(1)
    })
  })
})
