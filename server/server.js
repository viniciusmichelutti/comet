Meteor.startup(function () {
	if (Channels.find().count() < 1) {
		Channels.insert({
		  name: "general"
		});
		Channels.insert({
		  name: "random"
		});
	}
});

Meteor.publish('channels', function() {
	return Channels.find();
});

Meteor.publish('messages', function(channel) {
	return Messages.find({channel: channel});
});
