document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitBtn").addEventListener("click", function () {
        const emailInput = document.querySelector("#emailInput");
        const email = emailInput.value.trim();
        const message = document.getElementById("message");

        if (!email.includes("@") || email.includes(" ")) {
            emailInput.style.border = "2px solid red";
            message.style.color = "red";
            message.textContent = "Don't use spaces in email, and it should include @";
        } else {
            emailInput.style.border = "";
            message.style.color = "green";
            message.textContent = "Account submitted! Pls wait...";
        }
    });
});
