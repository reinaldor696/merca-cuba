menuButton = document.querySelector(".buttons-menu");

function menuNavHeader() {
    if (menuButton.style.display === "block") {
        menuButton.style.display = "none";

        document.body.style.overflow = "auto";
    } else {
        menuButton.style.display = "block";

        document.body.style.overflow = "hidden";
    }
}