import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Movie from "./components/Movie/Movie";
import movies from "./movie.json";

function App() {
  const [searchMoviesArray, setSearchMoviesArray] = useState(movies);
  const handleSearch = (val) => {
    console.log(val);
    val !== ""
      ? setSearchMoviesArray(
          movies.filter((movie) => {
            return movie.Title.toLowerCase().includes(val.toLowerCase());
          })
        )
      : setSearchMoviesArray(movies);
  };
  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <div className="main">
        {searchMoviesArray.length > 0 ? (
          searchMoviesArray.map((element, i) => {
            return (
              <Movie
                key={i}
                title={element.Title}
                year={element.Year}
                img={element.Poster}
              />
            );
          })
        ) : (
          <h1>No movie found!</h1>
        )}
      </div>
    </div>
  );
}

export default App;
