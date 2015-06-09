Template.messages.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('messages', Session.get('channel'));
  });
});

Template.messages.onRendered(function() {
  this.autorun(function() {
    var msgs = Messages.find().count();
    if (msgs) {
      $('.messages').scrollTop($('.messages')[0].scrollHeight);
    }
  });
});

Template.messages.helpers({
  messages: function() {
    return Messages.find({}, {sort: {time: 1}});
  }
});
