Template.registerHelper("gravatarUrl", function(userId, size){
  var email = Meteor.user().emails[0].address;
  if (userId) {
    var u = Meteor.users.findOne({_id: userId});
    email = u.emails[0].address;
  }

  var s = 24;
  if (size && typeof size !== "object") s = size;

  var url = Gravatar.imageUrl(email, { size: s, default: 'mm' });
  return url;
});

Template.registerHelper("timestampToTime", function (timestamp) {
	var date = new Date(timestamp);
	var hours = date.getHours();
	var minutes = "0" + date.getMinutes();
	var seconds = "0" + date.getSeconds();
	return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
});

Template.registerHelper("usernameFromId", function (userId) {
	var user = Meteor.users.findOne({_id: userId});
	return user.username;
});

Template.registerHelper("channelName", function () {
  return Session.get('channel');
});
