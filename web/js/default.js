// Open the login modal
function open__login() {
	$("#modal__login").toggle();
}

// Open the contact modal
function open__contact(user, key_user) {
	$("#modal__contact").toggle();
}

// Close the login modal by clicking anywhere
window.onclick = function (ev) {
	let modals = ev.target === document.getElementById("modal__login") || ev.target === document.getElementById("modal__contact");
	if (modals) {
		$("#modal__login").hide();
	}
};
