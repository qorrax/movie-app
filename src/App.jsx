import { useState, useEffect} from 'react'

import './App.css'
import { Container } from 'reactstrap'
import MovieList from './components/MovieList'

function App() {
  
   
  return (

    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

      <Container>
    
    <MovieList />

    </Container>
   

    </>
  )
}

export default App
