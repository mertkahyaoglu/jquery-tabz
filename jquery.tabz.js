/*!
 * jQuery Tabs Plugin 
 * https://github.com/mertkahyaoglu/jquery-tabz
 *
 * Copyright 2014, Mert Kahyaoğlu
 * MIT license
 */

(function($, window, undefined) {
	"use strict";

	$.fn.tabz = function(options) {

		var options = $.extend({}, $.fn.tabz.defaults, options);

		return this.each(function() {

			var $this = $(this);
			
			$this.find('> div').hide();
	        $this.find('> div').eq(options.active).show();
	        $this.find('> ul li').eq(options.active).addClass('active');

	        var eventFunction = eval(function(e) {
	        	e.preventDefault();
	        	var currentTab = $(this).addClass("active");
	        	currentTab.siblings("li").removeClass("active");
	        	var targetDiv = currentTab.find("a").attr(options.attribute);
	        	$(targetDiv).show().siblings("div").hide();
	        });

	        eval("$this.find('> ul li')."+options.mouseevent+"(eventFunction)");

		});

	};

	$.fn.tabz.defaults = {
		mouseevent:   'click',
		attribute:    'href',
		active:       0
	};

})(jQuery);
