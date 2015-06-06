Meteor.methods({
  addMessage: function(message){
    message.user = Meteor.userId();
    message.time = Date.now();
    Messages.insert(message);
  }
});
