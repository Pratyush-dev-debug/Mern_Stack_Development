function validateMobile() {
    const mobile = document.getElementById("mobile").value.trim();
    const output = document.getElementById("output");

    const mobilePattern = /^[6-9]\d{9}$/;

    if (mobilePattern.test(mobile)) {
        output.style.color = "green";
        output.textContent = "Valid Mobile Number";
    } else {
        output.style.color = "red";
        output.textContent = "Invalid Mobile Number";
    }
}