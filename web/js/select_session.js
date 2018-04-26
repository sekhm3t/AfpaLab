$(function() {
	$("select").on("change", function selectSession() {

		let datas =
				{
					id_formation: 2,
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

					$.each(result, function () {
						$.each(this, function (name, value) {
							console.log(name + '=' + value);
						});
					})

							.fail(function (result) {
								alert("Echec de la requête !");

							});
				});
	})
});

function selectStagiaire() {

	let datas =
			{
				id_session: id_session,
				bJSON: 1,
				page: "selectStagiaire"
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

				console.log(result);


			})

			.fail(function (result) {
				alert("Echec de la requête !");

			});
}