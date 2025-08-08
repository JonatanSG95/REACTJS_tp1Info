// src/types/Cancion.ts

export interface Cancion {
  id: number;
  title: string;
  artist: string;
  album: string;
  year: number;
  genre: string[];
  duration: number;
  rating: number;
  cover: string;
  description: string;
}
