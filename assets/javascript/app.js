$( document ).ready(function(){
    $(".button-collapse").sideNav();

});
$(document).ready(function(){
  $('.modal').modal();

});



const apiKey = "04492eb88c824a2387827e71857a0cf6";

/**
 * Performs a complex recipe search.
 * See also: https://spoonacular.com/food-api/docs#Search-Recipes-Complex
 * @param {Object} query - An associative array mapping search keys and data. Arrays are automatically converted to comma-separated values.
 * @param {number} count - The number of results to return
 * @returns {Object} An AJAX result
 * 
 * example:
 *    searchComplex({
 *     "query": "pasta",
 *     "ingredients": ["cheese","tomato"]
 *    }).then(function(response) {
 *     // Do stuff with the AJAX response here
 *    });
 */
function searchComplex(query, count=5, addRecipeNutrition=true) {
  // Convert the query object into a query url
  let queryString = `apiKey=${apiKey}`;
  for (key in query) {
    let queryData = encodeURI(query[key]);
    queryString += `&${key}=${queryData}`;
  }

  let queryURL = `https://api.spoonacular.com/recipes/complexSearch?${queryString}&number=${count}&addRecipeNutrition=${addRecipeNutrition}`;
  console.log(queryURL);

  return $.ajax({
    url: queryURL,
    method: "GET"
  });
}

/**
 * Displays a recipe in the page's modal card. This does not trigger the modal
 * @param {Object} recipe - A singular result from a search query. e.g.) response.results[0]
 */
function displayRecipe(recipe) {
  /* Sample Response:

    {
      "id": 633508,
      "image": "Baked-Cheese-Manicotti-633508.jpg",
      "imageUrls": [
          "Baked-Cheese-Manicotti-633508.jpg"
      ],
      "readyInMinutes": 45,
      "servings": 6,
      "title": "Baked Cheese Manicotti"
    }
  */

  // File data here

  $("#recipeName").text(recipe.title);
  $("#recipeImg").attr("src",recipe.image);
  $("#prepareTime").text("Total Prepare Time: " , recipe.preparationMinutes);
  $("#cookTime").text(recipe.cookingMinutes);
  $("#readyMin").text(recipe.readyInMinutes);
  $("#recipeSummary").text(recipe.summary);
  $("#recipeURL").attr("href" , recipe.sourceUrl);

  
 





  
}

// This returns fixed data to display in the modal
function getRecipe(index) {
  const data = {
    "veggie":
    {
      "id": 633508,
      "image": "Baked-Cheese-Manicotti-633508.jpg",
      "imageUrls": [
          "Baked-Cheese-Manicotti-633508.jpg"
      ],
      "readyInMinutes": 45,
      "servings": 6,
      "title": "Baked Cheese Manicotti"
    },

    "spaghetti":
    {
      "id": 633508,
      "image": "Baked-Cheese-Manicotti-633508.jpg",
      "imageUrls": [
          "Baked-Cheese-Manicotti-633508.jpg"
      ],
      "readyInMinutes": 30,
      "servings": 3,
      "title": "Spaghet"
    },

    "chicken":
    {
      "id": 633508,
      "image": "Baked-Cheese-Manicotti-633508.jpg",
      "imageUrls": [
          "Baked-Cheese-Manicotti-633508.jpg"
      ],
      "readyInMinutes": 30,
      "servings": 3,
      "title": "Chicken"
    }
  };

  return data[index];
}

$(".show-recipe").click(function() {
  
  // Fake the recipe for testing
  console.log($(this).attr("data-recipe-index"));
  let recipe = getRecipe( $(this).attr("data-recipe-index") );
  displayRecipe(recipe);

})
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

