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
  axios.get('https://www.omdbapi.com?s=' + searchText + '&apikey=d7842ce1')
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      $.each(movies, (_index, movie) => {
        output += /*html*/`
          <div class="col-md-3">
            <div class="well">
              <h5 class= "text-center">${movie.Title}</h5>
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
      })
      .catch((err) => {
        console.log(err);
      });
  } 
  getMovie();