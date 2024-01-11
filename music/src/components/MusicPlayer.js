import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MusicPlayer = () => {
  const { id } = useParams(); // Assuming you're using the 'id' parameter in your route
  const [track, setTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch the track data based on the 'id' parameter
      // Adjust the API request accordingly
      const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/track/${id}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '29af220705msh57b940404616909p18a18djsnbd865c9797a2',
          'X-RapidApi-Host': 'deezerdevs-deezer.p.rapidapi.com',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTrack(data);
      } else {
        console.error('Failed to fetch track data');
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (!track || !track.preview) {
      return;
    }

    const audioElement = new Audio(track.preview);

    if (isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }

    return () => {
      audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, [isPlaying, track]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (!track || !track.preview) {
    return <div>No preview available for this track.</div>;
  }

  return (
    <div className='mujic'>
      <h2>Now Playing</h2>
      <p>{track.title}</p>
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default MusicPlayer;
