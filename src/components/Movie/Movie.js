import React from "react";
import "./Movie.css";

const Movie = (props) => {
  return (
    <div className="movie">
      <div className="movieWrapper">
        <img src={props.img} alt="Not found!" />
        <p className="title">{props.title}</p>
        <p className="year"> Year : {props.year} </p>
      </div>
    </div>
  );
};

export default Movie;
