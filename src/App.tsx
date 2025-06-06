import React from 'react';
import { ledZeppelin, acdc, queen, pinkFloyd } from './InfoDiscos';

type Album = {
  id: number;
  title: string;
  year: number;
  cover: string;
};

interface ListaDiscosProps {
  titulo: string;
  albums: Album[];
}

const ListaDiscos = ({ titulo, albums }: ListaDiscosProps) => (
  <div className="bg-neutral-800 p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-semibold mb-4 text-white text-center">{titulo}</h2>
    
    <div className="flex flex-wrap justify-center gap-6">
      {albums.map((album) => (
        <div
          key={album.id}
          className="bg-neutral-900 p-3 rounded-lg shadow flex flex-col items-center text-white w-40 cursor-pointer hover:scale-105 transition-transform"
        >
          <img
            src={album.cover}
            alt={album.titulo}
            className="w-full h-40 object-cover rounded mb-2"
          />
          <p className="text-center font-medium text-sm">{album.titulo}</p>
          <p className="text-xs text-neutral-400">{album.anio}</p>
</div>
      ))}
    </div>
  </div>
);

function App() {
  
  return (

      <div className="p-6 text-white bg-neutral-900 min-h-screen">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-white">Playlist recomendadas</h1>
          <input
            type="text"
            placeholder="Buscar álbum..."
            className="px-3 py-1 rounded bg-neutral-800 text-white placeholder-neutral-400 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ListaDiscos titulo="Led Zeppelin" albums={ledZeppelin} />
          <ListaDiscos titulo="AC/DC" albums={acdc} />
          <ListaDiscos titulo="Queen" albums={queen} />
          <ListaDiscos titulo="Pink Floyd" albums={pinkFloyd} />
        </div>
      </div>
);

}

export default App;
