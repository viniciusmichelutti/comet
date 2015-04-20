Router.map(function(){
    this.route('login', {
        path: '/',
        onBeforeAction: function() {
            $('body').addClass('blueBg');
            if (Meteor.userId()) {
                Router.go('chat');
            }
            this.next();
        },
        onStop: function() {
            $('body').removeClass('blueBg');
        }
    });
    this.route('chat', {
        onBeforeAction: function() {
            if (!Meteor.userId()) {
                Router.go('login');
            }
            this.next();
        }
    });
});