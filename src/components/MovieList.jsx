import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

const  MovieList= () => {

    const [movies, setMovies] = useState([])

     

    useEffect(() => {

        axios.get('https://api.themoviedb.org/3/movie/550?api_key=14d3b4a12d28d5a2b303a64e680e6cda')
        .then(response => {
            setMovies(response.data)

        })
        .catch(error => {
            setErrorMessage(error.message)
        })

    }, [])


  return (
    <div>
      <h1> here are movie list </h1>
      { movies.map(function(movie)  {
           return <MovieCard film={movie} />   
           
        })}
     </div>
  )
}

export default MovieList
