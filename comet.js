if (Meteor.isClient) {

  Template.login.helpers({
  });

  Template.login.events({
    'submit form': function () {
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
