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
                        <div class="textOverlay textOverlay-blur" onclick="movieSelected('${movie.imdbID}')">
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
                                <div class="trailerBtn"><i class="fa-solid fa-play"></i> Play Trailer</div>
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
            <a href="./index.html" class="btn btn-default">Go Back To Search</a>
        </div>
        `;

        $('#movies').html(output);
      })
      .catch((err) => {
        console.log(err);
      });
  } 
  getMovie();