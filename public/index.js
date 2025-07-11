//Login

//Dynamic
const logoutButton = document.getElementById("logout");
const loginButton = document.getElementById("login");
const registerButton = document.getElementById("register");
const learnButton = document.getElementById("learn-more");
const proButton = document.getElementById("howto-pro");
const productsButton = document.getElementById("view-products");

if (localStorage.getItem("logged_in") === "true") {
    logoutButton.style.display = "";
} else {
    logoutButton.style.display = "none";
}

loginButton.addEventListener("click", function() {
    window.location.href = "/login";
});

registerButton.addEventListener("click", function() {
    window.location.href = "/register";
});

logoutButton.addEventListener("click", function() {
    logout()
})

//API Endpoints
