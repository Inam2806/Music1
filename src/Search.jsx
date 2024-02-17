import React, { useState, useEffect } from "react";
import './styles/Home.scss';
import './styles/Search.scss';


const Search = ({audioSources, isPlaying, setIsPlaying, currentIndex, setCurrentIndex ,isInputVisible,setIsInputVisible,handlePlaybackToggle}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSongs, setFilteredSongs] = useState([]);




  useEffect(() => {
    // Handle search and update filtered songs
    const allSongs = [...audioSources];
    const filtered = allSongs.filter((song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSongs(filtered);
  }, [searchTerm, audioSources]);

  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible);
  };
return (
    <div className="container">
      <div className={`search-container ${isInputVisible ? 'search-container-open' : ''}`}>
        <button className="search-button" onClick={toggleInputVisibility}>
          <i className={`fa ${isInputVisible ? 'fa-times' : 'fa-search'}`}></i>
        </button>

        <div className="search" style={{ display: isInputVisible ? 'block' : 'none' }}>
          <div>
            <input
              className="search-bar"
              type='text'
              placeholder='Search songs...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
       
         {searchTerm ? ( filteredSongs.map((song, index) => (
            <div className="item" key={song.id}>
              <div className="info">
                <p>{index+1}</p>
                <img src={song.cover} alt={song.title} />
                <div className="details">
                  <h5>{song.title}</h5>
                  <p>{song.artist}</p>
                </div>
              </div>
              <div className="actions">
               
                <div className="icon">
                   
                  <div>
                    {currentIndex === index && isPlaying ? (
                      <i className="bx bx-pause" id="masterPlay" onClick={() => setIsPlaying(!isPlaying)}></i>
                    ) : (
                      <i className="bx bx-play" id="masterPlay" onClick={() => handlePlaybackToggle(index)}></i>
                    )}
                  </div>
                     
                </div>
              </div>
            </div>
          )))
          : audioSources.map((song, index) => (
            <div className="item" key={song.id}>
              <div className="info">
                <p>{index + 1}</p>
                <img src={song.cover} alt={song.title} />
                <div className="details">
                  <h5>{song.title}</h5>
                   <p>{song.artist}</p>
                </div>
              </div>
              <div className="actions">
              
                <div className="icon">
                   
                  <div>
                    {currentIndex === index && isPlaying ? (
                      <i className="bx bx-pause" id="masterPlay" onClick={() => setIsPlaying(!isPlaying)}></i>
                    ) : (
                      <i className="bx bx-play" id="masterPlay" onClick={() => handlePlaybackToggle(index)}></i>
                    )}
                  </div>
                    
                </div>
              </div>
            </div>
          ))}
          
      
      </div>
      </div>
      </div>
  );
};

export default Search;
