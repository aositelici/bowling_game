'use strict';

var Calculation = require('../src/model/calculation');

describe('Calculation: ', function () {
  describe('#calculateScore', function () {
    it('it should calculate the right score by the input string', function () {
      var string = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
      var calculation = new Calculation();
      expect(calculation.calculateScore(string)).toBe(167);
    });
  })
});