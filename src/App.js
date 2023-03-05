import "./App.css";
import Header from "./components/Header/Header";
import Movie from "./components/Movie/Movie";
import movies from "./movie..json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {movies.map((element,i) => {
          return (
            <Movie
            key={i}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
