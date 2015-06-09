Template.chat.events({
	'click .logout': function(e) {
		e.preventDefault();
		Meteor.logout();
	},
	'click .channelLink': function(e) {
		e.preventDefault();
		Session.set('channel', this.name);
	}
});

Template.chat.helpers({
	channels: function() {
		return Channels.find();
	},
	active: function () {
	  if (Session.get('channel') === this.name) {
	      return "active";
	  } else {
	      return "";
	  }
	},
	online: function() {
		var users = Meteor.users.find({"status.online": true});
		return users;
	},
	onlineCount: function() {
		return Meteor.users.find({"status.online": true}).count();
	}
});
