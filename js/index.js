function autoScroll1(obj) {
	$(obj).find('.pe1').animate({
		marginTop: '-2.8rem'
	}, 1000, function() {
		$(this).css({
			marginTop: "0px"
		});
		var a = $(".pe1").children().first().clone()
		$(".pe1 a:last").after(a);
		$(".pe1 a:first").remove();
	})
}
function autoScroll2(obj2) {
	$(obj2).find('.pe2').animate({
		marginTop: '-2.8rem'
	}, 1000, function() {
		$(this).css({
			marginTop: "0px"
		});
		var a2 = $(".pe2").children().first().clone()
		$(".pe2 a:last").after(a2);
		$(".pe2 a:first").remove();
	})
}
function autoScroll3(obj3) {
	$(obj3).find('.pe3').animate({
		marginTop: '-2.8rem'
	}, 1000, function() {
		$(this).css({
			marginTop: "0px"
		});
		var a3 = $(".pe3").children().first().clone()
		$(".pe3 a:last").after(a3);
		$(".pe3 a:first").remove();
	})
}
function autoScroll4(obj4) {
	$(obj4).find('.pe4').animate({
		marginTop: '-2.8rem'
	}, 1000, function() {
		$(this).css({
			marginTop: "0px"
		});
		var a4 = $(".pe4").children().first().clone()
		$(".pe4 a:last").after(a4);
		$(".pe4 a:first").remove();
	})
}
function autoScroll5(obj5) {
	$(obj5).find('.pe5').animate({
		marginTop: '-2.8rem'
	}, 1000, function() {
		$(this).css({
			marginTop: "0px"
		});
		var a5 = $(".pe5").children().first().clone()
		$(".pe5 a:last").after(a5);
		$(".pe5 a:first").remove();
	})
}
function autoScroll6(obj6) {
	$(obj6).find('.pe6').animate({
		marginTop: '-2.8rem'
	}, 1000, function() {
		$(this).css({
			marginTop: "0px"
		});
		var a6 = $(".pe6").children().first().clone()
		$(".pe6 a:last").after(a6);
		$(".pe6 a:first").remove();
	})
}
function autoScroll7(obj7) {
	$(obj7).find('.pe7').animate({
		marginTop: '-2.8rem'
	}, 1000, function() {
		$(this).css({
			marginTop: "0px"
		});
		var a7 = $(".pe7").children().first().clone()
		$(".pe7 a:last").after(a7);
		$(".pe7 a:first").remove();
	})
}
$(function() {
	setInterval('autoScroll1(".rollingUD")', 2000);
})
$(function() {
	setInterval('autoScroll2(".rollingUD")', 2000);
})
$(function() {
	setInterval('autoScroll3(".rollingUD")', 2000);
})
$(function() {
	setInterval('autoScroll4(".rollingUD")', 2000);
})
$(function() {
	setInterval('autoScroll5(".rollingUD")', 2000);
})
$(function() {
	setInterval('autoScroll6(".rollingUD")', 2000);
})
$(function() {
	setInterval('autoScroll7(".rollingUD")', 2000);
})
