$(function () {
	$("#btn__change__password").on("click touchstart", function (event) {
		event.preventDefault();
		let sNewPassword = $("#new__password").val();
		let sConfirmPassword = $("#confirm__password").val();
		let regex = $("#new__password").attr("pattern");

		let bPasswordMatchConfirm = sNewPassword === sConfirmPassword;
		let bPasswordMatchRegex = sNewPassword.match(regex);
		let bValidPassword = (bPasswordMatchConfirm && bPasswordMatchRegex);

		if (bValidPassword) {
			let datas = {
				mdp_utilisateur: sNewPassword,
				mdp_confirm: sConfirmPassword,
				password_change_key: $("#cle__mail").val(),
				bJSON: 1,
				page: "changePassword"
			};
			$.ajax({
				type: "POST",
				url: "route.php",
				async: false,
				data: datas,
				dataType: "json",
				cache: false,
			})
					.done(function (result) {
						console.log(result);
					})
					.fail(function (error) {

					})
		}

		if (!bPasswordMatchConfirm) {
			$("#error__message").html("Les mots de passes ne corespondent pas.");
		} else if (!bValidPassword) {
			$("#error__message").html("Le mot de passe doit faire au moins 8 caractères comprenant au moins <br>une majuscule, une minuscule, un chiffre et un caractère spécial.")
		}

	})
});

$(function () {
	$("#btn__send__mail").on("click touchstart", function (event) {
		event.preventDefault();
		let sMail = $("#mail").val();
		let regex = $("#mail").attr("pattern");

		let bMailMatchRegex = sMail.match(regex);

		if (bMailMatchRegex) {
			let datas = {
				courriel_utilisateur: sMail,
				bJSON: 1,
				page: "sendMailPassword"
			};
			$.ajax({
				type: "POST",
				url: "route.php",
				async: false,
				data: datas,
				dataType: "json",
				cache: false,
			})
					.done(function (result) {
						console.log(result);
					})
					.fail(function (error) {

					})
		} else {
			$("#error_message").html("Adresse mail invalide.");
		}


	})
});
