var tictactoeCommandHandler = require('./tictactoeCommandHandler');

describe('create game command', function(){
  var given, when, then;

  it('should create game',function(){
    given= [];
    when={
      id:"1234",
      gameID: "999",
      command:"createGame",
      userName : "Oli",
      nameOfGame: "The Game",
      timeStamp: "2015.12.02T11:29:44"
    };
    then=[{
      id:"1234",
      gameID: "999",
      event:"GameCreated",
      userName: "Oli",
      nameOfGame: "The Game",
      timeStamp: "2015.12.02T11:29:44"
    }];

    var actualEvents = tictactoeCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });

  it('should create game with another user another time',function(){
    given= [];
    when={
      id:"12347",
      gameID: "1",
      command:"createGame",
      userName : "Siggi",
      nameOfGame:"The Game",
      timeStamp: "2015.12.02T10:29:44"
    };
    then=[{
      id:"12347",
      gameID:"1",
      event:"GameCreated",
      userName: "Siggi",
      nameOfGame: "The Game",
      timeStamp: "2015.12.02T10:29:44"
    }];

    var actualEvents = tictactoeCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });
});




