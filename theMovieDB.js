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



fetch(apiCall) 
    .then (function (response) {
    return response.json();
    })
    .then (function (data) {
        console.log(data);
    })

    
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

*/

