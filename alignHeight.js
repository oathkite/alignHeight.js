(function($) {
	$.fn.alignHeight = function(column) {
		var self = this;
		var column = column ? column : 0;
		var height = 0;
		var row = 0;

		return self.each(function(index) {
			height = height < $(this).height() ? $(this).height() : height;
			if (!column || (index + 1) % column == 0 || index + 1 == self.length) {
				var start = row * column;
				self.slice(start, index + 1).css('height', height);
				height = 0;
				row ++;
			}
		});
	}
})(jQuery);