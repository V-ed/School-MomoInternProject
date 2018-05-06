$(function () {
	
	$("a.nav-item,a.dropdown-item:not(.dropdown-toggle)").click(function (e) {
		
		$("#navbar-toggler[aria-expanded=true]").click();
		
	});
	
});
