$( document ).ready(function(){
    $(".button-collapse").sideNav();
})

const api_key = "b2abcf1f7aa34932bae5417c700268ec";
// var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query="+"&number=2?apiKey=84b16d63a51a4acb921b68dd844ae213"
var nutritionURL = "https://api.spoonacular.com/recipes/parseIngredients?apiKey=84b16d63a51a4acb921b68dd844ae213"

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {});



//   $.ajax({
//     url: nutritionURL,
//     method: "POST"
//   }).then(function(response) {});

function searchComplex(query, count=2) {
  let query_string = `apiKey=${api_key}`;
  for (key in query) {
    query_string = query_string + `&${key}=${query[key]}`
  }
  let queryURL = `https://api.spoonacular.com/recipes/complexSearch?${query_string}`;
  return queryURL
}


console.log(searchComplex(["pasta","cheese"]));


  // get api to work
 
  // append info into the card divs

  //  work on homepage functionality  
