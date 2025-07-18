import { useParams } from 'react-router-dom';
import { canciones } from '../InfoCanciones';
import CancionCard from '../components/CancionCard';
import type { Cancion } from '../InfoCanciones';

interface Props {
  toggleFavorito: (cancion: Cancion) => void;
}

const DetalleCancion = ({ toggleFavorito }: Props) => {
  const { id } = useParams();
  const cancionId = parseInt(id || '', 10);
  const cancion = canciones.find((c) => c.id === cancionId);

  if (!cancion) {
    return <p className="text-white p-6">Canción no encontrada.</p>;
  }

  return (
    <div className="text-white p-6">
      <h2 className="text-2xl font-bold mb-4">Detalle de la canción</h2>
      <CancionCard cancion={cancion} toggleFavorito={toggleFavorito} />
    </div>
  );
};

export default DetalleCancion;
