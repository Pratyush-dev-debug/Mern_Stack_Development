document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    validateForm();
});

function validateForm() {
    validateField("firstName", "Please supply your first name");
    validateField("lastName", "Please supply your last name");
    validateField("email", "Please supply your email address");
    validateField("phone", "Please supply your phone number");
    validateField("address", "Please supply your street address");
    validateField("city", "Please supply your city");
}

function validateField(id, message) {
    const input = document.getElementById(id);
    const formGroup = input.parentElement;
    const small = formGroup.querySelector("small");

    if (input.value.trim() === "") {
        formGroup.classList.add("error");
        small.innerText = message;
    } else {
        formGroup.classList.remove("error");
        small.innerText = "";
    }
}