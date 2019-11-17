var chai = require('chai')
var expect = chai.expect
var { describe, it } = require('mocha')

var Math = require('../random_calculation/main.js')

describe('Random_Math unit test', function () {
  describe('Testing init score: ', function () {
    it('expect return 0', function () {
      expect(Math.displayScoreMath()).to.equal('Score:' + 0)
    })
  })
  describe('Testing for choosen True', function () {
    Math.genNewMath()
    Math.checkTrueMath()
    while (Math.getFinalAnswer() !== Math.getRightAns()) {
      Math.genNewMath()
    }
    it('expect score is 1 if final ans is right ans', function () {
      expect(Math.getScore()).to.equal(1)
    })
  })
  describe('Testing for choosen False', function () {
    Math.genNewMath()
    Math.checkFalseMath()
    while (Math.getFinalAnswer() !== Math.getWrongAns()) {
      Math.genNewMath()
    }
    it('expect score is 1 if final ans is wrong ans', function () {
      expect(Math.getScore()).to.equal(1)
    })
  })
})
