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
    it('should let player move', function(){
      when={
        id: "12345",
        command: "PlayerMove",
        userName: "Oli",
        nameOfGame: "The Game",
        x: 0,
        y: 0,
        player: 'X',
        timeStamp: "2015.12.10T11:30:50"
      };
      then=[{
        id: "12345",
        event: "PlayerMadeMove",
        userName: "Oli",
        nameOfGame: "The Game",
        x: 0,
        y: 0,
        player: 'X',
        timeStamp: "2015.12.10T11:30:50"
      }];

    var actualEvents = tictactoeCommandHandler(given).executeCommand(when);
    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
    })
  });

  describe('when making illegal move', function(){
    it('should try to make move where someone moved before', function(){
      given.push({
        id: "12345",
        event: "PlayerMadeMove",
        userName: "Oli",
        nameOfGame: "The Game",
        x: 0,
        y: 0,
        player: 'X',
        timeStamp: "2015.12.10T11:30:50"
      });

      when={
        id: "12345",
        command: "PlayerMove",
        userName: "Oli",
        nameOfGame: "The Game",
        x: 0,
        y: 0,
        player: 'X',
        timeStamp: "2015.12.10T11:30:50"
      };
      then=[{
        id: "12345",
        event: "Can't place there",
        userName: "Oli",
        nameOfGame: "The Game",
        x: 0,
        y: 0,
        player: 'X',
        timeStamp: "2015.12.10T11:30:50"
      }];

      var actualEvents = tictactoeCommandHandler(given).executeCommand(when);
      JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
    })
  });

  describe('player wins game', function(){
    it('should let player win a game horizontal', function(){
     given.push(
       {event: "PlayerMadeMove", x: 0, y: 0, player: 'X'},
       {event: "PlayerMadeMove", x: 1, y: 0, player: 'O'},
       {event: "PlayerMadeMove", x: 0, y: 1, player: 'X'},
       {event: "PlayerMadeMove", x: 1, y: 1, player: 'O'});

      when={
        id: "12345",
        command: "PlayerMove",
        userName: "Oli",
        nameOfGame: "The Game",
        x: 0,
        y: 2,
        player: 'X',
        timeStamp: "2015.12.10T11:30:50"
      };
      then=[{
        id: "12345",
        event: "PlayerMadeMove",
        userName: "Oli",
        nameOfGame: "The Game",
        x: 0,
        y: 2,
        player: 'X',
        timeStamp: "2015.12.10T11:30:50"
      }];

      var actualEvents = tictactoeCommandHandler(given).executeCommand(when);
      JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
     })
  });

  describe('player wins game', function(){
    it('should let player win a game vertical', function(){
      given.push(
        {event: "PlayerMadeMove", x: 0, y: 0, player: 'X'},
        {event: "PlayerMadeMove", x: 0, y: 1, player: 'O'},
        {event: "PlayerMadeMove", x: 1, y: 0, player: 'X'},
        {event: "PlayerMadeMove", x: 1, y: 1, player: 'O'});

      when={
        id: "12345",
        command: "PlayerMove",
        userName: "Oli",
        nameOfGame: "The Game",
        x: 2,
        y: 0,
        player: 'X',
        timeStamp: "2015.12.10T11:30:50"
      };
      then=[{
        id: "12345",
        event: "PlayerMadeMove",
        userName: "Oli",
        nameOfGame: "The Game",
        x: 2,
        y: 0,
        player: 'X',
        timeStamp: "2015.12.10T11:30:50"
      }];

      var actualEvents = tictactoeCommandHandler(given).executeCommand(when);
      JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
    })
  });

  describe('player wins game', function(){
    it('should let player win a game horizontal', function(){
      given.push(
        {event: "PlayerMadeMove", x: 0, y: 0, player: 'X'},
        {event: "PlayerMadeMove", x: 1, y: 0, player: 'O'},
        {event: "PlayerMadeMove", x: 1, y: 1, player: 'X'},
        {event: "PlayerMadeMove", x: 0, y: 1, player: 'O'});

      when={
        id: "12345",
        command: "PlayerMove",
        userName: "Oli",
        nameOfGame: "The Game",
        x: 2,
        y: 2,
        player: 'X',
        timeStamp: "2015.12.10T11:30:50"
      };
      then=[{
        id: "12345",
        event: "PlayerMadeMove",
        userName: "Oli",
        nameOfGame: "The Game",
        x: 2,
        y: 2,
        player: 'X',
        timeStamp: "2015.12.10T11:30:50"
      }];

      var actualEvents = tictactoeCommandHandler(given).executeCommand(when);
      JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
    })
  });

  describe('player makes illegal move', function(){
    it('should try to make move when not his turn', function(){
      given.push(
        {event: "PlayerMadeMove", x: 0, y: 0, player: 'X'});

      when={
        id: "12345",
        command: "IllegalMove",
        userName: "Oli",
        nameOfGame: "The Game",
        x: 2,
        y: 2,
        player: 'X',
        timeStamp: "2015.12.10T11:30:50"
      };
      then=[{
        id: "12345",
        event: "Wait it's not your turn",
        userName: "Oli",
        nameOfGame: "The Game",
        x: 2,
        y: 2,
        player: 'X',
        timeStamp: "2015.12.10T11:30:50"
      }];

      var actualEvents = tictactoeCommandHandler(given).executeCommand(when);
      JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
    })
  });

  describe('player makes illegal move', function(){
    it('should try to make move when not his turn', function(){
      given.push(
        {event: "PlayerMadeMove", x: 0, y: 0, player: 'X'},
        {event: "PlayerMadeMove", x: 1, y: 1, player: 'O'});

      when={
        id: "12345",
        command: "IllegalMove",
        userName: "Oli",
        nameOfGame: "The Game",
        x: 2,
        y: 2,
        player: 'O',
        timeStamp: "2015.12.10T11:30:50"
      };
      then=[{
        id: "12345",
        event: "Wait it's not your turn",
        userName: "Oli",
        nameOfGame: "The Game",
        x: 2,
        y: 2,
        player: 'O',
        timeStamp: "2015.12.10T11:30:50"
      }];

      var actualEvents = tictactoeCommandHandler(given).executeCommand(when);
      JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
    })
  });
});
