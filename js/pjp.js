$(function () {
	$("#msg").hide();
	
	$("button[type='submit']").click(function () {

		let smd0 = 'ukgHW';
		let st = 'https://pjnotes.github.io/ukg20/p/';
		st = st+smd0+md5(smd0)+md5(md5(smd0))+'.html';
		console.log(st);

		if ( md5( $("#u").val() ) == 'd0e45878043844ffc41aac437e86b602' || md5($("#u").val()) == '30269022e9d8f51beaabb52e5d0de2b7' || md5($("#u").val()) == '654549fd15738332e933b52baf3cbc65' || md5($("#u").val()) == '33b2fa010f5a4dc0ace68c94fd643259' || md5($("#u").val()) == 'a1135b8e9581f4beb118481d65164464' || md5($("#u").val()) == '232423f990a0e50c0675df5a4106911b' ) {
			console.log("username correct!!");
			if (md5($("#p").val()) == '39475e6895b4227ddc712fcd25e489af') {
				window.location.href = st;
			}
			else{
				$("#msg").show();
			}
		} else {
			$("#msg").show();
		}
	});
});
