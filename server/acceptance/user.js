/*Fekk hjalp fra samnemanda var alveg kominn i throt med
 * thetta en thurfti samt ymsar lagfaeringar til ad gera thetta ad minu*/

'use strict';

function user () {

  return function user(userName) {
    var userApi;
    userApi = {
      'state': {
        'command': {},
        'gameID': ''
      },
      'createGame': function (gameID) {
        userApi.state.gameID = gameID;
        userApi.state.command = {
          id: "999",
          command: "createGame",
          userName: userName,
          nameOfGame: gameID,
          gameID: gameID,
          timeStamp: "2017.12.02T10:29:44"
        };
        return userApi;
      },
      'getCommand': function () {
        return userApi.state.command;
      },
      'getGameId': function () {
        return userApi.state.gameID;
      },
      'getUserName': function () {
        return userName;
      }
    };
    return userApi;
  }
}

module.exports.user = user;
