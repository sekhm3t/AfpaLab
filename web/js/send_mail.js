function get_email_data(){
	var datas = 
	{
		name: $("#contact__name").val(),
		email_sender: $("#contact__mail").val(),
		subject: $("#contact__subject").val(),
		content: $("#contact__message").val(),
		id: "61",
		bJSON: 1,
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
		if (result.error = 1) {
			$("#contact__feedback").html(result.texte);
			$("#contact__feedback").addClass("contact__feedback--return");
		}else{
			$("#contact__feedback").html(result.texte);
			$("#contact__feedback").addClass("contact__feedback--return");
		}
		console.log(result);

		
	})

	.fail(function(result)
	{
	// 	PROBLEME AFFICHAGE MESSAGE ERREUR
		$("#contact__feedback").html(result.texte);
		$("#contact__feedback").addClass("contact__feedback--return");
		
		console.log(result["0"].texte);
	});
}
