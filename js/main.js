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
      // let movies = res.Search;
      let movies = Avengers;
      console.log(movies);
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
      // let movie = res;
      let movie = TheAvengers;
      console.log(movie);

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
        <a href="http://imdb.com/title/${
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
const url = "http://www.omdbapi.com?apikey=" + apiKey;

// For STATIC GitHub Pages
const Avengers = [
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228 ",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427 ",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756 ",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "1998",
    imdbID: "tt0118661 ",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers: Earth's Mightiest Heroes",
    Year: "2010–2012",
    imdbID: "tt1626038 ",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
  },
  {
    Title: "Ultimate Avengers",
    Year: "2006",
    imdbID: "tt0491703 ",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDFmZTkxMjktMzRiYS00YzMwLWFhZDctOTQ2N2NlOTAyZDJhXkEyXkFqcGdeQXVyNjgzNDU2ODI@._V1_SX300.jpg"
  },
  {
    Title: "Ultimate Avengers II",
    Year: "2006",
    imdbID: "tt0803093 ",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "1961–1969",
    imdbID: "tt0054518 ",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWI4ZWM4ZWQtODk1ZC00MzMxLThlZmMtOGFmMTYxZTAwYjc5XkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_SX300.jpg"
  },
  {
    Title: "Avengers Assemble",
    Year: "2013–",
    imdbID: "tt2455546 ",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"
  },
  {
    Title: "Avengers Assemble",
    Year: "2013–",
    imdbID: "tt2455546 ",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"
  }
];

const TheAvengers = {
  Title: "The Avengers",
  Year: "2012",
  Rated: "PG-13",
  Released: "04 May 2012",
  Runtime: "143 min",
  Genre: "Action, Adventure, Sci-Fi",
  Director: "Joss Whedon",
  Writer: "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
  Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
  Plot:
    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
  Language: "English, Russian, Hindi",
  Country: "USA",
  Awards: "Nominated for 1 Oscar. Another 38 wins & 79 nominations.",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  Ratings: [
    { Source: "Internet Movie Database", Value: "8.1/10" },
    { Source: "Rotten Tomatoes", Value: "92%" },
    { Source: "Metacritic", Value: "69/100" }
  ],
  Metascore: "69",
  imdbRating: "8.1",
  imdbVotes: "1,157,818",
  imdbID: "tt0848228 ",
  Type: "movie",
  DVD: "25 Sep 2012",
  BoxOffice: "$623,279,547",
  Production: "Walt Disney Pictures",
  Website: "http://marvel.com/avengers_movie",
  Response: "True"
};
