import React, { useState } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import "./index.css";
import { movies as initialMovies } from "./moviesdata";

const App = () => {
  const [movies, setMovies] = useState(initialMovies); // Initialize movies state
  const [cartCount, setCartCount] = useState(0);       // Initialize cartCount state
  const [totalBill, setTotalBill] = useState(0);       // Initialize totalBill state

  const incStar = (movie) => {
    const updatedMovies = movies.map((m) =>
      m.id === movie.id && m.star < 5 ? { ...m, star: m.star + 0.5 } : m
    );
    setMovies(updatedMovies);
  };

  const decStar = (movie) => {
    const updatedMovies = movies.map((m) =>
      m.id === movie.id && m.star > 0 ? { ...m, star: m.star - 0.5 } : m
    );
    setMovies(updatedMovies);
  };

  const toggleFavorite = (movie) => {
    const updatedMovies = movies.map((m) =>
      m.id === movie.id ? { ...m, fav: !m.fav } : m
    );
    setMovies(updatedMovies);
  };

  const toggleCart = (movie) => {
    const updatedMovies = movies.map((m) => {
      if (m.id === movie.id) {
        const updatedCartState = !m.cart;
        setCartCount((prevCount) => prevCount + (updatedCartState ? 1 : -1));
        setTotalBill((prevTotal) => 
          updatedCartState ? prevTotal + movie.price : prevTotal - movie.price
        );
        return { ...m, cart: updatedCartState };
      }
      return m;
    });
    setMovies(updatedMovies);
  };

  return (
    <>
      <Navbar cartCount={cartCount} totalBill={totalBill} />
      <MovieList
        movies={movies}
        addstar={incStar}
        substar={decStar}
        favbtn={toggleFavorite}
        cartbtn={toggleCart}
      />
    </>
  );
};

export default App;
