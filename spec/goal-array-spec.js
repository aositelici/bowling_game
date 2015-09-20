'use strict';

var GoalArray = require('../src/model/goal-array');

describe('GoalArray:', function () {
  describe('#getStringArray', function () {
    it('the array should include sub strings seperate by | or ||', function () {

      var string = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
      var goalArray = new GoalArray(string);

      expect(goalArray.getStringArray()).toEqual(['X', '7/', '9-', 'X', '-8', '8/', '-6', 'X', 'X', 'X', '81']);
    })
  })
});