// API Documentation
//  - https://developers.themoviedb.org/3/getting-started/introduction

// Example of API Request
//  - https://api.themoviedb.org/3/movie/550?api_key=8cf89ee258e6c6c4527e2e49299d8de9

// Example of API Request
// - https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>

// Variables
var apiKey =  "8cf89ee258e6c6c4527e2e49299d8de9"
// Movie Discovery Display of 20
var apiCall = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8cf89ee258e6c6c4527e2e49299d8de9&page=1"
// Call Page 2  for another 20 results
// var apiCall2 = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8cf89ee258e6c6c4527e2e49299d8de9&page=2"



// Get list of GenreIDs
var apiGenreCall = "https://api.themoviedb.org/3/genre/movie/list?api_key=8cf89ee258e6c6c4527e2e49299d8de9&language=en-US"


// this will target ACTION Genre
// var apiGenreList = "https://api.themoviedb.org/3/discover/movie?api_key=8cf89ee258e6c6c4527e2e49299d8de9&with_genres=28"
// fetch(apiGenreList) 
//     .then (function (response) {
//     return response.json();
//     })
//     .then (function (data) {
//         console.log(data);
//     })


// TMDB Genre IDs
var genreAction = 28;
var genreAdventure = 12;
var genreAnimation = 16;
var genreComedy = 35;
var genreCrime = 80;
var genreDocumentary = 99;
var genreDrama = 18;
var genreFamily = 10751;
var genreFantasy = 14;
var genreHistory = 36;
var genreHorro = 27;
var genreMusic = 10402;
var genreMystery = 9648;
var genreRomance = 10746;
var genreScienceFiction = 878;
var genreTVMovie = 10770;
var genreThriller = 53;
var genreWar = 10752;
var genreWestern = 37;

// API Call for specific Genre
var apiGenreID = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=`

// Function for gather data based on Genre
function getGenreData (genreID) {
fetch (apiGenreID + genreID)
    .then (function (response){
        return response.json();
    })
    .then (function (data) { 
        // Display Data to Dev Tools
        console.log(data)

        // Loop thru the Data
        for (var i = 0; i < data.results.length; i++) {
            console.log(i)

            // Display Each Movie Info
            console.log(`tmdbMovieTitle`, data.results[i].title)            // Movie Title
            console.log(`tmdbMoviePicture`, data.results[i].poster_path)    // Movie Picture Path
            // console.log(`tmdbMovieDescrip`, data.results[i].overview)       // Movie Description
            console.log(`tmdbMovieRating`, data.results[i].vote_average)    // Movie User Rating


            // Display Movie Picture
            // Target ID/CLASS on HTML
            var moviePicture = document.getElementById('moviePicture')
            
            // Picture variable
            var moviePoster = "https://image.tmdb.org/t/p/w500" + data.results[0].poster_path
            console.log(`moviePoster console`, moviePoster)
            // Display Picture
            moviePicture.src = moviePoster

      }
    })
}

// Call getGenreData function
getGenreData(genreAnimation);


    
/*
// Objects to target
// Movie Title
    results[i].original_title
// Movie Genres for the Title
    results[i].genre_ids[i]
// Movie Post
    results[i].poster_path
// Movie Description
    results[i].overview
// Movie Rating
    results[i].vote_average

TMDB Genre IDs
28 - Action
12 - Adventure
16 - Animation
35 - Comedy
80 - Crime
99 - Documentary
18 - Drama
10751 - Family
14 - Fantasy
36 - History
27 - Horror
10402 - Music
9648 - Mystery
10749 - Romance
878 - Science Fiction
10770 - TV Movie 
53 - Thriller
10752 - War
37 - Western


*/



