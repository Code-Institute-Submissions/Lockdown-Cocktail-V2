//Create searchbar for cocktails from API
//Code adapted from: https://pagedart.com/blog/how-to-add-a-search-bar-in-html/

//event listener
const form = document.getElementById("cocktail-form");
const userSearch = document.getElementById("cocktail-form-searchbar");



//Cocktaildb API data call
function submitted(event) {
    event.preventDefault();
    const response = (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userSearch.value}`);
    console.log(response); //this works yey!
    let jsonResponse = response.responseType = 'json';
    //var jsonResponse = JSON.parse(response); // this bit doesn't boo!
    
    console.log(jsonResponse);    
}

form.addEventListener("submit", submitted);