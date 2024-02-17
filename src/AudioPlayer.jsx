import React, { useState, useRef, useEffect } from 'react';
import './styles/player.scss';

const AudioPlayer = ({ audioSources, currentIndex, isPlaying, onTogglePlayback }) => {

  const [currentTrackIndex, setCurrentTrackIndex] = useState(currentIndex);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    setCurrentTrackIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    audioRef.current.src = audioSources[currentTrackIndex].src;
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentTrackIndex, isPlaying, audioSources]);




  const playPauseHandler = () => {
    onTogglePlayback();
  };


  return (
    <div>
      {isPlaying ? (
        <i className="bx bx-pause" id="masterPlay" onClick={playPauseHandler}></i>
      ) : (
        <i className="bx bx-play" id="masterPlay" onClick={playPauseHandler}></i>
      )}
    </div>
  );
};

export default AudioPlayer;
