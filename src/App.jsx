import { useEffect, useState } from 'react'

import Card from './Components/Card/Card'
import Navbar from "./Components/Navbar/Navbar"
import Footer from './Components/Footer/Footer';
import "./App.css"



export default function App() {

  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState("");
  const api_url = `${import.meta.env.VITE_MY_API}`;

  const search = async (title) => {
    const call = await fetch(`${api_url}&s=${title}`);
    const result = await call.json();
    setMovies(result.Search);
  }

  useEffect(() => {
    search("Thor")
  }, [])

  return (
    <>
      
      <Navbar searchMovies={searchMovies} setSearchMovies={setSearchMovies} search={search} />
      <main className="main min-vh-100 d-flex justify-content-center align-item-center">
        
        {
          movies?.length > 0
            ?
            (
              <div className="container">
                <div className="row d-flex justify-content-center">
                  {movies.map((movie, key) =>
                    <Card movie={movie} key={key} />
                  )}
                </div>
              </div>
            ) :
            <div className='fs-1 text-light'>Movie not found</div>
        }
      </main>
      <Footer />
    </>
  )
}


