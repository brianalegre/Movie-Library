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

function getMovie() {
  let movieId = sessionStorage.getItem('movieId');

  axios.get('https://www.omdbapi.com?i=' + movieId + '&apikey=87b5ba0e')
    .then((response) => {
      console.log(response);
      let movie = response.data;

      let output = /*html*/`
        <div class="row">
            <section class="mainContainer">
                <div class= "posterWrapper">
                    <div class="img-container" style="background-image: url('${movie.Poster}')">
                        <div class="textOverlay textOverlay-blur" onclick="getTrailer('${movie.imdbID}')">
                            <span><i class="fa-solid fa-play"></i> PLAY TRAILER</span>
                        </div>
                    </div>
                    <div class= "titleDetails">
                        <a href="https://imdb.com/title/${movie.imdbID}" target="_blank"><h2>${movie.Title}</h2></a>
                        
                        <div class="details">
                            <span class="rated">${movie.Rated}</span>
                            <div class="detail-item"> ${movie.Released} ▪️ ${movie.Genre}</div>
                        </div>

                        <div class="imbdRating">
                            <span><strong>IMDB Rating:</strong> ${movie.imdbRating}
                                <button class="watchlistBtn" data-hover="Add to Watchlist"><i class="fa-solid fa-circle-plus"></i></button>
                            </span>
                        </div>
                    
                        <div class= "infoWrapper">
                            <div class="movieOverview">   
                                <h3>Overview</h3>
                                <p>${movie.Plot}</p>
                            </div>
            
                            <div class="movieCrew">
                                <div class="crew-item"><strong>Director:</strong> ${movie.Director}</div>
                                <div class="crew-item"><strong>Writer:</strong> ${movie.Writer}</div>
                                <div class="crew-item"><strong>Actors:</strong> ${movie.Actors}</div>
                            </div>
                        </div>
                    </div>
                </div>          
            </section>
        </div>
        
        `;
        // <div class="row">
        //     <br>
        //     <a href="https://imdb.com/title/${movie.imdbID}" target="_blank">View IMDB</a>
        // </div>

      $('#movies').html(output);
      var watchListBtn = document.querySelector(".watchlistBtn");
    
      watchListBtn.dataset.movie = movie.Title;

      saveToWatchlist();
    })
    .catch((err) => {
      console.log(err);
    });
}

var myAPI = "k_vfmd1877"
// // this is the trailer link for the movie selected 
var trailerLink = ""


function getTrailer(id) {

  fetch(`https://imdb-api.com/en/API/YouTubeTrailer/${myAPI}/${id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.videoUrl);
      console.log(id);
      var trailerUrl = data.videoUrl

      if (trailerUrl === null) {
        return trailerUrl
      }
      else {
        //open trailer link in new tab
        window.open(trailerUrl, "_blank");
      }

    })

}

getMovie();

function saveToWatchlist() {  // Saving to localStorage
  var watchListBtn = document.querySelector(".watchlistBtn");
  console.log(watchListBtn)
  watchListBtn.addEventListener("click", function (event) {
    event.stopPropagation()
    console.log(event.currentTarget)
    // console.log ('hello', event.target.getAttribute('data-movie'));
    var Watchlist = JSON.parse(localStorage.getItem("list")) || [];
    if (Watchlist.indexOf(event.currentTarget.getAttribute("data-movie")) === -1) {
      Watchlist.push(event.currentTarget.getAttribute('data-movie'))
      localStorage.setItem('list', JSON.stringify(Watchlist))
    }


  })
}
