import React, { useEffect, useState } from "react";
import "./App.css";
import "h8k-components";

import { Movieform, Movieslist, Search } from "./components";

const title = "Favorite Movie Directory";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [search, setSearch] = useState("");

  const addMovie = (movie) => {
    let tempMovie = [...movieList];
    tempMovie.push(movie);
    setMovieList(tempMovie);
  };

  return (
    <div>
      <h8k-navbar header={title} />
      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          <Movieform addMovie={addMovie} />
        </div>
        <div className="layout-column w-30">
          <Search setSearch={setSearch} />
          {search.length >= 2 ? (
            movieList.filter((movie) => movie.name.startsWith(search)).length >
            0 ? (
              movieList
                .filter((movie) => movie.name.startsWith(search))
                .map((movie, index) => (
                  <Movieslist key={index} movieData={movie} />
                ))
            ) : (
              <div data-testid="noResult">
                <h3 className="text-center">No Results Found</h3>
              </div>
            )
          ) : (
            movieList.map((movie, index) => (
              <Movieslist key={index} movieData={movie} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
