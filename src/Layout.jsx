// Layout.jsx
import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import Mainplayer from './Mainplayer';

const Layout = ({ children, audioSources, currentIndex, setCurrentIndex, isPlaying, setIsPlaying, isSidebarOpen, setSidebarOpen, handlePlaybackToggle }) => {
  return (
    <div className="layout">
      <NavBar />
      {children}
      <Mainplayer
        audioSources={audioSources}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex} 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        handlePlaybackToggle={handlePlaybackToggle}
      />
      <Footer />
    </div>
  );
};

export default Layout;
