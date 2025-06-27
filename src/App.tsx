import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { ledZeppelin, acdc, queen, pinkFloyd } from './InfoDiscos';
import ListaDiscos from './ListaDiscos';
import Reproductor from './Reproductor';
import { canciones } from './InfoCanciones';
import type { Cancion } from './InfoCanciones';


function App() {

  const [busqueda, setBusqueda] = useState('');
  const [cancionActual, setCancionActual] = useState<Cancion | null>(null);

  const cancionesFiltradas = canciones.filter((cancion) =>
    cancion.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );
  
  return (

      <div className="p-6 text-white bg-neutral-900 min-h-screen">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-white">Playlist recomendadas</h1>
          <div className="relative w-80">
              <input
                type="text"
                placeholder="Buscar que escuchar"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full px-4 py-2 rounded bg-neutral-800 text-white placeholder-neutral-400 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {busqueda && cancionesFiltradas.length > 0 && (
                <ul className="absolute z-50 mt-1 w-full bg-neutral-900 border border-neutral-700 rounded shadow-lg max-h-60 overflow-y-auto">
                  {cancionesFiltradas.slice(0, 6).map((cancion) => (
                    <li
                      key={cancion.id}
                      className="px-4 py-2 hover:bg-neutral-800 cursor-pointer text-white text-sm"
                      onClick={() => {
                        setCancionActual(cancion);
                        setBusqueda('');
                      }}
                    >
                      <strong>{cancion.titulo}</strong> — {cancion.banda} ({cancion.album})
                    </li>
                  ))}
                </ul>
              )}
            </div>
        </div>

    

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ListaDiscos titulo="Led Zeppelin" albums={ledZeppelin} />
          <ListaDiscos titulo="AC/DC" albums={acdc} />
          <ListaDiscos titulo="Queen" albums={queen} />
          <ListaDiscos titulo="Pink Floyd" albums={pinkFloyd} />
        </div>

        


        <Reproductor cancion={cancionActual} />

      </div>
);

}

export default App;
