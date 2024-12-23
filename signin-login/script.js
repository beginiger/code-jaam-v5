let login = document.querySelector(".login");
let f2 = document.querySelector("#form2");
let signup = document.querySelector("#signup");

let loginText = document.querySelector(".l2");
let signText = document.querySelector(".l1");

let isLoginActive = true;

f2.addEventListener("click", function () {
    if (isLoginActive) {
        login.style.transform = "translateY(-500px)";
        loginText.style.transform = "scale(1)";
        signText.style.transform = "scale(0.6)";
        isLoginActive = false;
    }
});

signup.addEventListener("click", function () {
    if (!isLoginActive) {
        login.style.transform = "translateY(-180px)";
        loginText.style.transform = "scale(0.6)";
        signText.style.transform = "scale(1)";
        isLoginActive = true;
    }
});
