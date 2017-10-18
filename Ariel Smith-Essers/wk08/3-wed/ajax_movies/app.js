var movie = document.querySelector('input');

// var movieSearch = {
//   dataType: "json",
//   url: 'http://www.omdbapi.com/?apikey=2f6435d9&s='+movie.value,
//   data: result
// }
// var showTitles = function(result) {
//   result.Search.forEach(function(film) {
//   console.log(film.Title);
//   var movieResults = document.querySelector('#movie-results');
//   var $movieTitles = $('<h1>').text(film.Title);
//   movieResults.append($movieTitles);
//   });
// }

// $("button").on(click, function() {
//   $.ajax(movieSearch).done(showTitles);
// });


$("button").click(function(){
    $.getJSON('http://www.omdbapi.com/?apikey=2f6435d9&s='+movie.value, function(result){
      result.Search.forEach(function(film) {
        console.log(film.Title);
        var $movieResults = $('#movie-results');
        var $movieTitles = $('<h2>');
        $movieTitles.append(film.Title);
        $movieResults.append($movieTitles);
      });
    });
});
