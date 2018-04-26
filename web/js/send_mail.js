function get_email_data(){
	var datas = 
	{
		name: $("#contact__name").val(),
		email_sender: $("#contact__mail").val(),
		subject: $("#contact__subject").val(),
		content: $("#contact__message").val(),
		id: "61",
		page: "MailManager"
	}

	$.ajax(
	{
		type: "POST",
		url: "route.php",
		async: false,
		data: datas,
		dataType: "json",
		cache: false,
	})

	.done(function(result) 
	{
		alert("Ok");
		
	})

	.fail(function(result)
	{
		console.log(result.responseText.texte);
		alert("Fail !");
	});
}
