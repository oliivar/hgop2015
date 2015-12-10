module.exports = function tictactoeCommandHandler(events) {
  var gameState = {
    gameCreatedEvent : events[0],
    tictactoeBoard: [[1,2,3],[4,5,6],[7,8,9]]
  };


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
      if(gameState.tictactoeBoard [cmd.number] !== 'X' || gameState.tictactoeBoard [cmd.number] !== 'O'){
        return [{
          id: cmd.id,
          event: "PlayerMadeMove",
          userName: cmd.userName,
          nameOfGame: gameState.gameCreatedEvent.nameOfGame,
          number: 1,
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
          number: 1,
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
