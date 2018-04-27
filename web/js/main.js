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
	$("#contact__key").val(key_user);	
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
	close_modal(ev);
};
window.ontouchstart = function (ev) {
	close_modal(ev);
};


function close_modal(ev) {
	let modals = $(".modal");
	let openModal = in_array(ev.target, modals);
	if (openModal) {
		modals.hide();
	}
}

function in_array(val, array) {
	let found = false;
	for (let i = 0; i < array.length; i++) {
		(val === array[i]) ? found = true : "";
	}
	return found;
}

/************************************************************/
/*			         Recherche ressources					*/
/************************************************************/

function supprRessource(ressource)	{
	document.getElementById("div_encadre_"+ressource).remove();
	document.getElementById("datalist__select__techno--first").innerHTML+= "<option value=\"" + ressource + "\" id=\"" + ressource + "\">"
}

//button input
$(function() {
	$("body").on("change", "#input__select__techno--first", function() {
		var divInfo = document.getElementById('add__input__select');
		var inputSelect = document.getElementById('input__select__techno--first');
		if (inputSelect.value !== "") {
			divInfo.style.display = 'block';
		} else {
			divInfo.style.display = 'none';
		}
	})
});

$(function() {
	$("body").on("click", "#add__input__select", function()  {
		var i= 0;
		var bTrouve= 0;
		for (i=0; i<document.getElementById("datalist__select__techno--first").options.length; i++)	{
			if (document.getElementById("datalist__select__techno--first").options[i].value == document.getElementById("input__select__techno--first").value) {
				bTrouve= 1;
			}
		}
		if (bTrouve == 1)	{
			document.getElementById("add__list__titre").innerHTML+= "<div class=\"add__list\" id=\"div_encadre_" + document.getElementById("input__select__techno--first").value + "\"><a>" + document.getElementById("input__select__techno--first").value + "<i class=\"button__close fas fa-times\" type=\"button\" onClick=\"supprRessource('" + document.getElementById("input__select__techno--first").value + "')\"></i></a></div>";
			document.getElementById('add__list__titre').style.display = 'flex';
			document.getElementById(document.getElementById("input__select__techno--first").value).remove();
			document.getElementById("input__select__techno--first").value= "";
		}
	})

});



