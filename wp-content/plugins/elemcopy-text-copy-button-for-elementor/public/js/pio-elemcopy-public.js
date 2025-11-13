(function( $ ) {
	'use strict';
	
	window.pioOldText = [];
	$(document).on("click",".pio-elementor-copy-btn", function(e){
		var pioEle = $(this);
		var txt2Copy = pioEle.attr('pioec-copy-text');
		var pioecId = pioEle.attr('pioec-id');
		if(txt2Copy){
			navigator.clipboard.writeText(txt2Copy)
				.then(() => {
					var pioCopidText = pioEle.attr('pioec-button-text');
					if(pioCopidText){
						if(!window.pioOldText[pioecId])
						window.pioOldText[pioecId] = pioEle.find('.elementor-button-text').eq(0).text();
						pioEle.find('.elementor-button-text').text(pioCopidText);
						pioEle.addClass('pioPulseAnimation');
						setTimeout(function(){
							pioEle.removeClass('pioPulseAnimation');
						},500);

						setTimeout(function(){
							pioEle.find('.elementor-button-text').text(window.pioOldText[pioecId]);
						},5000);
					}
				})
				.catch(err => {
					console.error('Could not copy text: ', err);
					alert('Could not copy text: ' + err);
				});
			return false;
		}
	});
})( jQuery );
