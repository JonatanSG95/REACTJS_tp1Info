import { useEffect, useState } from "react";
import { musicService } from "../../MOCKS/music/service";
import CancionCard from "../components/CancionCard";
import { Link } from "react-router-dom";
import type { Song } from "../../MOCKS/music/music";

export default function ListaCanciones() {
  const [canciones, setCanciones] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const data = await musicService.getAllSongs();
        setCanciones(data);
      } catch (err) {
        setError("Error al cargar las canciones.");
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  if (loading) {
    return (
    <div className="p-8 flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-lg text-blue-600">Cargando canciones...</p>
    </div>
  );
  }

  if (error) {
    return <div className="p-4 text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todas las canciones</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {canciones.map((cancion: Song) => (
          <div key={cancion.id}>
            <CancionCard cancion={cancion} />
            <Link
              to={`/album/${cancion.id}`}
              className="text-blue-600 hover:underline block mt-2"
            >
              Ver detalles del álbum
            </Link>
          </div>
        ))}
        
      </div>
    </div>
  );
}
