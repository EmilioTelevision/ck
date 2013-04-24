Meteor.Router.add({
	'/': function() {
		Session.set('page', 'home');
		return 'page_home'
	},
	'/:page': function(page) {
		Session.set('page', page);
		if(page == 'order') {
			setTimeout(function() {
				//$('html,body').animate({scrollTop: $('#contact_wrap').offset().top - 180}, 600, 'easeInBack');
			}, 200);
			$('html,body').animate({scrollTop: 0}, 750, 'easeOutExpo');
		}
		else {
			$('html,body').animate({scrollTop: 0}, 750, 'easeOutExpo');
		}
		return 'page_'+page;
	},
});
