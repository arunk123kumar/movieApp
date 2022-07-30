import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Movies from "./Components/Movies";
import Header from "./Components/Header";
import FavMovies from "./Components/FavMovies";
import Footer from "./Components/Footer";

function App() {
  const [movieType, setmovieType] = useState("a");
  const [lang, setlang] = useState("en");
  const [genre, setgenre] = useState(18);
  const [searchMovie, setsearchMovie] = useState("");
  const [fav, setfav] = useState([]);
  const handleFav = (movie) => {
    const newFav = [...fav, movie];
    setfav(newFav);
    console.log("Added to Fav: ", fav);
  };
  const handleRemoveFav = (movie) => {
    const index = fav.findIndex((x) => x.id === movie.id);
    if (index > -1) {
      // only splice array when item is found
      fav.splice(index, 1); // 2nd parameter means remove one item only
      setfav([...fav]);
    }
    console.log("remove: ", index);
  };

  return (
    <>
      <Header
        setmovieType={setmovieType}
        setsearchMovie={setsearchMovie}
        lang={lang}
        genre={genre}
        setgenre={setgenre}
        setlang={setlang}
      />
      <Movies
        fav={fav}
        handleFav={handleFav}
        searchMovie={searchMovie}
        setsearchMovie={setsearchMovie}
        genre={genre}
        handleRemoveFav={handleRemoveFav}
        lang={lang}
      />
      <FavMovies fav={fav} handleRemoveFav={handleRemoveFav} />
      <Footer />
    </>
  );
}

export default App;
