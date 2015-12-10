var tictactoeCommandHandler = require('./tictactoeCommandHandler');

describe('join game command', function(){

  var given, when, then;

  it('should join game',function(){
    given= [{
      id:"1234",
      event:"GameCreated",
      userName: "Oli",
      timeStamp: "2015.12.02T11:29:44"
    }];
    when={
      id:"12345",
      command:"JoinGame",
      userName : "Siggi",
      name:"The Game",
      timeStamp: "2015.12.02T11:30:56"
    };
    then=[{
      id:"12345",
      event:"GameJoined",
      userName: "Siggi",
      otherUserName: "Oli",
      timeStamp: "2015.12.02T11:30:56"
    }];

    var actualEvents = tictactoeCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });

  it('No game in action',function(){
    given= [];
    when={
      id:"12345",
      command:"JoinGame",
      userName : "Siggi",
      name:"The Game",
      timeStamp: "2015.12.02T11:30:55"
    };
    then=[{
      id:"12345",
      event:"NoGameInAction",
      userName: "Siggi",
      timeStamp: "2015.12.02T11:30:55"
    }];

    var actualEvents = tictactoeCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });
});
