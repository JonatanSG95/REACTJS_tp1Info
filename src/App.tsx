import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaCanciones from './pages/ListaCanciones';
import DetalleCancion from './pages/DetalleCancion';
import CancionesCategoria from './pages/CancionesCategoria';
import Favoritos from './pages/Favoritos';
import Portada from './pages/Portada';
import type { Cancion } from './InfoCanciones';






function App() {

  const [favoritos, setFavoritos] = useState<Cancion[]>([]);

    const toggleFavorito = (cancion: Cancion) => {
      const yaEsta = favoritos.find((f) => f.id === cancion.id);
      if (yaEsta) {
        setFavoritos(favoritos.filter((f) => f.id !== cancion.id));
      } else {
        setFavoritos([...favoritos, cancion]);
      }
    };

    const esFavorito = (cancion: Cancion) => {
      return favoritos.some((f) => f.id === cancion.id);
    };

    
  return (
    
        <><Router>
            <Routes>
              <Route path="/" element={<Portada />} />
              <Route path="/canciones" element={<ListaCanciones />} />
              <Route path="/cancion/:id" element={<DetalleCancion />} />
              <Route path="/category/:id" element={<CancionesCategoria toggleFavorito={toggleFavorito}/>} />
              <Route path="/favoritos" element={<Favoritos favoritos={favoritos} toggleFavorito={toggleFavorito} />}/>
            </Routes>
          </Router>
        </>
);

}

export default App;
