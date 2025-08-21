export type Album = {
  id: number;
  title: string;
  year: number;
  cover: string;
};

export const ledZeppelin: Album[] = [
  { id: 1, title: 'Led Zeppelin IV', year: 1971, cover: '/img/albums/ledzeppelin4.jpg' },
  { id: 2, title: 'Physical Graffiti', year: 1975, cover: '/img/albums/physicalgraffiti.jpg' },
  { id: 3, title: 'Houses of the Holy', year: 1973, cover: '/img/albums/housesoftheholy.jpg' },
  { id: 4, title: 'Led Zeppelin II', year: 1969, cover: '/img/albums/ledzeppelin2.jpg' },
  { id: 5, title: 'In Through the Out Door', year: 1979, cover: '/img/albums/inthroughtheoutdoor.jpg' },
];

export const acdc: Album[] = [
  { id: 1, title: 'Back in Black', year: 1980, cover: '/img/albums/backinblack.jpg' },
  { id: 2, title: 'Highway to Hell', year: 1979, cover: '/img/albums/highwaytohell.jpg' },
  { id: 3, title: 'Powerage', year: 1978, cover: '/img/albums/powerage.jpg' },
  { id: 4, title: 'The Razors Edge', year: 1990, cover: '/img/albums/razorsedge.jpg' },
  { id: 5, title: 'Dirty Deeds Done Dirt Cheap', year: 1976, cover: '/img/albums/dirtydeeds.jpg' },
];

export const queen: Album[] = [
  { id: 1, title: 'A Night at the Opera', year: 1975, cover: '/img/albums/anightattheopera.jpg' },
  { id: 2, title: 'News of the World', year: 1977, cover: '/img/albums/newsoftheworld.jpg' },
  { id: 3, title: 'The Game', year: 1980, cover: '/img/albums/thegame.jpg' },
  { id: 4, title: 'Queen II', year: 1974, cover: '/img/albums/queen2.jpg' },
  { id: 5, title: 'Jazz', year: 1978, cover: '/img/albums/jazz.jpg' },
];

export const pinkFloyd: Album[] = [
  { id: 1, title: 'The Dark Side of the Moon', year: 1973, cover: '/img/albums/darksideofthemoon.jpg' },
  { id: 2, title: 'Wish You Were Here', year: 1975, cover: '/img/albums/wishyouwerehere.jpg' },
  { id: 3, title: 'The Wall', year: 1979, cover: '/img/albums/thewall.jpg' },
  { id: 4, title: 'Animals', year: 1977, cover: '/img/albums/animals.jpg' },
  { id: 5, title: 'Meddle', year: 1971, cover: '/img/albums/meddle.jpg' },
];
