let dialog = document.querySelector("dialog");
let signup_button = document.querySelector(".subscribe");
let email = document.querySelector(".email_field > input");
let error = document.querySelector(".error_message");
let place_holder = document.querySelector(".email_retrivied");

signup_button.addEventListener("click", (e) => {
    e.preventDefault();
    if (email.checkValidity()) {
        error.classList.add("hidden");
        email.classList.remove("error");
        let user_email = email.value;
        console.log(user_email);
        place_holder.textContent = user_email;
        dialog.showModal();
        
    }
    else {
        error.classList.remove("hidden");
        email.classList.add("error");
    }
})