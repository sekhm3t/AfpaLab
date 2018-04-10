/************************************************************/
/*							Nav								*/
/************************************************************/

// Moving the cross
$(function() {
	$("body").on("click touchstart", "#burger__container", function() {
		this.classList.toggle("change");
		$("#nav__div__links").toggle();
	})
});

/************************************************************/
/*							Modals							*/
/************************************************************/

// Open the login modal
function open__login() {
	$("#modal__login").toggle();
}

// Open the contact modal
function open__contact(user, key_user) {
	$("#contact__recipient").html("Destinataire: " + user);
	$("#modal__contact").toggle();
}

// Close the modal by clicking on the close btn
$(function() {
	$("body").on("click touchstart", ".close__modal", function() {
		$(".modal").hide();
	})
});

// Close the modal by clicking anywhere
window.onclick = function (ev) {
	let modals = ev.target === document.getElementById("modal__login") || ev.target === document.getElementById("modal__contact");
	if (modals) {
		$(".modal").hide();
	}
};
