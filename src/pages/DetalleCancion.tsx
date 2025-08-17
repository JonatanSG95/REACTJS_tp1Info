import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { musicService } from '../../MOCKS/music/service';
import type { Cancion } from '../types/Cancion';
import CancionCard from '../components/CancionCard';

const DetalleCancion = () => {
  const { id } = useParams();
  const [cancion, setCancion] = useState<Cancion | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCancion = async () => {
      try {
        const song = await musicService.getSongById(id || '');
        setCancion(song);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCancion();
  }, [id]);

  if (loading) {
    return <p className="text-white p-6">Cargando canción...</p>;
  }

  if (!cancion) {
    return <p className="text-white p-6">Canción no encontrada.</p>;
  }

  return (
    <div className="text-white p-6">
      <h2 className="text-2xl font-bold mb-4">Detalle de la canción</h2>
      <CancionCard cancion={cancion} />
    </div>
  );
};

export default DetalleCancion;
