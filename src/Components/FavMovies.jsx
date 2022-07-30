import React from "react";
import Grid from "@mui/material/Grid";
import RemoveFav from "./RemoveFav";
const FavMovies = ({ fav, handleRemoveFav }) => {
  const imgBaseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      {" "}
      <h1 className="resultTitle">
        My Favorite {fav.length > 1 ? "Movies" : "Movie"}
      </h1>
      {fav.length !== 0 ? (
        <Grid sx={{ flexGrow: 1 }} container spacing={0}>
          {fav.map((movie) => (
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
                  <RemoveFav movie={movie} handleRemoveFav={handleRemoveFav} />
                </div>
              </div>
            </div>
          ))}
        </Grid>
      ) : (
        <p className="noMovie">Please Add Some Movies to Favorite</p>
      )}
    </>
  );
};
export default FavMovies;
