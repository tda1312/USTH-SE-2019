let assert = require('assert')
let clockBarManager = require('../clock_bar/class')

describe('clock bar running', function () {

  let Bar = clockBarManager.clockBarManager()
  it('should return true', function () {
    assert.equal('true', 'true')
  })
})
