$(document).ready(() => {
  $("#searchForm").on("submit", e => {
    e.preventDefault();
    let searchText = $("#searchText").val();
    getMovies(searchText);
  });
});

function getMovies(searchText) {
  fetch(url + "&s=" + searchText)
    .then(res => res.json())
    .then(res => {
      // console.log(res.Search);
      let movies = res.Search;
      // console.log(movies[0]);
      let output = "";
      movies.forEach(movie => {
        output += `
            <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title} (${movie.Year}) </h5>
              <a onclick="movieSelected('${
                movie.imdbID
              }')" class="btn btn-primary" href="#">Movie Details</a>
            </div>
          </div>
        `;
      });
      $("#movies").html(output);
    })
    .catch(err => {
      console.log(err);
    });
}

function movieSelected(id) {
  sessionStorage.setItem("movieId", id);
  window.location = "movie.html";
  return false;
}

function getMovie() {
  let movieId = sessionStorage.getItem("movieId");

  fetch(url + "&i=" + movieId)
    .then(res => res.json())
    .then(res => {
      // console.log(res);
      let movie = res;

      let output = "";
      output += `
      <div class="row">
      <div class="col-md-4">
        <img src="${movie.Poster}" class="thumbnail">
      </div>
      <div class="col-md-8">
        <h2 class="text-center">${movie.Title}</h2>
        <ul class="list-group">
          <li class="list-group-item"><strong>Genre:</strong> ${
            movie.Genre
          }</li>
          <li class="list-group-item"><strong>Duration:</strong> ${
            movie.Runtime
          }</li>
          <li class="list-group-item"><strong>Released:</strong> ${
            movie.Released
          }</li>
          <li class="list-group-item"><strong>Rated:</strong> ${
            movie.Rated
          }</li>
          <li class="list-group-item">
            <strong>Ratings:</strong>
            <div class="row">
          `;

      let ratings = movie.Ratings;
      // console.log(ratings);
      ratings.forEach(rating => {
        output += `
                          <div class="col">
                            <strong>${rating.Source}:</strong> ${rating.Value}
                          </div>
                        `;
      });
      output += `
            </div>
          </li>
          <li class="list-group-item"><strong>Production:</strong> ${
            movie.Production
          }</li>
          <li class="list-group-item"><strong>Director:</strong> ${
            movie.Director
          }</li>
          <li class="list-group-item"><strong>Writer:</strong> ${
            movie.Writer
          }</li>
          <li class="list-group-item"><strong>Actors:</strong> ${
            movie.Actors
          }</li>
          <li class="list-group-item"><strong>Awards:</strong> ${
            movie.Awards
          }</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="well">
        <h3>Plot</h3>
        ${movie.Plot}
        <hr>
        <a href="https://imdb.com/title/${
          movie.imdbID
        }" target="_blank" class="btn btn-primary">View IMDB</a>
        <a href="index.html" class="btn btn-default">Go Back To Search</a>
        <hr>
      </div>
    </div>
      `;

      $("#movie").html(output);
    })
    .catch(err => {
      console.log(err);
    });
}

// OMDB API
const apiKey = "f78a4c1f";
const url = "https://www.omdbapi.com?apikey=" + apiKey;
