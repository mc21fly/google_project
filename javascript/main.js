const searchField = document.getElementById("search-field");
const searchBar = document.getElementById("search-bar");

searchField.addEventListener("focusin", function() {
    searchBar.style.boxShadow = "0 0 5px rgba(128, 128, 128, 0.363)";
})

searchField.addEventListener("focusout", function() {
    searchBar.style.boxShadow = "";
})