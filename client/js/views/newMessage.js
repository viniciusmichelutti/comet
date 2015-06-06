Template.newMessage.events({
    'submit form': function(e) {
        e.preventDefault();
        var msg = e.target.message.value;
        e.target.message.value = '';

        Messages.insert({
            user: Meteor.user()._id,
            message: msg,
            time: Date.now(),
            channel: Session.get('channel'),
        });
    }
});
