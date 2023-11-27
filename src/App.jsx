import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  async function getTrendingMovies() {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
      };

      const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
      const data = await response.json();

      setTrendingMovies(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div>
    {trendingMovies.map(movie => (
      <div key={movie.id}>
        <h2>{movie.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} title={movie.overview}/>
        <p>Release Date: {movie.release_date}</p>
        <p>Vote Average: {movie.vote_average}</p>
      </div>
    ))}
  </div>
  );
}

export default App;
