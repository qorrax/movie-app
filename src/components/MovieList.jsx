import React, {useState, useEffect} from 'react'
import axios from 'axios'

const  MovieList= () => {

    const [movies, setMovies] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {

        axios.get('https://api.themoviedb.org/3/movie/550?api_key=14d3b4a12d28d5a2b303a64e680e6cda')
        .then(response => {
            // setMovies(response.data)

            console.log(response.data)
        })
        .catch(error => {
            setErrorMessage(error.message)
        })

    }, [])


  return (
    <div>
      <h1> here are movie list </h1>
    </div>
  )
}

export default MovieList
