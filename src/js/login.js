document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const validUsername = "admin";
    const validPassword = "admin";

    if (username === validUsername && password === validPassword) {
        localStorage.setItem("logStatus", "true");
        window.location.href = "../public/index.html";
    } else {
        alert("Invalid username or password");
    }
});
