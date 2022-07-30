import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
const RemoveFav = ({ movie, handleRemoveFav }) => {
  return (
    <>
      <span>Remove from Favorite</span>
      <div className="detailsbutton" onClick={() => handleRemoveFav(movie)}>
        <FavoriteIcon style={{ color: "red" }} />
      </div>
    </>
  );
};
export default RemoveFav;
