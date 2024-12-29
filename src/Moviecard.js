import React from "react";

const MovieCard = ({ movie, addstar, substar, favbtn, cartbtn }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>

      {/* Rating and Star Buttons */}
      <div className="rating-container">
        <button className="increase-star-btn" onClick={() => addstar(movie)}>
          +
        </button>
        <p> {movie.star}⭐</p>
        <button className="decrease-star-btn" onClick={() => substar(movie)}>
          -
        </button>
      </div>

      {/* Favorite and Add to Cart Buttons (Stacked Vertically) */}
      <div className="button-container">
        <button className="fav-btn" onClick={() => favbtn(movie)}>
          {movie.fav ? "Unfavorite" : "Favorite"}
        </button>
        <button className="cart-btn" onClick={() => cartbtn(movie)}>
          {movie.cart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
