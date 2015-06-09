Template.messages.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('messages', Session.get('channel'));

    var msgs = Messages.find().count();
    if ($('.messages')[0]) {
      $('.messages').scrollTop($('.messages')[0].scrollHeight);
    }
  });
});

Template.messages.helpers({
  messages: function() {
    return Messages.find({}, {sort: {time: 1}});
  }
});
