var _ = require('lodash');
var q = require('q');

module.exports = function(eventStore, commandHandler){
  return {
    handleCommand : function(cmd){
      var defer = q.defer();
      eventStore.loadEvents(cmd.gameID).then(function(eventStream){
        var events;

        try{
          events = commandHandler(eventStream).executeCommand(cmd);
          console.log("hallo", cmd, events);
        } catch(e){
          defer.reject(e);
        }

        eventStore.storeEvents(cmd.gameID, events).then(function(){
          defer.resolve(events);
        }, function(err){
          defer.reject(err);
        });
      });
      return defer.promise;
    }
  }
};
