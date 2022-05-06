// API Keys
var branfonApi = "k_1ucm7wp5";
var vyAPI = "k_sr0i5ybd";
var vy2API = "k_e2ggrgmv";
var brianAPI ="k_tp8oqqm0"
var brianAPI2 = "k_kwwx2p9z"


// Variables
var myAPI = brianAPI2
var WenyuAPI = "k_1ucm7wp5"
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
var textOverlay = document.querySelectorAll('.textOverlay')


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
    watchListBtn[i].dataset.movie = data.items[i].title;
    textOverlay[i].dataset.id = data.items[i].id
    }
  });
}
  // Saving to localStorage
  for (var j = 0; j < watchListBtn.length; j++) {
    watchListBtn[j].addEventListener("click", function(event){
      // console.log ('hello', event.target.getAttribute('data-movie'));
      var Watchlist = JSON.parse(localStorage.getItem("list")) || [];
      if (Watchlist.indexOf(event.target.getAttribute("data-movie")) ===-1 ) {
        Watchlist.push(event.target.getAttribute('data-movie'))
          localStorage.setItem('list', JSON.stringify(Watchlist))
      }

  
    })
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


// Loop thru each Overlay
  for (var h = 0; h < textOverlay.length; h++) {
    textOverlay[h].addEventListener('click', movieClicked);
  }

// Get Movie ID Value
function movieClicked(event) {
  var clickedValue = event.target.getAttribute('data-id')
    // Call Function
    movieSelected(clickedValue)
}


//click on overlay, direct to movie-info html
function movieSelected(id) {
  sessionStorage.setItem('movieId', id);
  window.location = './movie-info.html';
  // return false;
}


// Genre / Category Area
var dropdownEl = document.querySelectorAll(".dropdown-item");
    for (var k = 0; k < dropdownEl.length; k++) {
        dropdownEl[k].addEventListener("click", dropdownClicked)
}

function dropdownClicked(event) {
	var dropdownValue = event.target.getAttribute('data-genre')
	getGenre(dropdownValue)
}

function getGenre(dropdownValue) {
// Clear existing movies on page
for (var l = 0; l < 12; l++) {
    titleEl[l].textContent = "";
    ratingEl[l].textContent = "";
    imageEl[l].src = "";
    watchListBtn[l].dataset.movie = "";
    textOverlay[l].dataset.id = "";
}
// API Call
var apiTMDBKey =  "8cf89ee258e6c6c4527e2e49299d8de9"
var apiGenreList = `https://api.themoviedb.org/3/discover/movie?api_key=${apiTMDBKey}&with_genres=${dropdownValue}`
fetch(apiGenreList)
    .then (function (response) {
    return response.json();
    })
    .then (function (data) {
        console.log(data);
        // Loop thru the data
        for (var m = 0; m < 12; m++) {
           
            // Picture variable
            moviePoster = "https://image.tmdb.org/t/p/w500" + data.results[m].poster_path

            // Movie Title
            movieTMBDTitle = data.results[m].title;
            // console.log('movieTitle:', movieTitle)

            // IMDB Rating
            movieTMDBRating = data.results[m].vote_average;
            // console.log('movieRating:', movieRating);
            
            // Movie Picture
            imageTMDBUrl = moviePoster
            // console.log('imageURL:', imageUrl)

            // Movie ID
            movieTMDBID = data.results[m].id;
            console.log(movieTMDBID)

            // Display the Data on Page
            titleEl[m].textContent = movieTMBDTitle;
            ratingEl[m].textContent = movieTMDBRating;
            imageEl[m].src = imageTMDBUrl;
            watchListBtn[m].dataset.movie = data.results[m].title;



            var movieCall = `https://api.themoviedb.org/3/movie/${movieTMDBID}?api_key=${apiTMDBKey}&language=en-US`
            fetch(movieCall)
              .then (function (responseIMDB) {
                return responseIMDB.json();
                })
                .then ( async function (dataIMDB) {
                  console.log(dataIMDB)
                    // Loop thru the data
                    for (var n = 0; n < 12; n++) {
                    // Add Data to each card
                    textOverlay[n].dataset.id = dataIMDB[n].imdb_id
                    // console.log('what is the imdbid', textOverlay[n])
                    }
                })


        }
    })

	
}


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