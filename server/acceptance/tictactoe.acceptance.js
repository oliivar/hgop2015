'use strict';

var should = require('should');
var request = require('supertest');
//var acceptanceUrl = process.env.ACCEPTANCE_URL;
var acceptanceUrl = require('../app');

describe('TEST ENV GET /api/gameHistory', function () {

  it('Should have ACCEPTANCE_URL environment variable exported.', function () {
    acceptanceUrl.should.be.ok;
  });

  it('should execute same test using old style', function (done) {

    var command =     {
      id : "1234",
      gameID : "999",
      command: "createGame",
      userName: "Oli",
      nameOfGame: "The Game",
      timeStamp: "2014-12-02T11:29:29"
    };

    var req = request(acceptanceUrl);
    req
      .post('/api/createGame')
      .type('json')
      .send(command)
      .end(function (err, res) {
        if (err) return done(err);
        request(acceptanceUrl)
          .get('/api/gameHistory/999')
          .expect(200)
          .expect('Content-Type', /json/)
          .end(function (err, res) {
            if (err) return done(err);
            res.body.should.be.instanceof(Array);
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


   it('Should execute fluid API test', function (done) {

     function given(cmdName){
       console.log('givenfunction');
       var cmd={
         name:cmdName,
         destination:undefined
       };
       var expectations = [];
       var givenApi = {
         sendTo: function(dest){
           cmd.destination = dest;
           return givenApi;
         },
         expect: function(eventName){
           expectations.push(eventName);
           return givenApi;
         },
         and: givenApi.expect,
         when: function(done){
           command;
           done()
         }
       }
       return givenApi;
     }
     function user(userName){
       //console.log('user');
       console.log(userName);
       var cmd={
         name:userName,
         destination:undefined
       };

     }
     //console.log(userName);
     //given(user("Oli").createsGame("The Game"))
     //.expect("GameCreated").withName("The Game").isOk(done);

     done();
   });

});
