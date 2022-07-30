import React from "react";

import Grid from "@mui/material/Grid";
import "./movies.css";
import AddToFav from "./AddToFav";

function AllMovie({ movies, lang, genre, fav, handleFav, handleRemoveFav }) {
  const imgBaseUrl = "https://image.tmdb.org/t/p/original/";

  const filterdArray = [];

  console.log("movies", movies);
  movies.map((movie) => {
    if (movie.original_language == lang && movie.genre_ids.includes(genre)) {
      filterdArray.push(movie);
    }
  });

  return (
    <div>
      <h1 className="resultTitle">
        Search
        {filterdArray.length > 1 ? " Results" : " Result"}
      </h1>
      {console.log("filter", filterdArray.length)}
      {filterdArray.length !== 0 ? (
        <Grid sx={{ flexGrow: 1 }} container spacing={0}>
          {filterdArray.map((movie) => (
            <div className="movieinfo">
              <div className="movie-items">
                <div className="poster">
                  <img
                    src={`${imgBaseUrl}${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
                <h3 className="movie-title">
                  {movie.original_title
                    ? movie.original_title
                    : movie.original_name}
                </h3>
                <div className="detailsbutton">
                  <AddToFav
                    movie={movie}
                    fav={fav}
                    handleRemoveFav={handleRemoveFav}
                    handleFav={handleFav}
                  />
                </div>
              </div>
            </div>
          ))}
        </Grid>
      ) : (
        <h1 className="noMovie">No Movies Found</h1>
      )}
    </div>
  );
}
export default AllMovie;
