// src/api/db.ts

export const musicDB = [
  {
    id: 1,
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    album: 'A Night at the Opera',
    year: 1975,
    genre: ['Rock', 'Progressive Rock'],
    duration: 355,
    rating: 9.5,
    cover: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A groundbreaking rock opera that combines multiple musical styles and tells a dramatic story through its innovative structure.',
  },
  
];

export const getNextId = () => {
  return Math.max(...musicDB.map((song) => song.id)) + 1;
};
