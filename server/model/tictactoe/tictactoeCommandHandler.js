var _ = require('lodash');
module.exports = function tictactoeCommandHandler(events) {

  var gameState = {
    gameCreatedEvent : events[0],
    tictactoeBoard: [['','',''],['','',''],['','','']]
  };

  var eventHandlers={
    'PlayerMadeMove': function(event){
      gameState.tictactoeBoard[event.x][event.y] = event.player;
    }
  };

  _.each(events, function(event){
    var eventHandler = eventHandlers[event.event];
    if(eventHandler) eventHandler(event);
  });

  var handlers = {
    "CreateGame": function (cmd) {
      {
        return [{
          id: cmd.id,
          event: "GameCreated",
          userName: cmd.userName,
          nameOfGame: cmd.nameOfGame,
          timeStamp: cmd.timeStamp
        }];
      }
    },
    "JoinGame": function (cmd) {
      {
        if (gameState.gameCreatedEvent === undefined) {
          return [{
            id: cmd.id,
            event: "NoGameInAction",
            userName: cmd.userName,
            timeStamp: cmd.timeStamp
          }];
        }
        return [{
          id: cmd.id,
          event: "GameJoined",
          userName: cmd.userName,
          otherUserName: gameState.gameCreatedEvent.userName,
          nameOfGame: cmd.nameOfGame,
          timeStamp: cmd.timeStamp
        }];
      }
    },
    "PlayerMove": function(cmd){
      if(gameState.tictactoeBoard [cmd.x][cmd.y] === '' || gameState.tictactoeBoard [cmd.x][cmd.y] === ''){
        console.log(gameState.tictactoeBoard);
        return [{
          id: cmd.id,
          event: "PlayerMadeMove",
          userName: cmd.userName,
          nameOfGame: gameState.gameCreatedEvent.nameOfGame,
          x: cmd.x,
          y: cmd.y,
          player: cmd.player,
          timeStamp: cmd.timeStamp
        }]
      }
      else{
        return [{
          id: cmd.id,
          event: "Can't place there",
          userName: cmd.userName,
          nameOfGame: gameState.gameCreatedEvent.nameOfGame,
          x: cmd.x,
          y: cmd.y,
          player: cmd.player,
          timeStamp: cmd.timeStamp
        }]
      }
    }
  };

  return {
    executeCommand: function (cmd) {
      return handlers[cmd.command](cmd);
    }
  };
};
