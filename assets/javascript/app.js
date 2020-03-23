$( document ).ready(function(){
    $(".button-collapse").sideNav();
})

const apiKey = "b2abcf1f7aa34932bae5417c700268ec";
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

/**
 * Performs a complex recipe search
 * See also: https://spoonacular.com/food-api/docs#Search-Recipes-Complex
 * @param {Object} query - An associative array mapping search keys and data. Arrays are automatically converted to comma-separated values.
 * @param {number} count - The number of results to return
 * @param {}
 */
function searchComplex(query, count=10) {
  let queryString = `apiKey=${apiKey}`;
  for (key in query) {
    let queryData = Array.isArray(query[key]) ? query[key].join(",") : query[key];
    queryString += `&${key}=${queryData}`
  }

  let queryURL = `https://api.spoonacular.com/recipes/complexSearch?${queryString}`;
  return queryURL
}


console.log(searchComplex(
{
  "ingredients": ["pasta","cheese"],
  "cuisine": "Italian"
}
));


  // get api to work
 
  // append info into the card divs

  //  work on homepage functionality  
