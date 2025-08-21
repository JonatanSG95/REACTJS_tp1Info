
export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  year: number;
  genre: string[];
  duration: number;  // en segundos
  rating: number;    // puntaje 0–10
  cover: string;     // URL de la portada
  description: string;
}

export const musicDB: Song[];