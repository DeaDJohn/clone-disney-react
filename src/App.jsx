import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
//import { ReactComponent as Logo } from './assets/i-home-nav.svg'
import logoHome from './assets/i-home-nav.svg';
import logoMovies from './assets/i-movies-nav.svg';
import logoSeries from './assets/i-series-nav.svg';
import Home from './pages/Home';
import ListOfMovies from './pages/ListOfMovies/Index';
import SingleMovie from './pages/SingleMovies/Index';
import useMenuLink from './hooks/useMenuItem'
import SingleArtist from './pages/SingleArtist/Index';


function App() {


  return (
    <BrowserRouter>

    <div className="App">
        <header id="webAppHeader">
            <nav className='px-9'>
                <ul className="navbar flex">
                    <li>
                        {useMenuLink('/', logoHome, 'Inicio')}
                    </li>
                    <li>
                        {useMenuLink('/movies', logoMovies, 'PELÍCULAS')}
                    </li>
                    <li>
                        {useMenuLink('/series', logoSeries, 'Series')}
                    </li>
                </ul>
            </nav>
        </header>
      
        <Routes>
            {/* <Route path="/users">
                <Users />
            </Route> */}
            <Route path="/" element={<Home />} />
                <Route path="movies" element={<ListOfMovies />} />
                <Route path="movies/:id" element={<SingleMovie />}/>
                <Route path="artist/:id" element={<SingleArtist />}/>
        </Routes>
    </div>
    </BrowserRouter>
    


  )
}

export default App
