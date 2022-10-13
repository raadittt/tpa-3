let hasilSearch = document.getElementById("search");

let movieSearch = async () => {
    let search = new URL(document.location).searchParams;
    let cari = search.get("search");
    let respon = await fetch(`https://api.themoviedb.org/3/search/movie/?api_key=199896c47b34ca6f0d9067faf4238b31&query=${cari}&page=1`);
  
    let mencariMovie = await respon.json();
  
    mencariMovie.results.forEach((item) => {
      hasilSearch.innerHTML += `<div class="card" style="width: 20rem">
      <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="..." />
      <div class="row">
        <div class="col-9">
          <div class="card-body">
            <h5 id="card-title">${item.title}</h5>
            <p class="card-text">${item.release_date}</p>
          </div>
        </div>
        <div class="col-3">
          <p class="card-rate"><b>${item.vote_average}</b></p>
        </div>
      </div>
    </div>`;
    });
  };
  
  movieSearch()
