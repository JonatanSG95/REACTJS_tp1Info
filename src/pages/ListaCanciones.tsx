import { canciones } from '../InfoCanciones';
import CancionCard from '../components/CancionCard';
import type { Cancion } from '../InfoCanciones';

interface Props {
  toggleFavorito: (cancion: Cancion) => void;
}

const ListaCanciones = ({ toggleFavorito }: Props) => {
  return (
    <div className="text-white p-6">
      <h2 className="text-2xl font-bold mb-4">Todas las canciones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {canciones.map((cancion) => (
          <CancionCard
            key={cancion.id}
            cancion={cancion}
            toggleFavorito={toggleFavorito}
          />
        ))}
      </div>
    </div>
  );
};

export default ListaCanciones;
