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
    
    <div className="flex gap-10 overflow-x-auto px-3 scrollbar-hide">
      {albums.map((album) => (
        <div
          key={album.id}
          className="min-w-[160px] bg-neutral-900 p-3 rounded-lg shadow flex flex-col items-center text-white w-50 cursor-pointer hover:scale-105 transition-transform"
          style={{aspectRatio: '1/1'}}
        >
          <img
            src={album.cover}
            alt={album.titulo}
            className="w-full h-full object-cover rounded mb-2"
          />
          <p className="text-center font-medium text-sm">{album.titulo}</p>
          <p className="text-xs text-neutral-400">{album.anio}</p>
</div>
      ))}
    </div>
  </div>
);

export default ListaDiscos;