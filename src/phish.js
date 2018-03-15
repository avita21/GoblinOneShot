$(document).ready(function() {
	// Instantiate EasyZoom instances
	var $easyzoom = $('.easyzoom').easyZoom();
	// Get an instance API
	var api = $easyzoom.data('easyZoom');
	$('.toggle').click(function() {
		if ($('.toggle').data("active") === true) {
			$('.toggle').text("Switch on").data("active", false);
			api.teardown();
		} else {
			$('.toggle').text("Switch off").data("active", true);
			api._init();
		}
	});
	$('.easyzoom').click(function() {
		console.log('click');
    });
});