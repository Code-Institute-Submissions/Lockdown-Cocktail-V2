//Create searchbar for cocktails from API
//Code adapted from: https://pagedart.com/blog/how-to-add-a-search-bar-in-html/

//event listener
const form = document.getElementById("cocktail-form");
const userSearch = document.getElementById("cocktail-form-searchbar");

userSearch.addEventListener("keyup", e => { 
    const searchString = e.target.value; 
  });
console.log()

//Cocktaildb API data call
/*function submitted(event) {
    event.preventDefault();
    var response = (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userSearch.value}`);
    console.log(response); //this works yey!
    
    var jsonResponse = JSON.parse(response); // this bit doesn't boo!
    
    console.log(jsonResponse);    
}*/ 


//I updated the submitted function to the following:
function submitted(event) {
    event.preventDefault();
    let x = userSearch.value;
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${x}`;
    fetch(url)
        .then(response => {
        return response.json();
    })
    .then(fetchedData => {
        apiData = fetchedData;
    })
    .catch(error => {
        alert("Failed to get api data.");
        console.log(error);
    });
    // console.log(response); //this works yey!
    // let jsonResponse = response.responseType = 'json';
    //var jsonResponse = JSON.parse(response); // this bit doesn't boo!
    
    setTimeout(() => {
        console.log(apiData);
    }, 1000);
    // console.log(jsonResponse);    
}

form.addEventListener("submit", submitted);




