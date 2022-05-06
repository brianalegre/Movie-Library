// try to have a trailer link for movie
// // my API key
// var myAPI = "k_vfmd1877"
var myAPI = "k_1ucm7wp5"
// // this is the trailer link for the movie selected 
var trailerLink = ""


function getTrailer(id){

  fetch(`https://imdb-api.com/en/API/YouTubeTrailer/${myAPI}/${id}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.videoUrl);
    var trailerUrl = data.videoUrl

    if(trailerUrl === null){
      return trailerUrl
    }
    else{
      //open trailer link in new tab
      window.open(trailerUrl, "_blank");
    }
 
  })
  
}


// i want to create button on the html page named trailerBtn so user can click on it and it will have the link to the trailer for youtube directly

// or I can do something like this so it will show the video in a page directly. i dont know which one is better 

// <!-- <iframe width="420" height="315"
// src="movietrailerlink">
// </iframe> -->