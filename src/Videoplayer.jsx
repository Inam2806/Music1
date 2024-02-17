import React, { useState, useEffect, useMemo } from 'react';
import ReactPlayer from 'react-player';
import './styles/video.scss';

const VideoPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const videoSources = useMemo(() => [
    'https://www.youtube.com/watch?v=ZTR6H4mug4M',
    'https://www.youtube.com/watch?v=ZTR6H4mug4M',
    'https://www.youtube.com/watch?v=ZTR6H4mug4M'
  ], []);

  const handleProgress = (state) => {
    setProgress(state.played * 100);
    setTimeLeft(totalTime - state.playedSeconds);
  };
  const handlePlayPauseToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handleDuration = (duration) => {
    setTotalTime(duration);
  };

  const nextTrackHandler = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    setIsPlaying(true); // Start playing the next track
  };

  const prevTrackHandler = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videoSources.length - 1 : prevIndex - 1
    );
    setIsPlaying(true); // Start playing the previous track
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleInputChange = (e) => {
    const newPosition = parseFloat(e.target.value);
    setProgress(newPosition);
    const newTime = (newPosition / 100) * totalTime;
    setTimeLeft(totalTime - newTime);
    // Seek to the new position in the video
    playerRef.seekTo(newTime);
  };

  const playerRef = React.createRef();

  return (
    <div className='bottom2'>
      <ReactPlayer
        ref={playerRef}
        url={videoSources[currentIndex]}
        playing={isPlaying}
        controls={false} // Disable default controls
        width="500px"
        height="300px"
        onProgress={handleProgress}
        onDuration={handleDuration}
        onPlay={handlePlay}
        onPause={handlePause}
        onClick={handlePlayPauseToggle} // Toggle play/pause when clicking on the video
      />

      <div className="videoicons">
        <i className="fas fa-3x fa-step-backward" id="previous" onClick={prevTrackHandler} style={{ color: 'white' }}></i>
        {isPlaying ? (
          <i className="far fa-3x fa-pause-circle" id="masterPlay" onClick={() => setIsPlaying(false)} style={{ color: 'white' }}></i>
        ) : (
          <i className="far fa-3x fa-play-circle" id="masterPlay" onClick={() => setIsPlaying(true)} style={{ color: 'white' }}></i>
        )}
        <i className="fas fa-3x fa-step-forward" id="next" onClick={nextTrackHandler} style={{ color: 'white' }}></i>
      </div>
      <input
        type="range"
        name="range"
        id="myProgressBar"
        min="0"
        value={progress}
        max="100"
        onChange={handleInputChange}
        style={{ width: '400px', minWidth: 'initial', maxWidth: 'initial' }}
      />
      <div>
        <span style={{ color: 'white' }}>{formatTime(timeLeft)} / {formatTime(totalTime)}</span>
      </div>
    </div>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

export default VideoPlayer;
