export async function SearchMovie(movie) {
  console.log(movie);
  const resp = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=1c74fa48227e0a0e08bf018cad7d7200&query=${
      movie ? movie : " a a"
    }`
  );
  return resp.json();
}
