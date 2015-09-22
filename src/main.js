'use strict';

var Game = require('./model/game');

function calculateScore(string) {
  var game = new Game();
  var score = game.calculateScore(string);
  console.log(score);
}

exports.calculateScore = calculateScore;