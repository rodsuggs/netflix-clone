import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "./Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movies);

  return (
    <div className="titleMovies">
      <div>
        <h1>Play Now</h1>
        <img
          className="titleMovie"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        ></img>
      </div>
    </div>
  );
};

export default Main;
