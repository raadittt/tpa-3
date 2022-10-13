let movieContainer = document.getElementById("konten");
// let hasilSearch = document.getElementById("search");

let dataMovie = async () => {
  let response = await fetch("https://api.themoviedb.org/3/discover/movie/?api_key=199896c47b34ca6f0d9067faf4238b31&sort_by=popularity.desc&page=1");
  let movie = await response.json();

  movie.results.forEach((item) => {
    console.log(item);
    movieContainer.innerHTML += `<div class="card" style="width: 20rem">
      <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 id="card-title">${item.title}</h5>
        <p class="">${item.overview}</p>
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>${item.release_date}</b></li>
        <li class="list-group-item"><b>${item.vote_average}</b></li>
      </ul>
    </div>`;
  });
};

// let movieSearch = async () => {
//   let search = new URL(document.location).searchParams;
//   let cari = search.get("search");
//   let respon = await fetch(`https://api.themoviedb.org/3/search/movie/?api_key=199896c47b34ca6f0d9067faf4238b31&query=${cari}&page=1`);

//   let mencariMovie = await respon.json();

//   mencariMovie.results.forEach((item) => {
//     hasilSearch.innerHTML += `<div class="card" style="width: 20rem">
//         <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="..." />
//         <div class="card-body">
//           <h5 id="card-title">${item.title}</h5>
//           <p class="">${item.overview}</p>
//         </div>
//         <ul class="list-group list-group-flush">
//         <li class="list-group-item"><b>${item.release_date}</b></li>
//           <li class="list-group-item"><b>${item.vote_average}</b></li>
//         </ul>
//       </div>`;
//   });
// };

// movieSearch()

dataMovie();
