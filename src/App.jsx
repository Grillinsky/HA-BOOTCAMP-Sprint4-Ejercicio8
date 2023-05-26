import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const movieUrls = [
          "https://api.themoviedb.org/3/movie/315837?api_key=7ecebdcca2c829fe1a4ff9794da57479",
          "https://api.themoviedb.org/3/movie/667538?api_key=7ecebdcca2c829fe1a4ff9794da57479",
          "https://api.themoviedb.org/3/movie/152601?api_key=7ecebdcca2c829fe1a4ff9794da57479",
        ];

        const requests = movieUrls.map((url) =>
          axios.get(url, {
            headers: {
              accept: "application/json",
              Authorization: "Bearer 7ecebdcca2c829fe1a4ff9794da57479",
            },
          })
        );

        const responses = await Promise.all(requests);
        const moviesData = responses.map((response) => response.data);
        setMovies(moviesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMoviesData();
  }, []);

  return (
    <div className="flex">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
    // <div className="App">
    //   {movies.map((movie) => (
    //     <div key={movie.id}>
    //       <dd>{movie.title}</dd>
    //     </div>
    //   ))}
    // </div>
  );
}

export default App;

//https://api.themoviedb.org/3/movie/667538?api_key=7ecebdcca2c829fe1a4ff9794da57479
