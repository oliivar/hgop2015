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
<<<<<<< HEAD
      userName: "Oli",
      nameOfGame: "The Game",
      timeStamp: "2015.12.02T11:29:44"
=======
      userName: "Gulli",
      timeStamp: "2015.12.02T11:29:44",
      name:"TheFirstGame"
>>>>>>> fda88af679eead8c9f010a576df7410380235217
    }];

    var actualEvents = tictactoeCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });

  it('should create game with another user another time',function(){
    given= [];
    when={
      id:"12347",
<<<<<<< HEAD
      command:"CreateGame",
      userName : "Siggi",
      nameOfGame:"The Game",
=======
      gameId:"1",
      comm:"CreateGame",
      userName : "Halli",
      name:"TheFirstGame",
>>>>>>> fda88af679eead8c9f010a576df7410380235217
      timeStamp: "2015.12.02T10:29:44"
    };
    then=[{
      id:"12347",
      gameId:"1",
      event:"GameCreated",
<<<<<<< HEAD
      userName: "Siggi",
      nameOfGame: "The Game",
      timeStamp: "2015.12.02T10:29:44"
    }];

    var actualEvents = tictactoeCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });
});



=======
      userName: "Halli",
      timeStamp: "2015.12.02T10:29:44",
      name:"TheFirstGame"
    }];

    var actualEvents = tictactoeCommandHandler(given).executeCommand(when);
    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });
});
>>>>>>> fda88af679eead8c9f010a576df7410380235217
