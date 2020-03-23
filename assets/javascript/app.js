$( document ).ready(function(){
    $(".button-collapse").sideNav();
})

var queryURL = "https://api.spoonacular.com/recipes/search?query=cheese&number=2?apiKey=84b16d63a51a4acb921b68dd844ae213"
var nutritionURL = "https://api.spoonacular.com/recipes/parseIngredients?apiKey=84b16d63a51a4acb921b68dd844ae213"

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {});

$.ajax({
  url: nutritionURL,
  method: "POST"
}).then(function(response) {});


const apiKey = "b2abcf1f7aa34932bae5417c700268ec";

/**
 * Performs a complex recipe search.
 * See also: https://spoonacular.com/food-api/docs#Search-Recipes-Complex
 * @param {Object} query - An associative array mapping search keys and data. Arrays are automatically converted to comma-separated values.
 * @param {number} count - The number of results to return
 * @returns {Object} An AJAX result
 */
function searchComplex(query, count=5) {
  // Convert the query object into a query url
  let queryString = `apiKey=${apiKey}`;
  for (key in query) {
    let queryData = encodeURI(query[key]);
    queryString += `&${key}=${queryData}`;
  }

  let queryURL = `https://api.spoonacular.com/recipes/complexSearch?${queryString}&number=${count}`;
  console.log(queryURL);

  return $.ajax({
    url: queryURL,
    method: "GET"
  });
}


searchComplex(
{
  "ingredients": ["pasta","cheese"],
  "cuisine": "Italian",
  "addRecipeNutrition": true
}).then(function(response) {
  // Populate data from the query

});
