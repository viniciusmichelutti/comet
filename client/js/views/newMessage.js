Template.newMessage.events({
    'submit form': function(e) {
        e.preventDefault();
        var msg = e.target.message.value;
        e.target.message.value = '';

        Meteor.call('addMessage', {
            message: msg,
            channel: Session.get('channel')
        });
    }
});
