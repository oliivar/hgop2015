var tictactoeCommandHandler = require('./tictactoeCommandHandler');

describe('create game command', function(){
  var given, when, then;

  it('should create game',function(){
    given= [];
    when={
      id:"1234",
      command:"CreateGame",
      userName : "Oli",
      nameOfGame: "The Game",
      timeStamp: "2015.12.02T11:29:44"
    };
    then=[{
      id:"1234",
      event:"GameCreated",
      userName: "Oli",
      timeStamp: "2015.12.02T11:29:44"
    }];

    var actualEvents = tictactoeCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });

  it('should create game with another user another time',function(){
    given= [];
    when={
      id:"12347",
      command:"CreateGame",
      userName : "Siggi",
      name:"The Game",
      timeStamp: "2015.12.02T10:29:44"
    };
    then=[{
      id:"12347",
      event:"GameCreated",
      userName: "Siggi",
      timeStamp: "2015.12.02T10:29:44"
    }];

    var actualEvents = tictactoeCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });
});



