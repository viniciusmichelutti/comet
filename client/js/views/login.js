Template.loginForm.events({
	'submit form': function (e) {
		e.preventDefault();
		var email = e.target.email.value;
		var pass = e.target.password.value;
		Meteor.loginWithPassword(email, pass, function(err) {
			if (err) {
                $('.error').removeClass('none');
            } else {
                console.log('logou!');
                Router.go('chat');
            }
		});
	},
	'click .signUp': function(e) {
		e.preventDefault();
		$('#loginForm').slideUp('fast', function() {
			$('#registerForm').slideDown(); 
		});
	}
});

Template.registerForm.events({
	'submit form': function(e) {
		e.preventDefault();
		var email = e.target.email.value;
		var pass = e.target.password.value;
		var nick = e.target.nickname.value;
		
		Accounts.createUser({
			email: email,
			password: pass,
			username: nick
		});
	},
	'click .logIn': function(e) {
		e.preventDefault();
		$('#registerForm').slideUp('fast', function() {
			$('#loginForm').slideDown(); 
		});
	}
});