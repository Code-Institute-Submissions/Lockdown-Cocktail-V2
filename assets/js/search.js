//Create searchbar for cocktails from API
//Code adapted from: https://pagedart.com/blog/how-to-add-a-search-bar-in-html/

//event listener
const form = document.getElementById("cocktail-form");
const userSearch = document.getElementById("cocktail-form-searchbar");



//Cocktaildb API data call
function submitted(event) {
    event.preventDefault();
    const response = (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userSearch.value}`);
    console.log(response);
    
}

form.addEventListener("submit", submitted);