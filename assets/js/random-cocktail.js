// Set variables*/

let randomButton = document.getElementById("random-btn");
let displayRandomCocktail = document.getElementById("image");



// Random Cocktail Button Click Event*/

//randomButton.addEventListener('click', randomCocktail);--> /*target.addEventListener(event(click,load etc.), function, useCapture)*/


//Function to generate random cocktail

async function randomCocktail() {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php/preview");
    const jsonresponse = await response.json();
    console.log(jsonresponse);
    const drinkName = jsonresponse.drinks[0].strDrink;
    const data = jsonresponse.drinks[0].strInstructions;
    let img = jsonresponse.drinks[0].strDrinkThumb;
    console.log(drinkName);
    console.log(data);
    console.log(img);
    console.log(typeof(data));
    console.log(typeof(img));
    /*document.getElementById("cocktail-card").innerHTML = drinkName;
    document.getElementById("data").innerHTML = data;*/
    displayRandomCocktail.innerHTML = `
    <div id="random-cocktail-card" class="card" style="width:fluid">
    <div class="card-body text-center">
    <h5 class="card-title">${drinkName}</h5>
    <p class="card-text">${data}</p>
    <img class="random-cocktail-image img-fluid" src="${img}">
    </div>
    </div>`; //credit: https://www.codegrepper.com/code-examples/javascript/how+to+display+image+in+html+from+json+object
}

//how to add this into code in a nice way to catch errors?
    /*.then(response => {
        console.log("WOOP!");
    })
    .catch(error => {

        console.log("Boo error");
        console.error(error);
    });*/