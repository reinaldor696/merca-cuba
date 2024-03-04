const menuButton = document.querySelector(".buttons-menu");
const signInSection = document.querySelector(".sign-in");
const signUpSection = document.querySelector(".sign-up");
const homeSection = document.querySelector(".home");
const userAccount = document.querySelector(".user-account");

function menuNavHeader() {
    if (menuButton.style.display === "block") {
        menuButton.style.display = "none";

        document.body.style.overflow = "auto";
    } else {
        menuButton.style.display = "block";

        document.body.style.overflow = "hidden";
    }
}

function sectionSingIn() {
    signInSection.style.display = "flex";

    homeSection.style.display = "none";
    userAccount.style.display = "none";

    menuNavHeader();
}

function signUp() {
    signUpSection.style.display = "flex";

    signInSection.style.display = "none";
}

function sectionSingInFromSignUp() {
    signInSection.style.display = "flex";

    signUpSection.style.display = "none";
    userAccount.style.display = "none";
}

function sectionUserAccount() {
    userAccount.style.display = "block";

    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
}

function sectionUserAccountFromMenu() {
    userAccount.style.display = "block";

    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";

    menuNavHeader();
}