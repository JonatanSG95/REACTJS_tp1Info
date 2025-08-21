import React, {useState, useEffect} from 'react';
import type { Cancion } from './InfoCanciones';

interface ReproductorProps {
  cancion?: Cancion;
}

const DURACION = 300; // 5 minutos

const Reproductor: React.FC<ReproductorProps> = ({ cancion }) => {
  const [reproduciendo, setReproduciendo] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let intervalo: number | null = null;

    if (reproduciendo && cancion) {
      intervalo = setInterval(() => {
        setCurrentTime((prev) => (prev < DURACION ? prev + 1 : prev));
      }, 1000);
    }

    return () => {
      if (intervalo) clearInterval(intervalo);
    };
  }, [reproduciendo, cancion]);

  // Resetear si cambia la canción
  useEffect(() => {
    setCurrentTime(0);
    setReproduciendo(!!cancion);
  }, [cancion]);

  const handleBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const nuevoTiempo = Math.floor((clickX / rect.width) * DURACION);
    setCurrentTime(nuevoTiempo);
  };

  const porcentaje = (currentTime / DURACION) * 100;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-neutral-800 text-white p-2 shadow-lg z-50">
      {cancion ? (
        <>
          <p className="text-center font-semibold mb-1">
             {cancion.title} - {cancion.artist}
          </p>
          <p className="text-center mb-1">
             {cancion.album}
          </p>

          <div
            className="w-full h-1 bg-neutral-700 rounded cursor-pointer"
            onClick={handleBarClick}
          >
            <div
              className="h-1 bg-red-500 rounded transition-all"
              style={{ width: `${porcentaje}%` }}
            ></div>
          </div>

          <div className="flex justify-center gap-3 text-2x1 mt-2">
            <button className="text-2xl hover:text-purple-400">⏮️</button>
            <button onClick={() => setReproduciendo(false)}>⏸️</button>
            <button onClick={() => setReproduciendo(true)}>▶️</button>
            <button className="text-2xl hover:text-purple-400">⏭️</button>
          </div>

          <p className="text-center text-sm text-neutral-400 mt-1">
            {Math.floor(currentTime / 60)}:
            {(currentTime % 60).toString().padStart(2, '0')} / 5:00
          </p>
        </>
      ) : (
        <p className="text-center text-neutral-400">No hay ninguna canción seleccionada</p>
      )}
    </div>
  );
};

export default Reproductor;