
$(function () {
	$("#msg").hide();
	$("button[type='submit']").click(function () {
		if ( md5( $("#u").val() ) == "d0e45878043844ffc41aac437e86b602" || md5($("#u").val()) == '33b2fa010f5a4dc0ace68c94fd643259' || md5($("#u").val()) == 'be37bce87c4c1f63b230e8fc28f6eedc' || md5($("#u").val()) == 'de9fe5e140f0ef82a0c08aa0fd7667d5') {
			console.log("username correct!!");
			if (md5($("#p").val()) == '39475e6895b4227ddc712fcd25e489af') {
				window.location.href = "https://pjnotes.github.io/ukg20/p/94f0064686b2c4bf6a3a465bb9fece18.html";
			}
			else{
				$("#msg").show();
			}
		} else {
			$("#msg").show();
		}
	});
});

/*
$(function () {
	$("#msg").hide(), $("button[type='submit']").click(function () {
		console.log("Form Submitted"), "654549fd15738332e933b52baf3cbc65" == md5($("#u").val()) || "232423f990a0e50c0675df5a4106911b" == md5($("#u").val()) || "b6ab84d587979ed648e092f8f41315f0" == md5($("#u").val()) || "9d43df6096b85aa423711c735d403580" == md5($("#u").val()) ? "39475e6895b4227ddc712fcd25e489af" == md5($("#p").val()) && (window.location.href = "https://pjnotes.github.io/ukg20/p/94f0064686b2c4bf6a3a465bb9fece18.html") : $("#msg").show()
	})
});
*/