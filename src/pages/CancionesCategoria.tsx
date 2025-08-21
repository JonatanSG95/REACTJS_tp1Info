import { useParams } from 'react-router-dom';
import { canciones } from '../InfoCanciones';
import { ledZeppelin, acdc, queen, pinkFloyd } from '../InfoDiscos';
import CancionCard from '../components/CancionCard';
import type { Cancion } from '../InfoCanciones';

interface CancionesCategoriaProps {
  toggleFavorito: (cancion: Cancion) => void;
}

const CancionesCategoria = ({ toggleFavorito }: CancionesCategoriaProps) => {
  const { id } = useParams(); // nombre de la banda
  const bandaSeleccionada = decodeURIComponent(id || '');

  // Juntar todos los discos
  const todosLosDiscos = [...ledZeppelin, ...acdc, ...queen, ...pinkFloyd];

  // Filtrar canciones por banda
  const cancionesFiltradas = canciones.filter(
    (c) => c.artist.toLowerCase() === bandaSeleccionada.toLowerCase()
  );

  // Enlazar cada canción con su portada de disco
  const cancionesConPortada = cancionesFiltradas.map((cancion) => {
    const disco = todosLosDiscos.find((d) => d.title === cancion.album);
    return {
      ...cancion,
      portada: disco?.cover || '',
    };
  });


  return (
    <div className="text-white p-6">
      <h2 className="text-2xl font-bold mb-4">Canciones de {bandaSeleccionada}</h2>

      {cancionesConPortada.length === 0 ? (
        <p>No se encontraron canciones.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cancionesConPortada.map((cancion) => (
            <CancionCard
              key={cancion.id}
              cancion={cancion}
              toggleFavorito={toggleFavorito} esFavorito={false}            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CancionesCategoria;
