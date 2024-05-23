function showPassword() {
    var passwordField = document.getElementById("password");
    var showPwdIcon = document.getElementById("showPwd");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        showPwdIcon.src = "../IMG/eye.svg";
    } else {
        passwordField.type = "password";
        showPwdIcon.src = "../IMG/closedEye.svg";
    }
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("loginError");

    if (username.trim() == "carlos27" && password.trim() == "1234!") {
        event.preventDefault();
        window.location.href = "menu.html";
    } else {
        event.preventDefault();
        errorMessage.style.visibility = "visible";
        return false;
    }
});
