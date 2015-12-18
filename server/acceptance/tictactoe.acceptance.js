/*Fekk hjalp fra samnemanda var alveg kominn i throt med
* thetta en thurfti samt ymsar lagfaeringar til ad gera thetta ad minu*/

'use strict';

var should = require('should');
var request = require('supertest');
var user = require('./user.js').user();
var given = require('./given.js').given();
//noinspection JSUnresolvedVariable
//var acceptanceUrl = process.env.ACCEPTANCE_URL;
var acceptanceUrl = require('../app');

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
        //noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
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
                "event": "GameCreated",
                "userName": "Oli",
                "nameOfGame": "The Game",
                "gameID": "999",
                "timeStamp": "2014-12-02T11:29:29"
              }]);
            done();
          });
      });
  });

  it('Should execute fluid API test', function (done) {

    given(user("Oli").createGame("999")).
    expect("GameCreated").withName("999").isOk(done);
   });
});




