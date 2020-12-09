// Set variables

let randomButton = document.getElementById("random-btn");
let displayRandomCocktail = document.getElementById("image");



// Random Cocktail Button Click Event

//randomButton.addEventListener('click', randomCocktail);--> /*target.addEventListener(event(click,load etc.), function, useCapture)

//Function to generate random cocktail

function randomCocktail() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php/preview";
    fetch(url)
        .then(response => {
        return response.json(); //return response as json object
    })
    .then(fetchedData => {
        apiData = fetchedData;
        let drinkName = apiData.drinks[0].strDrink;
        let data = apiData.drinks[0].strInstructions;
        let img = apiData.drinks[0].strDrinkThumb;
        displayRandomCocktail.innerHTML = `
        <div id="search-cocktail-card" class="card" style="width:fluid">
        <div class="card-body text-center">
        <h5 class="card-title">${drinkName}</h5>
        <p class="card-text">${data}</p>
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
