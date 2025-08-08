// Mock music database
let musicDB = [
  {
    id: 1,
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    album: 'A Night at the Opera',
    year: 1975,
    genre: ['Rock', 'Progressive Rock'],
    duration: 355,
    rating: 9.5,
    cover:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    description:
      'A groundbreaking rock opera that combines multiple musical styles and tells a dramatic story through its innovative structure.',
  },
  {
    id: 2,
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    album: 'Thriller',
    year: 1982,
    genre: ['Pop', 'R&B'],
    duration: 294,
    rating: 9.2,
    cover:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    description:
      "One of the most iconic pop songs of all time, featuring Jackson's signature vocals and an unforgettable bassline.",
  },
  {
    id: 3,
    title: 'Hotel California',
    artist: 'Eagles',
    album: 'Hotel California',
    year: 1976,
    genre: ['Rock', 'Soft Rock'],
    duration: 391,
    rating: 9.0,
    cover:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    description:
      'A mysterious and haunting song about excess and the American dream, featuring one of the greatest guitar solos in rock history.',
  },
  {
    id: 4,
    title: 'Imagine',
    artist: 'John Lennon',
    album: 'Imagine',
    year: 1971,
    genre: ['Rock', 'Pop'],
    duration: 183,
    rating: 8.9,
    cover:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    description:
      'A powerful anthem for peace and unity, with simple yet profound lyrics that continue to inspire generations.',
  },
  {
    id: 5,
    title: 'Like a Rolling Stone',
    artist: 'Bob Dylan',
    album: 'Highway 61 Revisited',
    year: 1965,
    genre: ['Folk Rock', 'Rock'],
    duration: 369,
    rating: 8.8,
    cover:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    description:
      'A revolutionary song that changed the landscape of popular music, blending folk and rock with poetic, surreal lyrics.',
  },
  {
    id: 6,
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    album: 'Nevermind',
    year: 1991,
    genre: ['Grunge', 'Alternative Rock'],
    duration: 301,
    rating: 8.7,
    cover:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    description:
      'The anthem that defined a generation and brought grunge music to the mainstream, featuring raw energy and rebellious spirit.',
  },
  {
    id: 7,
    title: "What's Going On",
    artist: 'Marvin Gaye',
    album: "What's Going On",
    year: 1971,
    genre: ['Soul', 'R&B'],
    duration: 233,
    rating: 9.1,
    cover:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    description:
      'A socially conscious masterpiece that addresses war, poverty, and environmental issues with beautiful melodies and heartfelt vocals.',
  },
  {
    id: 8,
    title: 'Purple Haze',
    artist: 'Jimi Hendrix',
    album: 'Are You Experienced',
    year: 1967,
    genre: ['Psychedelic Rock', 'Hard Rock'],
    duration: 167,
    rating: 8.6,
    cover:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    description:
      "A psychedelic rock classic showcasing Hendrix's innovative guitar work and establishing him as a guitar legend.",
  },
];

// Get next available ID
export const getNextId = () => {
  return Math.max(...musicDB.map((song) => song.id)) + 1;
};

export { musicDB };
