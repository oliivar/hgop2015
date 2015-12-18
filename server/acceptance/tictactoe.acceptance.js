'use strict';

var should = require('should');
var request = require('supertest');
var user;
user = require('./user.js').user();
//noinspection JSUnresolvedVariable
var acceptanceUrl = process.env.ACCEPTANCE_URL;
//var acceptanceUrl = require('../app');

describe('TEST ENV GET /api/gameHistory', function () {

  it('Should have ACCEPTANCE_URL environment variable exported.', function () {
    //noinspection BadExpressionStatementJS
    acceptanceUrl.should.be.ok;
  });

  it('should execute same test using old style', function (done) {

    var command =     {
      id : "1234",
      command: "createGame",
      userName: "Oli",
      nameOfGame: "The Game",
      gameID : "999",
      timeStamp: "2014-12-02T11:29:29"
    };

    var req = request(acceptanceUrl);
    //noinspection JSUnresolvedFunction
    req
      .post('/api/createGame')
      .type('json')
      .send(command)
      .end(function (err, res) {
        if (err) return done(err);
        //noinspection JSUnresolvedFunction
        request(acceptanceUrl)
          .get('/api/gameHistory/999')
          .expect(200)
          .expect('Content-Type', /json/)
          .end(function (err, res) {
            if (err) return done(err);
            res.body.should.be.instanceof(Array);
            //noinspection JSUnresolvedFunction
            should(res.body).eql(
              [{
                "id": "1234",
                "gameID": "999",
                "event": "GameCreated",
                "userName": "Oli",
                "nameOfGame": "The Game",
                "timeStamp": "2014-12-02T11:29:29"
              }]);
            done();
          });
      });
  });

  function given () {

    var acceptanceUrl;
    var should = require('should');
    var request = require('supertest');
    var q = require('q');

    //var acceptanceUrl = process.env.ACCEPTANCE_URL;
    acceptanceUrl = require('../app');

    // Wrap a single command in a promise and execute it
    function executeCommand(command) {
      var req;
      var deferred = q.defer();
      req = request(acceptanceUrl);
      //noinspection JSUnresolvedFunction
      req.post('/api/' + command.command)
        .type('json')
        .send(command)
        .end(function(err, res)  {
          if (err) {
            console.error('Error posting command "' + command.command + '": ', err);
            deferred.reject(err);
          }
          deferred.resolve(res);
        });
      return deferred.promise;
    }

    // Takes a list of commands and executes them sequentially
    function executeCommands(commands) {
      return commands.reduce(function(promise, command) {
        return promise.then(function(result) {
          return executeCommand(command, result);
        });
      }, q());
    }

    return function given(user) {
      var givenAPI;
      givenAPI = {
        'condition': {
          'event': '',
          'gameID': user.getCommand().gameID,
          'gameName': user.getCommand().gameName,
          'winnerName': ''
        },
        'commands': [user.getCommand()],
        'state': {
          'gameID': user.getCommand().gameID,
          'ownerName': user.getUserName(),
          'gameName': user.getCommand().gameName,
          'currentUser': user,
          'whosTurn': 'X'
        },
        'expect': function expect (event) {
          givenAPI.condition.event = event;
          return givenAPI;
        },
        'withName': function (gameName) {
          givenAPI.condition.gameName = gameName;
          return givenAPI;
        },
        'isOk': function (done) {
          var expectedEvent = {
            "id": "999",
            "event": givenAPI.condition.event,
            "userName": givenAPI.state.currentUser.getUserName(),
            "timeStamp": "2017.12.02T10:29:44"
          };

          if (givenAPI.condition.event === 'GameCreated') {
            expectedEvent.gameID = givenAPI.state.gameID;
            expectedEvent.gameName = givenAPI.condition.gameName;
            expectedEvent.whosTurn = givenAPI.state.whosTurn;
          }

          executeCommands(givenAPI.commands)
            .then(function () {
              //noinspection JSUnresolvedFunction
              request(acceptanceUrl)
                .get('/api/gameHistory/' + givenAPI.state.gameID)
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                  if (err) return done(err);
                  //noinspection JSUnresolvedFunction
                  res.body.should.be.instanceof(Array);
                  //noinspection JSUnresolvedFunction
                  should(res.body.pop()).eql(expectedEvent);
                  done();
                });
            });
        }
      };

      return givenAPI;
    }
  }

  it('Should execute fluid API test', function (done) {

    given(user("Oli").createGame("999")).
    expect("GameCreated").withName("The Game").isOk(done);
   });
});




