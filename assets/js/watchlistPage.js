var imageEl = document.querySelectorAll(".movieImg")
var titleEl = document.querySelectorAll(".movieTitle")
var ratingEl = document.querySelectorAll(".movieRating");
var watchListBtn = document.querySelectorAll(".watchlistBtn");

var movieTitle = ""
var movieRating = 0
var imageUrl = ""

var watchlistContainer = document.querySelector("#section-container")
var Watchlist = JSON.parse(localStorage.getItem("list")) || [];
for (var i = 0; i < Watchlist.length; i++) {
        axios.get('http://www.omdbapi.com?s='+ Watchlist[i]+'&apikey=d7842ce1')
        .then((response) => {
            console.log (response);
        })
     } ;