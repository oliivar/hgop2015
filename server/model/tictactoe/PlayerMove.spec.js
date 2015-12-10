var tictactoeCommandHandler = require('./tictactoeCommandHandler');

describe('Player makes move command', function(){
  var given, when, then;

  beforeEach(function(){
    given= [{
      id:"1234",
      event:"GameCreated",
      userName: "Oli",
      nameOfGame: "The Game",
      timeStamp: "2015.12.02T11:29:44"
    }, {
      id:"12345",
      event:"GameJoined",
      userName: "Siggi",
      otherUserName: "Oli",
      timeStamp: "2015.12.02T11:30:56"
    }];
  });

  describe('when starting game', function(){
    it('should join game', function(){
      when={
        id: "12345",
        command: "PlayerMove",
        userName: "Oli",
        nameOfGame: "The Game",
        number: 1,
        player: 'X',
        timeStamp: "2015.12.10T11:30:50"
      };
      then=[{
        id: "12345",
        event: "PlayerMadeMove",
        userName: "Oli",
        nameOfGame: "The Game",
        number: 1,
        player: 'X',
        timeStamp: "2015.12.10T11:30:50"
      }];

    var actualEvents = tictactoeCommandHandler(given).executeCommand(when);
    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  })
});
});
