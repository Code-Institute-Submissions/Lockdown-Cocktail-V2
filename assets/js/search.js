//Create searchbar for user cocktail search from CocktailDB API
//Code adapted from: https://pagedart.com/blog/how-to-add-a-search-bar-in-html/

//event listener
const form = document.getElementById("cocktail-form");
const userSearch = document.getElementById("cocktail-form-searchbar");
const displayCocktail = document.getElementById("search-cocktail-display");

//Function to allow for empty form. Credit to https://www.w3schools.com/js/js_validation.asp 

function validateForm() {
    var y = userSearch.value;
    if (y == "") {
      alert("Name must be filled out");
      return false;
    }
  }

//I updated the submitted function to the following - help from CI tutor:
function fetchCocktaildbData(event) {
    event.preventDefault();
    let x = userSearch.value;
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${x}`;
    fetch(url)
        .then(response => {
        return response.json(); //return response as json object
    })
    .then(fetchedData => {
        apiData = fetchedData;
        let drinkName = apiData.drinks[0].strDrink;
        let receipe = apiData.drinks[0].strInstructions;
        let img = apiData.drinks[0].strDrinkThumb;
        displayCocktail.innerHTML = `
        <div id="search-cocktail-card" class="card" style="width:fluid">
        <div class="card-body text-center">
        <h5 class="card-title">${drinkName}</h5>
        <p class="card-text">${receipe}</p>
        <img class="random-cocktail-image img-fluid" src="${img}">
        </div>
        </div>`; 
        
         // variable apiData = returned json data
         // Unpack data into variables for specific number in the array
    })
    .catch(error => {
        alert("Failed to get api data.");
        console.log(error);
    });
    
    setTimeout(() => {
        console.log(apiData);
    }, 1000);
    // console.log(jsonResponse);    
}

form.addEventListener("submit", fetchCocktaildbData);




