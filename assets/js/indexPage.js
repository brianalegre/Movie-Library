// API Keys
// var branfonApi = "k_1ucm7wp5";
// var vyAPI = "k_sr0i5ybd";
// var brianAPI ="k_tp8oqqm0"
var myAPI = "k_tp8oqqm0";

// Variables
var movieTitle = ""
var movieRating = 0
var imageUrl = ""


// HTML Targeting Variables
var imageEl = document.querySelectorAll(".movieImg")
var titleEl = document.querySelectorAll(".movieTitle")
var ratingEl = document.querySelectorAll(".movieRating");
var watchListBtn = document.querySelectorAll(".watchlistBtn");
var search = document.getElementById('searchForm')
var searchKey = document.getElementById('searchText');


// Function for getting popular videos
function getPopularMovies() {
  // API Call 
  fetch(`https://imdb-api.com/en/API/MostPopularMovies/${myAPI}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // Display API Data
    // console.log(data);

    // Loop thru the first 12 movies
    for (var i = 0; i < 12; i++) {

      // Movie Title
      movieTitle = data.items[i].title;
        // console.log('movieTitle:', movieTitle)

      // IMDB Rating
      movieRating = data.items[i].imDbRating;
        // console.log('movieRating:', movieRating);
        
      // Movie Picture
      imageUrl = data.items[i].image;
        // console.log('imageURL:', imageUrl)

    // Display the Data on Page
    titleEl[i].textContent = movieTitle;
    ratingEl[i].textContent = movieRating;
    imageEl[i].src = imageUrl;

    }
  });
}



// Function for searching Movie
function searchMovie() {
  // Get Input Value
  var searchInputVal = document.getElementById('searchText').value.trim();
  var queryString = "./search.html?q=" + searchInputVal;

  // Go to next page
  location.assign(queryString)
}

// Listen for Enter Key to searchMovie
searchKey.addEventListener('keypress', function (event) {
  if (event.key === 'Enter' ) {
    event.preventDefault()
    searchMovie()
  }
})

// Call Function on Page Load
getPopularMovies();


// UNUSED CODE
// Keep as a reference


// /////////////////////////////////////////////////////////////////////////////////
// function getMovieImage(){
//   for (var i =0; i < 12; i++)
//   {
//     imageEl[i].src = imageUrl
//   }
// }
// //  // information about one movie
//   fetch('https://imdb-api.com/API/ExternalSites/k_vfmd1877/tt0411008')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data.netflix);
//     var netflixLink = data.netflix;
//   }

// );


// //   // most popular 
//   fetch('https://imdb-api.com/en/API/MostPopularMovies/k_vfmd1877')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     for (var i = 0; i < 50; i++) {
//       console.log(data[i].name);
//       var
//     }
//   });


//   youtube trailer
  // fetch('https://imdb-api.com/en/API/YouTubeTrailer/k_vfmd1877/tt1375666')
  // .then(function (response) {
  //   return response.json();
  // })
  // .then(function (data) {
  //   console.log(data.videoUrl);
  //   var trailerUrl = data.videoUrl
  //   console.log(trailerUrl)
  // });


// random generator generating title from a keyword search
//   fetch('https://imdb-api.com/en/API/Keyword/k_vfmd1877/action-hero')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     for (var i = 0; i < 10; i++) {
//       // .splice(index, howmany, item1, ....., itemX)
//       var randomTitleIndex =  randomNumberGenerator(data.items.length);
//       console.log(data.items[randomTitleIndex].title);
//       data.items.splice(randomTitleIndex,1)
//     }
  
//   });

// function randomNumberGenerator (length){
//   // console.log("lenght ",length)
//    var randomNumber = Math.floor(Math.random()*length)
//   //  console.log("randomNumber " + randomNumber)
//    return randomNumber;
// }
// // randomNumberGenerator();