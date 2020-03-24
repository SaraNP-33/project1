


let APIKEY = "84b16d63a51a4acb921b68dd844ae213";
  var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query="+"&addRecipeNutrition=true&number=2&apiKey="+APIKEY

function recipeSearch(){

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
   console.log(response);
    console.log(queryURL);

    var recipes = response.results;

   
  for (i = 0; i < recipes.length; i++) {
    
    
    var card = $("div class=col s6 m6>","<div class=card>","<div class=card-image>","<div class=card-title","<div class=card-content>","<div class=card-action");

    $(".row").append(card);

  }

  var image = $("<img>").attr("src",response.results.image);
  $(".card-image").append(image);

  //variable to store Time to Prepare//

  var preparetime = $("<p>").text(response.results.preparationMinutes);
  
  //attach to html//

  $(".card-content").append(preparetime);

  //variable to store Time to Cook//

  var cooktime = $("<p>").text(response.results.cookingMinutes);

  //attach to html//

  $(".card-content").append(cooktime);

  //variable to store ready in minutes//

  var readyminutes = $("<p>").text(response.results.readyInMinutes);
console.log(readyminutes);
  //attach to html//

  $(".card-content").append(readyminutes);

  //variable to store summery//

  var summary = $("<p>").text(response.results.summary);

  //variable to store link//

var link = $("<a>").attr("href",response.results.soureUrl);

//attach to html//

$(".card-action").append(link);
});
}

$("#searchBar").on("click",recipeSearch);

