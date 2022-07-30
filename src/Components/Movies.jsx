import React, { useState, useEffect } from "react";
import { SearchMovie } from "../APIs/SearchMovie";
import AllMovie from "./AllMovie";
function Movies({ handleRemoveFav, searchMovie, lang, genre, fav, handleFav }) {
  const [loading, setloading] = useState(true);

  const [movies, setmovies] = useState();
  useEffect(() => {
    SearchMovie(searchMovie, lang).then((data) => {
      console.log("dataaaaaaaaaaaa", data.results);
      setmovies(data.results);
      setloading(false);
    });
    console.log(searchMovie, lang, genre);
  }, [searchMovie, lang, genre]);

  return (
    <>
      {loading ? (
        <loading />
      ) : (
        <AllMovie
          movies={movies}
          handleFav={handleFav}
          fav={fav}
          lang={lang}
          handleRemoveFav={handleRemoveFav}
          genre={genre}
        />
      )}
    </>
  );
}

export default Movies;
