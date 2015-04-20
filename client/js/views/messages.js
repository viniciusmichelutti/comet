Template.messages.helpers({
    messages: function() {
        return Messages.find({}, {sort: {time: 1}});  
    },
    gravatarUrl: function() {
        var email = Meteor.user().emails[0].address;
        var url = Gravatar.imageUrl(email, { size: 24, default: 'mm' });
        return url;
    }
});