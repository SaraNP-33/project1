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
