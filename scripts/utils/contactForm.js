function displayModal() {
  const modal = document.getElementById("contact_modal");
  const main = document.getElementById("main");
	modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  main.setAttribute("aria-hidden", "true");
}


function closeModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    main.setAttribute("aria-hidden", "false");
}

document.onkeyup = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode === 27) {
    closeModal()
  }
};

// DOM Elements
const modal = document.getElementById("contact_modal");
const formData = document.querySelectorAll(".formData");
const inputFirst = document.getElementById("first");
const inputLast = document.getElementById("last");
const inputEmail = document.getElementById("mail");
const inputMessage = document.getElementById("message");
const inputValue = document.getElementById("value-id");

//error message
function printError(elementID, errorMessage){
    document.getElementById(elementID).innerHTML = errorMessage;
}
  
// submit form
function validate() {
  
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let userID = urlParams.get('id');

    inputValue.value = userID;

    var prenomError = nomError = mailError = messageError = true;
  
    //firstname validation
    if(inputFirst.value.trim().length < 2){
      printError("prenomError", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
      inputFirst.style.border = "solid 2px red";
    }else{
      printError("prenomError", "");
      inputFirst.style.border = "none";
      prenomError = false;
    }
  
    //lastname validation
    if(inputLast.value.trim().length < 2){
      printError("nomError", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
      inputLast.style.border = "solid 2px red";
    }else{
      printError("nomError", "");
      inputLast.style.border = "none";
      nomError = false;
    }
  
    //email validation
    var regex = /^\S+@\S+\.\S+$/;
    if(regex.test(inputEmail.value) == false) {
      printError("mailError", "Veuillez rentrer une adresse mail valide");
      inputEmail.style.border = "solid 2px red";
    }else{
      printError("mailError", "");
      inputEmail.style.border = "none";
      mailError = false;
    }
  
    //textarea validation
    if(inputMessage.value.trim() == ""){
        printError("messageError", "Veuillez entrer un message");
        inputMessage.style.border = "solid 2px red";
    }else{
        printError("messageError", "");
        inputFirst.style.border = "none";
        messageError = false;
    }

    if(prenomError == false & nomError == false & mailError == false & messageError == false){
      return true;
    }else{
      return false;
    }
}