//  // information about one movie
  fetch('https://imdb-api.com/API/ExternalSites/k_vfmd1877/tt0411008')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.netflix);
    var netflixLink = data.netflix;
  }

  );

//   // top 250
  fetch('https://imdb-api.com/en/API/Top250Movies/k_vfmd1877')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      console.log(data.items[i].title);
      var movieTitle = data.item[i].title;
    }
  });

// //   // most popular 
//   fetch('https://imdb-api.com/en/API/MostPopularMovies/k_vfmd1877')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     for (var i = 0; i < 50; i++) {
//       console.log(data[i].name);
//       var
//     }
//   });

//   youtube trailer

  fetch('https://imdb-api.com/en/API/YouTubeTrailer/k_vfmd1877/tt1375666')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.videoUrl);
    var trailerUrl = data.videoUrl
    console.log(trailerUrl)
  });

// random generator generating title from a keyword search

  fetch('https://imdb-api.com/en/API/Keyword/k_vfmd1877/action-hero')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (var i = 0; i < 10; i++) {
      // .splice(index, howmany, item1, ....., itemX)
      var randomTitleIndex =  randomNumberGenerator(data.items.length);
      console.log(data.items[randomTitleIndex].title);
      data.items.splice(randomTitleIndex,1)
    }
  
  });

function randomNumberGenerator (length){
  // console.log("lenght ",length)
   var randomNumber = Math.floor(Math.random()*length)
  //  console.log("randomNumber " + randomNumber)
   return randomNumber;
}
// randomNumberGenerator();