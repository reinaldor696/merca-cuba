const menuButton = document.querySelector(".buttons-menu");
const signInSection = document.querySelector(".sign-in");
const signUpSection = document.querySelector(".sign-up");
const homeSection = document.querySelector(".home");
const userAccount = document.querySelector(".user-account");
const setupAccount = document.querySelector(".set-up-account");
const footer = document.querySelector("footer");
const historialOrder = document.querySelector(".historial-order");
const shoppingCart = document.querySelector(".shopping-cart");
const aboutUs = document.querySelector(".about-us");
const ProductDescription = document.querySelector(".product-description");
const categories = document.querySelector(".categories");
const rewardZone = document.querySelector(".reward-zone");

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
    footer.style.display = "block";

    homeSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    historialOrder.style.display = "none";
    shoppingCart.style.display = "none";
    aboutUs.style.display = "none";
    ProductDescription.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";

    menuNavHeader();
}

function signUp() {
    signUpSection.style.display = "flex";
    footer.style.display = "block";

    signInSection.style.display = "none";
    setupAccount.style.display = "none";
    historialOrder.style.display = "none";
    shoppingCart.style.display = "none";
    aboutUs.style.display = "none";
    ProductDescription.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";
}

function sectionSingInFromSignUp() {
    signInSection.style.display = "flex";
    footer.style.display = "block";

    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    historialOrder.style.display = "none";
    shoppingCart.style.display = "none";
    aboutUs.style.display = "none";
    ProductDescription.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";
}

function sectionUserAccount() {
    userAccount.style.display = "block";
    footer.style.display = "block";

    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    setupAccount.style.display = "none";
    historialOrder.style.display = "none";
    shoppingCart.style.display = "none";
    aboutUs.style.display = "none";
    ProductDescription.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";
}

function sectionUserAccountFromMenu() {
    userAccount.style.display = "block";
    footer.style.display = "block";

    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    setupAccount.style.display = "none";
    historialOrder.style.display = "none"
    shoppingCart.style.display = "none";
    aboutUs.style.display = "none";
    ProductDescription.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";

    menuNavHeader();
}

function sectionSetupAccount() {
    setupAccount.style.display = "block"

    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    footer.style.display = "none";
    historialOrder.style.display = "none"
    shoppingCart.style.display = "none";
    aboutUs.style.display = "none";
    ProductDescription.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";
}

function sectionHistorialOrder() {
    historialOrder.style.display = "block"
    footer.style.display = "block";

    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    aboutUs.style.display = "none";
    ProductDescription.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";
}

function sectionShoppingCart() {
    shoppingCart.style.display = "block";
    footer.style.display = "block";

    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    aboutUs.style.display = "none";
    ProductDescription.style.display = "none";
    historialOrder.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";
}

function sectionAboutUs() {
    aboutUs.style.display = "block";

    footer.style.display = "none";
    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    ProductDescription.style.display = "none";
    historialOrder.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";
}

function sectionAboutUsFromMenu() {
    aboutUs.style.display = "block";

    footer.style.display = "none";
    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    ProductDescription.style.display = "none";
    historialOrder.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";

    menuNavHeader();
}

function sectionProductDescription() {
    ProductDescription.style.display = "block";
    footer.style.display = "block";

    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    historialOrder.style.display = "none";
    categories.style.display = "none";
    rewardZone.style.display = "none";
}

function sectionCategories() {
    categories.style.display = "block";

    footer.style.display = "none";
    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    historialOrder.style.display = "none";
    ProductDescription.style.display = "none";
    rewardZone.style.display = "none";
}

function sectionRewardZone() {
    rewardZone.style.display = "block";
    footer.style.display = "block";

    categories.style.display = "none";
    homeSection.style.display = "none";
    signInSection.style.display = "none";
    signUpSection.style.display = "none";
    userAccount.style.display = "none";
    setupAccount.style.display = "none";
    shoppingCart.style.display = "none";
    historialOrder.style.display = "none";
    ProductDescription.style.display = "none";
}