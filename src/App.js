import './App.css';

// react router dom
import { BrowserRouter, Routes, Route} from 'react-router-dom'

// components
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'

// pages
import Home from './Pages/Home/Home';
import ArtistasPages from './Pages/Artistas/ArtistasPages';
import MusicasPages from './Pages/Musicas/MusicasPages';
import ExArtistasPages from './Pages/Artistas/ExArtistasPages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar-lateral">
          < Navbar />
        </div>
            <div className="conteudo-app">
              <Routes>
                  < Route path='/' element={< Home />} />
                  < Route path='/artistas' element={< ArtistasPages />} />
                  < Route path='/musicas' element={< MusicasPages />} />
                  < Route path='/exartistas' element={< ExArtistasPages />} />
              </Routes>
            </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
