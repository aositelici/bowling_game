'use strict';

var GoalString = require('./src/goal-string');

var string = 'X|7/|9-|X|-8|8/|-6|X|X|X||81';
var goalString = new GoalString();
goalString.getStringArray(string);
var score = goalString.calculateScore();
console.log(score);