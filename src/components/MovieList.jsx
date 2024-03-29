import React, {useEffect, useState} from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'
import { Row } from 'reactstrap'

const  MovieList= () => {

    const [movies, setMovies] = useState([])

    
     

    useEffect(() => {

        axios.get("https://ghibliapi.vercel.app/films/")
        .then((response) => {
            setMovies(response.data)

        })
        .catch(error => {
            console.log(error)
        })

    }, [])


  return (
    <Row>
      <h1> here are movie list </h1>
       {movies.map(function(movie)  {
           return <MovieCard film={movie} />   
           
        })}  
     </Row>
  )
}

export default MovieList
