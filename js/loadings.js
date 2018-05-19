/*jslint
evil: true
*/

document.addEventListener("DOMContentLoaded", function(event) {
	anchors.add();
});

$(function () {
	
	$("[data-toggle='tooltip']").tooltip();
	
	$("pre.code").each(function () {
        var html = $(this).html();
        var blankLen = (html.split('\n')[0].match(/^[\s\t]+/)[0]).length;
        $(this).html($.trim(html.replace(eval("/^[\s\t]{" + blankLen + "}/gm"), "")));
    });
	
});