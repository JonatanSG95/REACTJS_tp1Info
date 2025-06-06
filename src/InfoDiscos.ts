export type Album = {
  id: number;
  titulo: string;
  anio: number;
  cover: string;
};

export const ledZeppelin: Album[] = [
  { id: 1, titulo: 'Led Zeppelin IV', anio: 1971, cover: '/img/albums/ledzeppelin4.jpg' },
  { id: 2, titulo: 'Physical Graffiti', anio: 1975, cover: '/img/albums/physicalgraffiti.jpg' },
  { id: 3, titulo: 'Houses of the Holy', anio: 1973, cover: '/img/albums/housesoftheholy.jpg' },
  { id: 4, titulo: 'Led Zeppelin II', anio: 1969, cover: '/img/albums/ledzeppelin2.jpg' },
  { id: 5, titulo: 'In Through the Out Door', anio: 1979, cover: '/img/albums/inthroughtheoutdoor.jpg' },
];

export const acdc: Album[] = [
  { id: 1, titulo: 'Back in Black', anio: 1980, cover: '/img/albums/backinblack.jpg' },
  { id: 2, titulo: 'Highway to Hell', anio: 1979, cover: '/img/albums/highwaytohell.jpg' },
  { id: 3, titulo: 'Powerage', anio: 1978, cover: '/img/albums/powerage.jpg' },
  { id: 4, titulo: 'The Razors Edge', anio: 1990, cover: '/img/albums/razorsedge.jpg' },
  { id: 5, titulo: 'Dirty Deeds Done Dirt Cheap', anio: 1976, cover: '/img/albums/dirtydeeds.jpg' },
];

export const queen: Album[] = [
  { id: 1, titulo: 'A Night at the Opera', anio: 1975, cover: '/img/albums/anightattheopera.jpg' },
  { id: 2, titulo: 'News of the World', anio: 1977, cover: '/img/albums/newsoftheworld.jpg' },
  { id: 3, titulo: 'The Game', anio: 1980, cover: '/img/albums/thegame.jpg' },
  { id: 4, titulo: 'Queen II', anio: 1974, cover: '/img/albums/queen2.jpg' },
  { id: 5, titulo: 'Jazz', anio: 1978, cover: '/img/albums/jazz.jpg' },
];

export const pinkFloyd: Album[] = [
  { id: 1, titulo: 'The Dark Side of the Moon', anio: 1973, cover: '/img/albums/darksideofthemoon.jpg' },
  { id: 2, titulo: 'Wish You Were Here', anio: 1975, cover: '/img/albums/wishyouwerehere.jpg' },
  { id: 3, titulo: 'The Wall', anio: 1979, cover: '/img/albums/thewall.jpg' },
  { id: 4, titulo: 'Animals', anio: 1977, cover: '/img/albums/animals.jpg' },
  { id: 5, titulo: 'Meddle', anio: 1971, cover: '/img/albums/meddle.jpg' },
];
