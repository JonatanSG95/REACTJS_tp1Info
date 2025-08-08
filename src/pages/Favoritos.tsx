import CancionCard from '../components/CancionCard';
import type { Cancion } from '../InfoCanciones';

interface FavoritosProps {
  favoritos: Cancion[];
  toggleFavorito: (cancion: Cancion) => void;
}

const Favoritos = ({ favoritos, toggleFavorito }: FavoritosProps) => {
  return (
    <div className="text-white p-6">
      <h2 className="text-2xl font-bold mb-4">Canciones Favoritas</h2>

      {favoritos.length === 0 ? (
        <p>No tenés canciones favoritas todavía.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {favoritos.map((cancion) => (
            <CancionCard
              key={cancion.id}
              cancion={cancion}
              toggleFavorito={toggleFavorito}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;
