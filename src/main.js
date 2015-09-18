'use strict';

var Calculation = require('./model/calculation');

function calculateScore(string) {
  var calculation = new Calculation();
  var score = calculation.calculateScore(string);
  console.log(score);
}

exports.calculateScore = calculateScore;