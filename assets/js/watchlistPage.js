var watchlistContainer = document.querySelector("#section-container")
var Watchlist = JSON.parse(localStorage.getItem("list")) || [];
for (var i = 0; i < Watchlist.length; i++) {
        axios.get('http://www.omdbapi.com?s='+ Watchlist[i]+'&apikey=d7842ce1')
        .then((response) => {
            console.log (response);
        })
     } ;