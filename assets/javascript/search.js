

function recipeSearch(){
  let searchTerm = $("#search").val().trim();

 searchComplex({
   "query": `${searchTerm}`
 }).then(function(response) {   

  for (i = 0; i < response.results.length; i++) {
    // XXX Do something with the data, maybe store it?
  }
  
  // FIXME Display recipe 0 in the modal
  displayRecipe(response.results[0]);
  $("#modal1").openModal();


//   for (i = 0; i < 2; i++) {
//     var recipes = response.results;

//     var row = $();

//     var col = $();

//     var card = $("<div class=row>","div class=col s12 m7>","<div class=card>","<div class=card-image>","<div class=card-title","<div class=card-content>","<div class=card-action");

//     var cardimage = $();

//     var cardtitle = $("");

//     var cardcontent = $();

//     var cardaction = $();


//   }

//   var image = $("<img>").attr("src",response.results.image);
//   $(".card-image").append(image);

//   //variable to store Time to Prepare//

//   var preparetime = $("<p>").text(response.results.preparationMinutes);
  
//   //attach to html//

//   $(".card-content").append(preparetime);

//   //variable to store Time to Cook//

//   var cooktime = $("<p>").text(response.results.cookingMinutes);

//   //attach to html//

//   $(".card-content").append(cooktime);

//   //variable to store ready in minutes//

//   var readyminutes = $("<p>").text(response.results.readyInMinutes);
// console.log(readyminutes);
//   //attach to html//

//   $(".card-content").append(readyminutes);

//   //variable to store summery//

//   var summary = $("<p>").text(response.results.summary);

//   //variable to store link//

// var link = $("<a>").attr("href",response.results.sourceUrl);

// //attach to html//

// $(".card-action").append(link);
// });
// }

// Trigger search if the user changes the field and unfocuses or submits
$("#search").change(recipeSearch);
// Prevent the form from submitting
$("#searchForm").submit(function(event) {
  event.preventDefault()
})})};