import { Heart, HeartOff } from 'lucide-react';
import type { Cancion } from '../InfoCanciones';
import { Link } from 'react-router-dom';

interface Props {
  cancion: Cancion;
  esFavorito?: boolean;
  toggleFavorito?: (cancion: Cancion) => void;
}

const CancionCard = ({ cancion, esFavorito }: Props) => {
  return (
    <Link to={`/cancion/${cancion.id}`}>
    <div className="bg-zinc-800 p-4 rounded-xl shadow-md flex items-center justify-between">
      
      <div>
        <h3 className="text-lg font-bold">{cancion.title}</h3>
        <p className="text-sm text-zinc-400">{cancion.album}</p>
      </div>
      <button
        className="text-pink-400 hover:text-pink-300"
      >
        {esFavorito ? <HeartOff /> : <Heart />}
      </button>
    </div>
    </Link>
  );
};

export default CancionCard;
