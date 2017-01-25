var Q = require('q');
var Bracket = require('./bracketModel.js');

var findBrackets = Q.nbind(Bracket.find, Bracket);
var createBracket = Q.nbind(Bracket.create, Bracket);
var getBracket = Q.nbind(Bracket.findOne, Bracket);

module.exports = {

  allBrackets: function(req, res, next) {

    findBrackets({})
      .then(function(brackets) {
        console.log('BRACKETS FOUND:', brackets);
        res.json(brackets);
      })
      .fail(function(err) {
        next(err);
      });
  },

  newBracket: function(req, res, next) {

    var name = req.body.name;
    var teams = req.body.teams;
    var size = req.body.size;

    var newBracket = {
      name: name,
      teams: teams,
      size: size
    };

    createBracket(newBracket);
    res.send(newBracket);
  },

  updateBracket: function(req, res, next) {

    var name = req.body.name;
    var teams = req.body.teams;
    var size = req.body.size;

    var newBracket = {
      name: name,
      teams: teams,
      size: size
    };

    Bracket.findOneAndUpdate({name: name}, newBracket, function(err, bracket) {
      if (err) {
        console.error(err);
      } else {
        res.send(bracket);
      }
    });
  },

  getBracket: function(req, res, next) {

    getBracket({name: req.params.name})
      .then(function(bracket) {
        console.log('BRACKET FOUND!', bracket);
        res.json(bracket);
      })
      .fail(function(err) {
        next(err);
      });
  }

};