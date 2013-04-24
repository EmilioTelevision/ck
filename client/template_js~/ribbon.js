Template.ribbon.events({
	'mouseenter .announcements': function() {
		$('#ribbon').show().animate({
			opacity: 1,
			top: 0
		}, 500, 'easeOutExpo');
	},
	'mouseleave #ribbon': function() {
		$('#ribbon').animate({
			opacity: 0,
			top: -500
		}, 500, 'easeOutExpo', function() {
			$(this).hide();
		});
	},
	'mouseenter .tap, mouseenter .order': function() {
		$('.tap').css('transform', 'rotate(10deg)');
	},
	'mouseleave .tap, mouseleave .order': function() {
		$('.tap').css('transform', 'rotate(0deg)');
	}
});