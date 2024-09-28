import React, { useState, useRef, useEffect } from 'react';
import './styles/Mainplayer.scss';

const Mainplayer = ({ audioSources, currentIndex, setCurrentIndex, isPlaying, setIsPlaying, isSidebarOpen, setSidebarOpen, handlePlaybackToggle }) => {
  const [progress, setProgress] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const audioRef = useRef(new Audio());
  const [isMuted, setIsMuted] = useState(false);



  useEffect(() => {
    const audioElement = audioRef.current;

    const updateProgress = () => {
      const duration = audioElement.duration;
      const currentTime = audioElement.currentTime;

      if (!isNaN(duration) && !isNaN(currentTime) && duration !== 0) {
        const calculatedProgress = (currentTime / duration) * 100 || 0;
        const remainingTime = duration - currentTime;

        setProgress(calculatedProgress);
        setTotalTime(duration);
        setTimeLeft(remainingTime);
      }
    };


    audioElement.addEventListener('timeupdate', updateProgress);

    return () => {
      audioElement.removeEventListener('timeupdate', updateProgress);
    };
  }, [audioRef]);




  useEffect(() => {
    if (currentIndex !== null) {
      audioRef.current.src = audioSources[currentIndex].src;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentIndex, isPlaying, audioSources]);
  const nextTrackHandler = () => {
    const newIndex = (currentIndex + 1) % audioSources.length;
    setCurrentIndex(newIndex);
    setCurrentIndex(newIndex); // Set the currentIndex to the next index
    setIsPlaying(true); // Start playing the next song
  };

  const prevTrackHandler = () => {
    const newIndex = (currentIndex - 1 + audioSources.length) % audioSources.length;
    setCurrentIndex(newIndex);
    setCurrentIndex(newIndex); // Set the currentIndex to the previous index
    setIsPlaying(true); // Start playing the previous song
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleNewTrack = () => {
      // Stop the currently playing audio when changing the track
      audioElement.pause();
      audioElement.currentTime = 0; // Reset to the beginning of the track
      setIsPlaying(false);

      // Play the next track automatically
      const newIndex = (currentIndex + 1) % audioSources.length;
      setCurrentIndex(newIndex);
      setIsPlaying(true);
    };

    audioElement.addEventListener('ended', handleNewTrack);

    return () => {
      audioElement.removeEventListener('ended', handleNewTrack);
    };
  }, [audioRef, setIsPlaying, currentIndex, setCurrentIndex, audioSources]);



  return (
    <div className={`bottom1 ${isSidebarOpen ? 'bottom1-open' : ''} `}>
      <div className={`bottom ${isSidebarOpen ? 'bottom-open' : ''} `}>
        <input
          type="range"
          name="range"
          id="myProgressBar"
          min="0"
          value={progress}
          max="100"
          onChange={(e) => {
            const newTime = (e.target.value / 100) * audioRef.current.duration;
            audioRef.current.currentTime = newTime;
          }}
          style={{ width: '100%', minWidth: 'initial', maxWidth: 'initial' }}
        /><div>
          <span>{formatTime(timeLeft)} / {formatTime(totalTime)}</span>
        </div>

        <div className="icons">
          <i className="fas fa-3x fa-step-backward" id="previous" onClick={prevTrackHandler}></i>
          {isPlaying ? (
            <i className="far fa-2x fa-pause-circle" id="masterPlay" onClick={() => setIsPlaying(!isPlaying)}></i>
          ) : (
            <i className="fa fa-play-circle" id="masterPlay" onClick={() => handlePlaybackToggle(currentIndex)}></i>
          )}
          <i className="fas fa-3x fa-step-forward" id="next" onClick={nextTrackHandler}></i>

          {isMuted ? (
            <i className="fas fa-volume-mute" onClick={() => { audioRef.current.muted = false; setIsMuted(false); }}></i>
          ) : (
            <i className="fas fa-volume-up" onClick={() => { audioRef.current.muted = true; setIsMuted(true); }}></i>
          )}

        </div>

        <div className="songInfo">
          <img src="playing.gif" width="42px" alt="" id="gif" />
          <span id="masterSongName">{audioSources[currentIndex].title}</span>

        </div>
      </div>
    </div>
  );
};

// Helper function to format time in mm:ss format
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export default Mainplayer;
