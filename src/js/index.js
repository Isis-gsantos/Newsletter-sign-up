function subscribe() {
    const emailInput = document.getElementById("content");
    const sucessMessage = document.getElementById("sucess-message");
    const imageContent = document.getElementById("image");
    const invalidEmail = document.getElementById("invalid-email");
    const email = document.getElementById("email");

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if(isValidEmail(email.value)) {
        sucessMessage.style.display = "block";
        emailInput.style.display = "none";
        imageContent.style.display = "none";
    } else {
        invalidEmail.style.display = "block";
        email.style.color = "hsl(4, 100%, 67%)";
        email.style.border = "1px solid hsl(4, 100%, 67%)";
        email.style.backgroundColor = "rgba(221, 72, 20, 0.1";
    };
};