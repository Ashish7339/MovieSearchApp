var TOPMOVIESAPIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
var SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

var container = document.querySelector(".container");
var inp = document.querySelector("#inp");

async function getmovie(API) {
  var response = await fetch(API);
  var data = await response.json();
  showmovie(data.results);
}

getmovie(TOPMOVIESAPIURL);

function showmovie(movies) {
  container.innerHTML = "";
  for (var data of movies) {
    var box = document.createElement("div");
    box.classList.add("card");
    box.innerHTML = `
         <img src="https://image.tmdb.org/t/p/w1280${data.poster_path}" alt="">
            <div class="overview">
                        <h6>${data.title}</h6>
                        <div>${data.vote_average}</div>
                        <p>
                         ${data.overview}
                        </p>
                    </div>
    `;

    container.appendChild(box);
  }
}

inp.addEventListener("keyup", function (e) {
  if (e.target.value === "") {
    getmovie(TOPMOVIESAPIURL);
  } else {
    getmovie(SEARCHAPI + e.target.value);
  }
});
