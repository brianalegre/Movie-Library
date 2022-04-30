$(document).ready(() => {
  console.log("PAGE LOADED");
  //check to see if there's a movie to search for in the params
  var searchTerm = window.location.search.split("searchTerm=")[1];
  if(searchTerm){
    getMovies(searchTerm)
  }
  $('#searchForm').on('submit', (e) => {
    console.log("SEARCHED FOR SUTFF")
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});


//to search and populate the movie
function getMovies(searchText) {
  axios.get('http://www.omdbapi.com?s=' + searchText + '&apikey=d7842ce1')
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      $.each(movies, (_index, movie) => {
        output += `
          <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
            </div>
          </div>
        `;
      });
      $('#movies').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
  //if already on search.html, don't do it
  if (!window.location.pathname.toLocaleLowerCase().includes("search")) {
    window.location = `search.html?searchTerm=${searchText}`;
  }
}

//click link in search direct to search html
function movieSelected(id) {
  sessionStorage.setItem('movieId', id);
  window.location = 'movie-info.html';
  return false;
}

function getMovie() {
  let movieId = sessionStorage.getItem('movieId');

  axios.get('http://www.omdbapi.com?i=' + movieId + '&apikey=d7842ce1')
    .then((response) => {
      console.log(response);
      let movie = response.data;

      let output = `
      <div class="row">
      <div class="col-md-4">
      <img src="${movie.Poster}" class="thumbnail">
      </div>
      <div class="col-md-8">
      <h2>${movie.Title}</h2>
      <ul class="list-group">
      <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
      <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
      <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
      <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
      <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
      <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
      <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
      </ul>
      </div>
      </div>
      <div class="row">
      <div class="well">
      <h3>Plot</h3>
      ${movie.Plot}
      <hr>
      <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
      <a href="index.html" class="btn btn-default">Go Back To Search</a>
      </div>
      </div>
      `;

      $('#movie').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}