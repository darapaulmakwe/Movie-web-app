import React,{useState, useEffect} from 'react'
import Search from './components/Search'
import Spinner from './components/Spinner'
import MovieCard from './components/MovieCard'
import { useDebounce } from 'react-use'
import { getTrendingMovies, updateSearchCount } from './appwrite'

const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState('')
  const [movies, setMovies] = useState([]) //container for movie data
  const [trendingMovies,setTrendingMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  //Debounce search term to prevent making too many API requests
  // by waiting for the user to stop typing for half a second
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm])

  const fetchMovies = async (query = '') => {
    setIsLoading(true)
    setError('') // Reset error state before fetching

    try{
      //encodeURI component helps whatever the user passes into the search bar
      //  be readable to the API
      const endpoint = query 
      ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      :`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
      const response = await fetch(endpoint, API_OPTIONS)
      if (!response.ok) {
        throw new Error('Failed to fetch movies')
      }
      const data = await response.json()

      if(data.Respone === 'False') {
        setError(data.Error || 'Failed to fetch movies')
        setMovies([])
        return
      }
      setMovies(data.results || [])

      if(query && data.results.length > 0){
        await updateSearchCount(query, data.results[0])
      }
    }
    catch (error) {
      console.error('Error fetching movies:', error)
      setError('Failed to fetch movies. Please try again later :(')
    } finally {
      setIsLoading(false)
    }
  }

  const loadTrendingMovies = async() => {
    try{
      const movies = await getTrendingMovies()
      setTrendingMovies(movies)

    }
    catch(error){
      console.log(`Error fetching trending movies: ${error}`)

    }
  }

  useEffect(() => {
    fetchMovies(debouncedSearchTerm)
    
  }, [debouncedSearchTerm])

  useEffect(() =>{
    loadTrendingMovies()
  },[])

  return (
    <main>
      <div className="pattern"/>

      <div className="wrapper">
      <header>
        <img src="./hero.png" alt="Hero Banner" />
        <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </header>

      {trendingMovies.length > 0 && (
        <section className="trending">
          <h2>Trending Movies</h2>
          <ul>
            {trendingMovies.map((movie, index) => (
              <li key={movie.$id}>
                <p>{index + 1}</p>
                <img src={movie.poster_url} alt={movie.title} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="all-movies">
        <h2>All movies</h2>

        {isLoading ? (
          <Spinner />
        ): error ? (
          <p className="text-red-500">{error}</p>
        ): (
          <ul>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </ul>
        )}

      </section>

      </div>
    </main>
  )
}

export default App