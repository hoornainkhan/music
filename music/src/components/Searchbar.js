import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import MusicPlayer from './MusicPlayer';
import '../App.css'

function Searchbar() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate= useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      if (query.trim() === '') {
        return;
      }

      const options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: { q: query },
        headers: {
          'x-rapidapi-key': '29af220705msh57b940404616909p18a18djsnbd865c9797a2',
          'X-RapidApi-Host': 'deezerdevs-deezer.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setSearchResults(response.data.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const handleCardClick = (trackId) => {
    
    navigate(`/track/${trackId}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for tracks..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
      <div className="container">
        {searchResults.map((track) => (
          <div
            key={track.id}
            className="box"
            onClick={() => handleCardClick(track.id)}
          >
          <Card key={track.id} track={track} />
          </div>
        ))}
      </div>
    </div>
  );
}

const Card = ({ track }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="box" onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <img src={track.album.cover_medium} alt={track.title} className="pic" />
      <div className="inf">
        <h3>{track.title}</h3>
        <p className="artist">Artist: {track.artist.name}</p>
        <p className="album">Album: {track.album.title}</p>
        {isHovered && (<div className="play-button">
          <button>
            <FontAwesomeIcon icon={faPlay} /> 
          </button>
        </div>)}
      </div>
    </div>
  );
};

export default Searchbar;
