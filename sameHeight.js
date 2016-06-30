(function(){
		'use strict';

		$.fn.sameHeight = function(){
			var $div = this;
			
			var highestHieght = 0;
			$div.each(function(index, value){
		    	 
		    	let elHeight = $(value).outerHeight();
		    	highestHieght = (elHeight > highestHieght)? elHeight : highestHieght;

		    });

		    console.log(highestHieght);
		    $div.css("min-height", highestHieght);

		    return this;

			};

})();