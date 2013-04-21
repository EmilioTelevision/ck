Template.ribbon.events({
	'mouseenter .announcements': function() {
		if($('#ribbon').is(':visible')) {
			$('#ribbon').animate({
				opacity: 0,
				top: '-=500'
			}, 500, 'easeOutExpo', function() {
				$(this).hide();
			});
		}
		else {
			$('#ribbon').show().animate({
				opacity: 1,
				top: '+=500'
			}, 500, 'easeOutExpo');
		}
	},
	'mouseleave .announcements': function() {
		if($('#ribbon').is(':visible')) {
			$('#ribbon').animate({
				opacity: 0,
				top: '-=500'
			}, 500, 'easeOutExpo', function() {
				$(this).hide();
			});
		}
		else {
			$('#ribbon').show().animate({
				opacity: 1,
				top: '+=500'
			}, 500, 'easeOutExpo');
		}
	}
});