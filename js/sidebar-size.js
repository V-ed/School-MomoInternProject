$(function () {
	
	var $stickyHeader = $("#sticky-header");
	var $stickyContainer = $("#sticky-container");
	
	var $stickies = $(".sticky");
	
	var stickyHeaderHeight = $stickyHeader.outerHeight(true);
	var stickyContainerHeight = $stickyContainer.outerHeight(true);
	
	$stickies.each(function () {
		
		var cssData = {
			"position": "sticky",
			"top": stickyHeaderHeight + "px",
			"height": "calc(100vh - " + stickyHeaderHeight + "px)",
			"overflow-y": "auto"
		};
		
		if ($(this).data("sticky-liberate") != true) {
			cssData["max-height"] = stickyContainerHeight + "px";
		}
		
		$(this).css(cssData);
		
	});
	
});