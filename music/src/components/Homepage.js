// src/components/HomePage.js

import React from 'react';

const tracksData = [
  { id: 1, title: 'Track 1', artist: 'Artist 1', genre: 'Pop' },
  { id: 2, title: 'Track 2', artist: 'Artist 2', genre: 'Rock' },
  // Add more tracks as needed
];

const genresData = ['Pop', 'Rock', 'Hip Hop', 'Electronic', 'Classical'];

const recommendedTracks = [
  { id: 3, title: 'Recommended Track 1', artist: 'Recommended Artist 1', genre: 'Hip Hop' },
  { id: 4, title: 'Recommended Track 2', artist: 'Recommended Artist 2', genre: 'Electronic' },
  // Add more recommended tracks as needed
];

const HomePage = () => {
  return (
    <div>
      <h1>Popular Music Tracks</h1>
      <div>
        <h2>Tracks</h2>
        <ul>
          {tracksData.map((track) => (
            <li key={track.id}>
              {track.title} - {track.artist}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Genres</h2>
        <ul>
          {genresData.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Recommended Tracks</h2>
        <ul>
          {recommendedTracks.map((track) => (
            <li key={track.id}>
              {track.title} - {track.artist}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
