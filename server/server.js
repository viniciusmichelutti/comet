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

Meteor.publish('allUsers', function() {
	return Meteor.users.find({}, {
		fields: {
			'_id': 1,
			'emails': 1,
			'username': 1,
			'status': 1
		}});
});
