$( document ).ready(function(){
    $(".button-collapse").sideNav();
})

//ajax call to get photo + name to populate card

//second ajax call to grab the rest of the items (recipe, video, grocery list) to the user -link it to the link and show it on another page. 
// look up modal (materialize has modals)

// use Api ingredient list options to have the user choose their ingredients. 
//dispaly on html as checkboxes - modal when clicking on the link to choose ingredients. 

let APIKEY = "b2abcf1f7aa34932bae5417c700268ec";
  var queryURL = "https://api.spoonacular.com/recipes/search?query=burger"+"&apiKey="+APIKEY
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(queryURL);
  });