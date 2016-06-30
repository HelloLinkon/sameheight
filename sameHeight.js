(function($, window){
		'use strict';

		$.fn.sameHeight = function(options){
			
			// Default options
	        var settings = $.extend({
	            way: 'max'
	        }, options );


			var $this = this;

			if(settings.way == "max")
				changehight($this);
			else
				changehightTwo($this);

		    $(window).resize(function() {
		    	if(settings.way == "max")
				changehight($this);
				else
					changehightTwo($this);
			    });

		    return this;

		};

		//based on max height
		function changehight($div){
			var highestHieght = 0;
			$div.each(function(index, value){
		    	 
		    	let elHeight = $(value).outerHeight();
		    	highestHieght = (elHeight > highestHieght)? elHeight : highestHieght;

		    });

		    
		    $div.css("min-height", highestHieght);
		}

		//based on min height
		function changehightTwo($div){
			console.log($($div[0]).outerHeight());
			var lowestHieght = $($div[0]).outerHeight();
			$div.each(function(index, value){
		    	 
		    	let elHeight = $(value).outerHeight();
		    	lowestHieght = (elHeight > lowestHieght)? lowestHieght : elHeight;

		    });

			var styles = {
		      overflow : "auto",
		      height : lowestHieght
		    };
		    
		    $div.css( styles );
		}

})(jQuery, window);