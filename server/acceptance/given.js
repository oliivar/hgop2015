/*Fekk hjalp fra samnemanda var alveg kominn i throt med
 * thetta en thurfti samt ymsar lagfaeringar til ad gera thetta ad minu*/

function given () {

  var acceptanceUrl;
  var should = require('should');
  var request = require('supertest');
  var q = require('q');

  //var acceptanceUrl = process.env.ACCEPTANCE_URL;
  acceptanceUrl = require('../app');

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
        'nameOfGame': user.getCommand().nameOfGame,
        'winnerName': ''
      },
      'commands': [user.getCommand()],
      'state': {
        'gameID': user.getCommand().gameID,
        'ownerName': user.getUserName(),
        'nameOfGame': user.getCommand().nameOfGame,
        'currentUser': user
      },
      'expect': function expect (event) {
        givenAPI.condition.event = event;
        return givenAPI;
      },
      'withName': function (nameOfGame) {
        givenAPI.condition.nameOfGame = nameOfGame;
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
          expectedEvent.nameOfGame = givenAPI.condition.nameOfGame;
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

module.exports.given = given;
