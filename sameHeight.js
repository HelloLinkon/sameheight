(function($, window){
		'use strict';

		$.fn.sameHeight = function(){
			
			var $this = this;
			changehight($this);

		    $(window).resize(function() {
		    	changehight($this);
		    });

		    return this;

		};

		function changehight($div){
			var highestHieght = 0;
			$div.each(function(index, value){
		    	 
		    	let elHeight = $(value).outerHeight();
		    	highestHieght = (elHeight > highestHieght)? elHeight : highestHieght;

		    });

		    
		    $div.css("min-height", highestHieght);
		}

})(jQuery, window);