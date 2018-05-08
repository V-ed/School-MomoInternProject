$(function () {
	
	var $stickyHeader = $("#sticky-header");
	var $stickyContainer = $("#sticky-container");
	
	var $stickies = $(".sticky");
	
	var stickyHeaderHeight = $stickyHeader.outerHeight(true);
	var stickyContainerHeight = $stickyContainer.outerHeight(true);
	
	var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	
	$stickies.each(function () {
		
		$(this).css({
			"position": "sticky",
			"top": stickyHeaderHeight + "px",
			"height": "calc(100vh - " + stickyHeaderHeight + "px)",
			"max-height": "calc(100vh - " + stickyHeaderHeight + "px)",
			"overflow-y": "auto"
		});
		
		if (viewportHeight > stickyContainerHeight) {
			$(this).css("height", stickyContainerHeight + "px");
		}
		
	});
	
});