// var branfonApi = "k_1ucm7wp5";
// var vyAPI = "k_sr0i5ybd";

var myAPI = "k_sr0i5ybd"
// movie title for the main page
var movieTitle = ""

// movie rating for the main page
var movieRating = 0

// this is the image url
var imageUrl = ""

var imageEl = document.querySelectorAll(".movieImg")
var titleEl = document.querySelectorAll(".movieTitle")
var ratingEl = document.querySelectorAll(".movieRating");

//buttons

var watchListBtn = document.querySelectorAll(".watchlistBtn");

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

//   // top 250
  fetch(`https://imdb-api.com/en/API/MostPopularMovies/${myAPI}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (var i = 0; i < 12; i++) {
       movieTitle = data.items[i].title;
       console.log(movieTitle)
       titleEl[i].textContent = movieTitle;

       movieRating = data.items[i].imDbRating;
       console.log(movieRating);
       ratingEl[i].textContent = movieRating;
         // this will generate the image for each of the box
       imageUrl = data.items[i].image;
       console.log(imageUrl)
    
       imageEl[i].src = imageUrl;
       
    }
  });

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