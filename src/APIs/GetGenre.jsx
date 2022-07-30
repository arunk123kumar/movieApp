export default async function GetGenre() {
  const resp = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=1c74fa48227e0a0e08bf018cad7d7200`
  );
  const genre = await resp.json();
  return genre.genres;
}
