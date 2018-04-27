$(function () {
	$("#liste__formation").on("change", function selectSession() {
		$("#liste__session").html("<option>Sélectionner une session</option>");
		var datas =
				{
					id_formation: this.value,
					bJSON: 1,
					page: "SelectSession"
				};

		$.ajax(
				{
					type: "POST",
					url: "route.php",
					async: false,
					data: datas,
					dataType: "json",
					cache: false,
				})

				.done(function (result) {
					for (var i = result["liste_session"].length - 1; i >= 0; i--) {
						$("#liste__session").append("<option value=\"" + result["liste_session"][i].id_session + "\">" + result["liste_session"][i].date_debut_session + " - " + result["liste_session"][i].titre_session + "</option>");
					}
				})

				.fail(function (result) {
					alert("Echec de la requête !");
				})
	});

	$("#liste__session").on("change", function () {
		var datas =
				{
					id_session: $("#liste__session").val(),
					bJSON: 1,
					page: "SelectStagiaire"
				};

		$.ajax(
				{
					type: "POST",
					url: "route.php",
					async: false,
					data: datas,
					dataType: "json",
					cache: false,
				})

				.done(function (result) {

					for (var i = result["liste_stagiaire"].length - 1; i >= 0; i--) {
						$("#container__carousel").append("<div class=\"slide__container\"><div class=\"slide__header\"><div class=\"options__profil\" href=\"#\" ><a class=\"options__contact\" href=\"#\" ><img src=\"img/icons_social/email.png\" onclick=\"open__contact(' " + result["liste_stagiaire"][i].nom_utilisateur + "'  , ' " + result["liste_stagiaire"][i].cle_utilisateur + " ')\"/></a><a class=\"options__report\" href=\"#\" ><img src=\"img/icons_social/warning.png\"/></a></div><div class=\"pic__container\"><img class=\"pic__img\" src=\"" + result["liste_stagiaire"][i].photo_utilisateur + "\"></div><h1 class=\"student__title\">" + result["liste_stagiaire"][i].nom_utilisateur + " " + result["liste_stagiaire"][i].prenom_utilisateur + "</h1><a class=\"student__website\" href=\"#\">" + result["liste_stagiaire"][i].site_utilisateur + "</a><ul class=\"options__social\"><li><a href=\"#\"><img class=\"social__icons\" src=\"img/icons_social/facebook.png\"/></a></li><li><a href=\"#\"><img class=\"social__icons\" src=\"img/icons_social/github.png\"/></a></li><li><a href=\"#\"><img class=\"social__icons\" src=\"img/icons_social/linkedin.png\"/></a></li><li><a href=\"#\"><img class=\"social__icons\" src=\"img/icons_social/twitter.png\"/></a></li></ul></div><div class=\"slide__aside__left\"><ul class=\"techno__list\"><li><img class=\"techno__img\" src=\"img/icons_techno/html5.png\"/><br></li><li><img class=\"techno__img\" src=\"img/icons_techno/css3.png\"/><br></li><li><img class=\"techno__img\" src=\"img/icons_techno/javascript.png\"/><br></li><li><img class=\"techno__img\" src=\"img/icons_techno/mysql.png\"/><br></li><li><img class=\"techno__img\" src=\"img/icons_techno/python.png\"/><br></li><li><img class=\"techno__img\" src=\"img/icons_techno/swift.png\"><br></li></ul></div><div class=\"slide__main\"><p>" + result["liste_stagiaire"][i].description_utilisateur + "</p></div><div class=\"slide__aside__right\"><ul class=\"doc__list\"><li><a href=\"#\" ><img class=\"doc__img\" src=\"img/icons_social/pdf.png\"/></a><br><h3>Doc1QuiAUnTitreSuperCourtAhaha</h3></li><li><a href=\"#\" ><img class=\"doc__img\" src=\"img/icons_social/pdf.png\"/></a><br><h3>Presentation</h3></li><li><a href=\"#\" ><img class=\"doc__img\" src=\"img/icons_social/pdf.png\"/></a><br><h3>Doc3QuiaUnTitreSuperLong</h3></li><li><a href=\"#\" ><img class=\"doc__img\" src=\"img/icons_social/pdf.png\"/></a><br><h3>MonCVSuperOriginal</h3></li></ul></div></div>");
					}

					start_carousel();
				})

				.fail(function (result) {
					alert("Echec de la requête !");

				})
	})
});


function start_carousel() {
	$('.owl-carousel').owlCarousel({
		loop: false,
		responsiveClass: true,
		items: 1,
		nav: true,
		rewind: true,
		dots: true,
		pagination: true,
		margin: 30,
		stagePadding: 30,
		smartSpeed: 1000,

		responsive: {
			600: {
				margin: 100,

			},
			800: {
				margin: 250,
				stagePadding: 200,

			}
		},

	});

}