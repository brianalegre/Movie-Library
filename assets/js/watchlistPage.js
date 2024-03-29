// Get movieTitles from localStorage
// Convert JSON to String
var watchListTitle = JSON.parse(localStorage.getItem('list'))
    // Display results to Dev Tools
    console.log('From localStorage', watchListTitle);


// IMDB Keys
var branfonApi = "k_1ucm7wp5";
var vyAPI = "k_sr0i5ybd";
var vy2API = "k_e2ggrgmv";
var WenyuAPI = "k_1ucm7wp5"
var brianAPI ="k_tp8oqqm0"
var brianAPI2 = "k_kwwx2p9z"
var brianAPI3 = "k_fg2g4aso"
var brianAPI4 = "k_yx2zcq84"
var freshIMDBAPI = "k_q1dpykev"


// TMDB Keys
var apiTMDBKey =  "8cf89ee258e6c6c4527e2e49299d8de9"
var freshTMDBAPI = "27f5c0e001f75b164e65468044b81922"


// OMDB Keys
var bradonAPI = "d7842ce1"
var brianOMDBAPI = "18b76d55"
var brianOMDBAPI2 = "b9f227a0"
var freshOMDBAPI = "87b5ba0e"

// Current API Keys
var myAPI = "k_bkfoa0l6"

// Variables
var movieTitle = ""
var movieRating = 0
var imageUrl = ""


// HTML Targeting Variables
var imageEl = document.querySelectorAll(".movieImg")
var titleEl = document.querySelectorAll(".movieTitle")
var watchListBtn = document.querySelectorAll(".watchlistBtn");
var searchKey = document.getElementById('searchText');

// Function for searching Movie
function searchMovie() {
    // Get Input Value
    var searchInputVal = document.getElementById('searchText').value.trim();
    console.log('hello searchMovie')
    var queryString = "./search.html?q=" + searchInputVal;
  
    // Go to next page
    location.assign(queryString)
    // getMovies(searchInputVal)
  
  }
  
  // Listen for Enter Key to searchMovie
  searchKey.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      searchMovie()
    }
  })


function getWatchListData() {
    // Check if watListTitle has data
    if (!watchListTitle || watchListTitle.length === 0) {
        // JQuery Dynamic HTML Creation
        $(".movie-cards").append(
            $(/*html*/`
                <div class="watchListMSG">
                    <h1> No Movies in Watchlist </h1>
                    <p> Come back when you've added some movies to your list </p>
                </div>
            `)
        )
    } else {
        // Loop thru the data
        for (var i = 0; i < watchListTitle.length; i++) {
        getWatchListMovies(watchListTitle[i])
        }   
    }    
}

// Call Function on load
getWatchListData();

// IMDB Function API Call
function getWatchListMovies(searchText) {
    // API Call
    fetch (`https://imdb-api.com/en/API/SearchTitle/${myAPI}/${searchText}`)
    // fetch (`https://imdb-api.com/en/API/Title/k_vfmd1877/${searchText}`)

    .then (function (response) {
        return response.json()
    })
    .then (function (data) {
        // Display Data to Dev Tools
        console.log(data)

        // Get Movie Data from API
        var movieTitle = data.results[0].title
        var moviePoster = data.results[0].image;
            // Display Data to Dev Tools;
            // console.log('Movie Title:', movieTitle);
            // console.log('Movie Posetr:', moviePoster);

        // Call Function to Display to Page
        displayWatchListMovies (movieTitle, moviePoster)
    })
}

function displayWatchListMovies (movieTitle, moviePoster) {
    // JQuery Dynamic HTML Creation
    $(".movie-cards").append(
        $(/*html*/`
        <div class="movieContainer">
            <h4 class="movieTitle">${movieTitle}</h4>
            <div class="card-box">
                <img class="movieImg" src=${moviePoster}>
                <button class="watchlistBtn" data-title="${movieTitle}" data-hover="Remove from Watchlist">❌</button>
            </div>
        </div>
        `)
    )

    //Remove from Watchlist
    $(".watchlistBtn").on("click",function(){
         var title=$(this).attr("data-title")
         removeLocalStorageValue(title)
        location.reload()
    })
}
function removeLocalStorageValue(targetValue) {
      for (var i = 0;i<watchListTitle.length;i++){
          if (watchListTitle[i]===targetValue){
              watchListTitle.splice(i,1)
          }
      }
      localStorage.setItem("list",JSON.stringify(watchListTitle))
  }


// UNUSED CODE
// Keep as a reference


////////////////////////////////////////////////////////////////////////////////////
// var watchlistContainer = document.querySelector("#section-container")
// var Watchlist = JSON.parse(localStorage.getItem("list")) || [];
// for (var i = 0; i < Watchlist.length; i++) {
//         axios.get('http://www.omdbapi.com?s='+ Watchlist[i]+'&apikey=d7842ce1')
//         .then((response) => {
//             console.log (response);
//         })
//      } ;


// // API Call
// function getMovies(searchText) {
//     axios.get(`https://www.omdbapi.com?s=` + searchText + `&apikey=18b76d55`)
//     .then((response) => {
//     console.log(response);
//     // let movies = response.data.Search;
//     // let output = '';

//     // Get Movie Data from API
//     var movieTitle = response.data.Search[0].Title;
//     var moviePoster = response.data.Search[0].Poster;

//         // Display results to Dev Tools
//         console.log('Movie Title', movieTitle)
//         console.log('Movie Poster', moviePoster)
//     })

// }


// // Search movie based on watchListTitle
// function getMovies(searchText) {
//     // API Get Call
//     axios.get('https://www.omdbapi.com?s=' + searchText + '&apikey=d7842ce1')
//         .then (function (response) {
//             return response.JSON;
//         })
//         .then (function (data) {
//             console.log(data)
//         })
// }


// Function for getting popular videos
// function getPopularMovies() {
//   // API Call 
//   fetch(`https://imdb-api.com/en/API/MostPopularMovies/${myAPI}`)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     // Display API Data
//     // console.log(data);
