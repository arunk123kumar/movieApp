import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveFav from "./RemoveFav";

const AddToFav = ({ movie, handleFav, fav, handleRemoveFav }) => {
  return fav.find((o) => o.id === movie.id) ? (
    <RemoveFav movie={movie} handleRemoveFav={handleRemoveFav} />
  ) : (
    <>
      <span>Add To Favorite</span>
      <div className="detailsbutton" onClick={() => handleFav(movie)}>
        <FavoriteBorderOutlinedIcon />
      </div>
    </>
  );
};
export default AddToFav;
