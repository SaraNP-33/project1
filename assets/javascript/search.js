

  let APIKEY = "b2abcf1f7aa34932bae5417c700268ec";
  var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query="+"&addRecipeNutrition=true&number=2&apiKey="+APIKEY

function recipeSearch(){

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
   console.log(response);
    console.log(queryURL);
   
  for (i = 0; i < 2; i++) {
    var recipes = response.results;

    var row = $();

    var col = $();

    var card = $("<div class=row>","div class=col s12 m7>","<div class=card>","<div class=card-image>","<div class=card-title","<div class=card-content>","<div class=card-action");

    var cardimage = $();

    var cardtitle = $(");

    var cardcontent = $();

    var cardaction = $();


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
