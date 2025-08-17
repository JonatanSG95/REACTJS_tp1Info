// src/api/musicService.ts
import { musicDB, getNextId } from './db';

const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

export const musicService = {
  async getAllSongs() {
    await delay(300);
    const stored = localStorage.getItem('musicDB');
    return stored ? JSON.parse(stored) : [...musicDB];
  },

  async getSongById(id: number | string) {
    await delay(200);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : musicDB;
    const song = songs.find((s: any) => s.id === parseInt(id.toString()));
    if (!song) throw new Error('Song not found');
    return song;
  },

  async getSongsByGenre(genre: string) {
    await delay(200);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : musicDB;
    return songs.filter((song: any) =>
      song.genre.some((g: string) => g.toLowerCase() === genre.toLowerCase())
    );
  },

  async getSongsByArtist(artist: string) {
    await delay(200);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : musicDB;
    return songs.filter((song: any) =>
      song.artist.toLowerCase().includes(artist.toLowerCase())
    );
  },

  async getGenres() {
    await delay(200);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : musicDB;

    const genreMap: Record<string, any[]> = {};
    songs.forEach((song: any) => {
      song.genre.forEach((genre: string) => {
        if (!genreMap[genre]) genreMap[genre] = [];
        genreMap[genre].push(song);
      });
    });

    return Object.entries(genreMap)
      .map(([genre, songs]) => ({ genre, songs }))
      .sort((a, b) => a.genre.localeCompare(b.genre));
  },

  async createSong(songData: any) {
    await delay(400);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : [...musicDB];

    const newSong = {
      ...songData,
      id: getNextId(),
      cover:
        songData.cover ||
        'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    };

    songs.push(newSong);
    localStorage.setItem('musicDB', JSON.stringify(songs));
    return newSong;
  },

  async updateSong(id: number | string, songData: any) {
    await delay(400);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : [...musicDB];

    const index = songs.findIndex((s: any) => s.id === parseInt(id.toString()));
    if (index === -1) throw new Error('Song not found');

    songs[index] = { ...songs[index], ...songData };
    localStorage.setItem('musicDB', JSON.stringify(songs));
    return songs[index];
  },

  async deleteSong(id: number | string) {
    await delay(300);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : [...musicDB];

    const index = songs.findIndex((s: any) => s.id === parseInt(id.toString()));
    if (index === -1) throw new Error('Song not found');

    songs.splice(index, 1);
    localStorage.setItem('musicDB', JSON.stringify(songs));
    return { success: true };
  },

  async searchSongs(query: string) {
    await delay(200);
    const stored = localStorage.getItem('musicDB');
    const songs = stored ? JSON.parse(stored) : musicDB;

    if (!query) return songs;

    return songs.filter((song: any) =>
      song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase()) ||
      song.album.toLowerCase().includes(query.toLowerCase()) ||
      song.genre.some((g: string) =>
        g.toLowerCase().includes(query.toLowerCase())
      )
    );
  },
};
