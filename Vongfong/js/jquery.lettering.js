/*global jQuery */
/*!	
* Lettering.JS 0.6.1
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
//calculate the time before calling the function in window.onload
var beforeload = (new Date()).getTime();

function getPageLoadTime(){
        //calculate the current time in afterload
        var afterload = (new Date()).getTime();
        // now use the beforeload and afterload to calculate the seconds
        seconds = (afterload-beforeload) / 1000;
        // Place the seconds in the innerHTML to show the results
        $("#load_time").text("IN "+ seconds +" SECONDS");
}

window.onload = getPageLoadTime;

(function($){
	function injector(t, splitter, klass, after) {
		a = t.text().split(splitter), inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				inject += '<span class="'+klass+(i+1)+'" style="-webkit-transform: rotate('+10*i+'deg);">'+item+'</span>'+after;
			});	
			t.empty().append(inject);
		}
	}

	
	var methods = {
		init : function() {
			return this.each(function() {
				injector($(this), '', 'char', '');
			});
		},
		words : function() {
			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});
		},
		lines : function() {
			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
				// (of the word "split").  If you're trying to use this plugin on that 
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});
		}
	};
	$.fn.lettering = function( method) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};
})(jQuery);

$( window ).ready(function() {
	for( i = 1; i <= $('.badge').length; i++){
		$( "#badge_"+i ).css("width","20%");
		$( "#badge_"+i ).css("height","50%");
		$( "#badge_"+i ).css("top","50%");
		$( "#badge_"+i ).css("left","50%");
		$( "#badge_"+i ).css("margin-left", ($( "#badge_"+i ).width()/2)*-1);
		$( "#badge_"+i ).css("margin-top", ($( "#badge_"+i ).height()/2)*-1);
	}
	var $elie1 = $( "#badge_1" ), degree1 = Math.random()*360, timer1;
	var $elie2 = $( "#badge_2" ), degree2 = Math.random()*360, timer2;
	var $elie3 = $( "#badge_3" ), degree3 = Math.random()*360, timer3;
    function rotate1() {
        $elie1.css({ WebkitTransform: 'rotate(' + degree1 + 'deg)'});  
        $elie1.css({ '-moz-transform': 'rotate(' + degree1 + 'deg)'});                      
        timer1 = setTimeout(function() {
            degree1=degree1+0.05; rotate1();
        },5);
    }
        function rotate2() {
        $elie2.css({ WebkitTransform: 'rotate(' + degree2 + 'deg)'});  
        $elie2.css({ '-moz-transform': 'rotate(' + degree2 + 'deg)'});                      
        timer2 = setTimeout(function() {
            degree2=degree2+0.075; rotate2();
        },5);
    }
        function rotate3() {
        $elie3.css({ WebkitTransform: 'rotate(' + degree3 + 'deg)'});  
        $elie3.css({ '-moz-transform': 'rotate(' + degree3 + 'deg)'});                      
        timer3 = setTimeout(function() {
            degree3=degree3+0.10; rotate3();
        },5);
    }
    rotate1();
    rotate2();
    rotate3();

});

$( window ).resize(function() {
	for( i = 1; i <= $('.badge').length; i++){
		$( "#badge_"+i ).css("width","20%");
		$( "#badge_"+i ).css("height","50%");
		$( "#badge_"+i ).css("top","50%");
		$( "#badge_"+i ).css("left","50%");
		$( "#badge_"+i ).css("margin-left", ($( "#badge_"+i ).width()/2)*-1);
		$( "#badge_"+i ).css("margin-top", ($( "#badge_"+i ).height()/2)*-1);
	}
});