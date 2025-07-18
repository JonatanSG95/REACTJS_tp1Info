import { Heart, HeartOff } from 'lucide-react';
import type { Cancion } from '../InfoCanciones';
import { Link } from 'react-router-dom';

interface Props {
  cancion: Cancion;
  esFavorito: boolean;
  toggleFavorito: (cancion: Cancion) => void;
}

const CancionCard = ({ cancion, esFavorito, toggleFavorito }: Props) => {
  return (
    <Link to={`/cancion/${cancion.id}`}>
    <div className="bg-zinc-800 p-4 rounded-xl shadow-md flex items-center justify-between">
      
      <div>
        <h3 className="text-lg font-bold">{cancion.titulo}</h3>
        <p className="text-sm text-zinc-400">{cancion.album}</p>
      </div>
      <button
        onClick={() => toggleFavorito(cancion)}
        className="text-pink-400 hover:text-pink-300"
      >
        {esFavorito ? <HeartOff /> : <Heart />}
      </button>
    </div>
    </Link>
  );
};

export default CancionCard;
