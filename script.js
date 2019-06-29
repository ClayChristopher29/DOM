// var headingElement = document.querySelector("#main-heading");
// headingElement.innerHTML = "Hello world!"

// var greetC2 = "Hey C2";
// document.querySelector("#greetC2").innerHTML = greetC2

// // Lightening Exercise 1
// var greeting = document.querySelector("#hello-container");
// greeting.innerHTML = "Yo, what it is homie?"


// The contents of this object will change depending on what today's special is
// var currentSpecial = {
//     name: "Fried Green Tomato BLT",
//     description: "So good you'll cry",
//     price: 9.99
//   }

//   // We'll use the object to build up an HTML string
//   var htmlString = `
//     <h3 class="dish-name">${currentSpecial.name}</h3>
//     <p class="dish-description">
//       ${currentSpecial.description}
//     </p>
//     <h5 class= "dish-price">${currentSpecial.price}</h5>
//   `
//   // Then we'll put the html string in the #daily-special div
//   document.querySelector("#daily-special").innerHTML = htmlString;


//   var menuItemsArray = ["Chicken tenders", "pizza", "spaghetti", "french fries", "pie"]

//   for(var i = 0; i < menuItemsArray.length; i++){
//     // target the menu items container and add a bullet for each item in the array
//     document.querySelector("#menu-items-container").innerHTML += `<li>${menuItemsArray[i]}</li>`

//   }

// //   Lightening Exercise 2

// // Keeping track of chores
// // In your index.html file, create an empty <ul> element and give it an id of #chores-container
// // In your JavaScript file, declare a new variable called choresArray. This should be an array of chores you do regularly.
// // Loop through your choresArray. For each chore, create a new <li> element and insert it into the #chores-container element.
// // You should end up with a bulleted list of all your regular chores.
// // Collapse

// var choresArray=["Dishes","Dust","Vacuum","Cook"]

// for(var i = 0; i < choresArray.length; i++){
//     document.querySelector("#chores-container").innerHTML += `<li>${choresArray[i]}</li>`

//   }

// Use document.querySelector() to grab a reference to each element in your HTML. Use the .innerHTML property to set the text of each element to the matching value in your object. (For example, the h1 with the id of "title" should contain the title property of your movieObject, etc).

// var movieObject = {
//     title: "Star Wars: A New Hope",
//     genre: "Science Fiction",
//     releaseDate: "May 25, 1977"
//   }

//   var titleElement = document.querySelector("#title");
//   titleElement.innerHTML = movieObject.title

//   var genreElement = document.querySelector("#genre");
//   titleElement.innerHTML = movieObject.genre

//   var releaseDateElement = document.querySelector("#release-date");
//   titleElement.innerHTML = movieObject.releaseDate

// var downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];


// for(var i =0; i < downtownRestaurants.length; i++){
//     document.querySelector("#restaurants-list").innerHTML +=`<li>${downtownRestaurants[i]}</li>`
// }

var sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"]

for (var i=0; i < sandwichToppings.length; i++){
    document.querySelector("#sandwich-container").innerHTML +=`<li>${sandwichToppings[i]}</li>`
}