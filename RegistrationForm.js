function validateForm() {
    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const website = document.getElementById("website");
    const message = document.getElementById("message");

    // Reset previous errors
    document.querySelectorAll(".error").forEach(e => e.textContent = '');
    [name, email, website, message].forEach(field => field.classList.remove('error-border'));

    // Name validation
    if (name.value.trim() === "") {
        document.getElementById("nameError").textContent = "This field is required";
        name.classList.add("error-border");
        valid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value.trim())) {
        document.getElementById("emailError").textContent = "A valid email address is required";
        email.classList.add("error-border");
        valid = false;
    }

    // Website validation
    const websitePattern = /^(https?:\/\/)?([\w\-]+\.)+[\w]{2,}(\/.*)?$/;
    if (!websitePattern.test(website.value.trim())) {
        document.getElementById("websiteError").textContent = "A valid url is required";
        website.classList.add("error-border");
        valid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
        document.getElementById("messageError").textContent = "This field is required";
        message.classList.add("error-border");
        valid = false;
    }

    return valid;
}