
import './App.css';

// Counter Application
/*
import {useState} from 'react'
const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h2>State Components</h2>      
      <button onClick={()=>setCounter((prevCount)=> prevCount - 1) }> - </button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter((prevCount)=> prevCount + 1) }>+</button>


    </div>
  );
}
 movie api key : de2081e0
*/
import MovieCard from './MovieCard.js';
import SearchIcon from './search.svg'
import {useEffect , useState} from 'react'
const  API_URL = 'http://www.omdbapi.com?apikey=de2081e0'
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  return (
    <div className="app">
      <h1>Movies Search</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;