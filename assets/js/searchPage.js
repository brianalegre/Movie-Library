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

// HTML Targeting Variables
var searchKey = document.getElementById('searchText');


// Get Movie from URL
var movieParam = document.location.search 
var queryParam = movieParam.split('=').pop();
    // Check Results in Dev Tools
    console.log('movieParam', movieParam)
    console.log('queryParam', queryParam)
    // decodeURI opposite of encodeURI
    console.log('decodueURI', decodeURI(queryParam))

// Display Function on Load
getMovies(decodeURI(queryParam))


//to search and populate the movie
function getMovies(searchText) {
  axios.get('https://www.omdbapi.com?s=' + searchText + '&apikey=87b5ba0e')
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      $.each(movies, (_index, movie) => {
        output += /*html*/`
        <div class="col-md-3">
          <div class= container>
            <div class="title">
              ${movie.Title}
            </div>
          </div>
          <div class="poster-cards">
            <div class="img-container" style="background-image: url('${movie.Poster}')">
              <div class="textOverlay textOverlay-blur" onclick="movieSelected('${movie.imdbID}')">
                <span>MOVIE INFO</span>
              </div>
            </div>
          </div>
          </div>
          `;
          
        });
        $('#movies').html(output);
      })
      .catch((err) => {
        console.log(err);
      });
      // //if already on search.html, don't do it
      // if (!window.location.pathname.toLocaleLowerCase().includes("search")) {
      //   window.location = `search.html?searchTerm=${searchText}`;
      // } 
    }
    
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
  if (event.key === 'Enter' ) {
    event.preventDefault()
    searchMovie()
  }
})



    //click on poster in search html, direct to movie-info html
    function movieSelected(id) {
      sessionStorage.setItem('movieId', id);
      window.location = './movie-info.html';
      // return false;
    }