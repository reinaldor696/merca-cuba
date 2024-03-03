menuButton = document.querySelector(".buttons-menu");
signInSection = document.querySelector(".sign");
homeSection = document.querySelector(".home");

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
}