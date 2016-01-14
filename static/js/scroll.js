		$(document).ready(function() {
			$("#scr1").click(function() {
				$('html, body').animate({
					scrollTop: $("html").offset().top
				}, 500);
			});
			$("#scr2").click(function() {
				$('html, body').animate({
					scrollTop: $("#id1").offset().top
				}, 500);
			});
			$("#scr3").click(function() {
				$('html, body').animate({
					scrollTop: $("#id2").offset().top
				}, 500);
			});
			$("#scr4").click(function() {
				$('html, body').animate({
					scrollTop: $("#id3").offset().top
				}, 500);
			});

		});