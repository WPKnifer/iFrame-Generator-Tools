// A $( document ).ready() block.
$( document ).ready(function() {
   $('.generate-iframe').click(function(){

		var name = $('#iframe-name').val();
		var width = $('#iframe-width').val();
		var height = $('#iframe-height').val();

		var border = $('#iframe-border').val();
		var border_type = $('#iframe-border-type').val();
		var border_size = $('#iframe-border-size').val();
		var border_color = $('#iframe-border-color').val();

		var allow = $('#iframe-allow').val();
		var scrolling = $('#iframe-scrolling').val();
		var loading = $('#iframe-loading').val();
		var referrerpolicy = $('#iframe-referrerpolicy').val();
		var sandbox = $('#iframe-sandbox').val();

		var url = $('#iframe-url').val();

		var name_html = ($('#iframe-name').val())? 'name="'+name+'" ':'';
		var width_html = ($('#iframe-width').val())? 'width="'+ width +'" ':'';
		var height_html = ($('#iframe-height').val())? 'height="'+ height +'" ':'';

		var allow_html = ($('#iframe-allow').val())? 'allow="'+allow+'" ':'';
		var scrolling_html = ($('#iframe-scrolling').val())? 'scrolling="'+scrolling+'" ':'';
		var loading_html = ($('#iframe-loading').val())? 'loading="'+loading+'" ':'';
		var referrerpolicy_html = ($('#iframe-referrerpolicy').val())? 'referrerpolicy="'+referrerpolicy+'" ':'';
		var sandbox_html = ($('#iframe-sandbox').val())? 'sandbox="'+sandbox+'" ':'';		

		var style_css = (border == 'yes')? 'style="border: '+border_size+'px '+border_type+' '+border_color+' " ':'';


		$('#iframe-output-area').val('<iframe src="'+ url +'" '+name_html+width_html+height_html+allow_html+scrolling_html+loading_html+referrerpolicy_html+sandbox_html+style_css+'></iframe>');
	});
});