import React from "react"
const MovieCard = (props) => {
  const movie= {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.comimages/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
  }
    return(
        <div className="movie">
          <div>
            <p>{props.movie.Year}</p>
          </div>
          <div>
            <img 
            src={props.movie.Poster} 
            alt="movie1-Poster" 
            />
          </div>
          <div>
            <span>{props.movie.Type}</span>
            <h3>{props.movie.Title}</h3>
          </div>
        </div>
    )
}
export default MovieCard;