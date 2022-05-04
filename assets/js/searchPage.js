// $(document).ready(() => {
//   console.log("PAGE LOADED");
//   //check to see if there's a movie to search for in the params
//   var searchTerm = window.location.search.split("searchTerm=")[1];
//   if(searchTerm){
//     getMovies(searchTerm)
//   }
//   $('#searchForm').on('submit', (e) => {
//     console.log("SEARCHED FOR SUTFF")
//     let searchText = $('#searchText').val();
//     getMovies(searchText);
//     e.preventDefault();
//   });
// });


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
        output += `
          <div class="col-md-3">

            <div class="well text-center">
              <img src="${movie.Poster}">
              // <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>

            <div class="well">
              <h5 class= "text-center">${movie.Title}</h5>
            </div>
            <div class="poster-cards">
              <img src="${movie.Poster}"/>
              <div class="textOverlay textOverlay-blur" onclick="movieSelected('${movie.imdbID}')">
                <span>MOVIE INFO</span>
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
      //if already on search.html, don't do it
      if (!window.location.pathname.toLocaleLowerCase().includes("search")) {
        window.location = `search.html?searchTerm=${searchText}`;
      } 
    }
    
    //click link in search direct to movie info html
    function movieSelected(id) {
      sessionStorage.setItem('movieId', id);
      window.location = './movie-info.html';
      // return false;
    }