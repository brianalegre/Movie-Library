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

  axios.get('https://www.omdbapi.com?i=' + movieId + '&apikey=d7842ce1')
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
                        <h2>${movie.Title}</h2> 
                        
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

        <div class="row">
            <hr>
            <a href="https://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
        </div>
        `;

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
