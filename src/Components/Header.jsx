import { FormControlLabel, Switch } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TvIcon from "@mui/icons-material/Tv";
import MovieIcon from "@mui/icons-material/Movie";
import HomeIcon from "@mui/icons-material/Home";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import GetGenre from "../APIs/GetGenre";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useEffect, useState } from "react";

import "./movies.css";

export default function Header({
  searchMovie,
  setsearchMovie,
  lang,
  setlang,
  genre,
  setgenre,
}) {
  const [JsonGenre, setJsonGenre] = useState([]);
  useEffect(() => {
    GetGenre().then((data) => {
      setJsonGenre([...data]);
    });
  }, []);
  const handleGenreChange = (event) => {
    setgenre(event.target.value);
  };
  const handleChange = (event) => {
    setlang(event.target.value);
  };
  return (
    <div className="menu">
      <InputLabel
        style={{
          color: "#ffffff",
          display: "inline-block",
          margin: "1em 1em",
          fontWeight: "800",
          border: "solid 2px white",
          padding: "1em",
          borderRadius: "6px",
        }}
      >
        My Movie App
      </InputLabel>
      <FormControl style={{ margin: "1em", float: "right" }}>
        {/* <InputLabel id="demo-simple-select-label" style={{ color: "#ffffff" }}>
          Genre
        </InputLabel> */}
        <Select
          // labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={genre}
          onChange={handleGenreChange}
          className="test"
        >
          {JsonGenre.map((g) => (
            <MenuItem value={g.id}>{g.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl style={{ margin: "1em", float: "right" }}>
        {/* <InputLabel id="demo-simple-select-label" style={{ color: "#ffffff" }}>
          Language
        </InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          onChange={handleChange}
          style={{ color: "#ffffff" }}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"hi"}>Hindi</MenuItem>
          <MenuItem value={"te"}>Telgu</MenuItem>
        </Select>
      </FormControl>

      <TextField
        style={{
          margin: "1em",
          color: "#ffffff",
          float: "right",
          inputOnBlur: { borderColor: "#4b6cd5" },
        }}
        id="outlined-basic"
        label="Search Movie"
        variant="outlined"
        value={searchMovie}
        autoFocus
        onChange={(e) => {
          setsearchMovie(e.target.value);
        }}
      />
    </div>
  );
}
