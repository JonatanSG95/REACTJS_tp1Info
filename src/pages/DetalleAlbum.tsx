import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { musicService } from '../../MOCKS/music/service';

export const DetalleAlbum = () => {
  const { id } = useParams();
  const [cancion, setCancion] = useState(null);

  useEffect(() => {
    musicService.getAllSongs().then((songs) => {
      const encontrada = songs.find((s) => s.id === Number(id));
      setCancion(encontrada);
    });
  }, [id]);

  if (!cancion) return <p>Cargando álbum...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{cancion.album}</h1>
      <img src={cancion.cover} alt={cancion.album} style={{ width: '300px', borderRadius: '10px' }} />
      <p><strong>Título:</strong> {cancion.title}</p>
      <p><strong>Artista:</strong> {cancion.artist}</p>
      <p><strong>Año:</strong> {cancion.year}</p>
      <p><strong>Género:</strong> {cancion.genre?.join(', ')}</p>
      <p><strong>Duración:</strong> {cancion.duration} segundos</p>
      <p><strong>Rating:</strong> {cancion.rating}</p>
      <p><strong>Descripción:</strong> {cancion.description}</p>
    </div>
  );
};

