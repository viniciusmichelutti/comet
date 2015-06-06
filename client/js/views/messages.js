Template.messages.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('messages', Session.get('channel'));
  });
});

Template.messages.helpers({
  messages: function() {
    return Messages.find({}, {sort: {time: 1}});
  }
});
