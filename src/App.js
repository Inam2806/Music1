// App.jsx


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';


import Footer from './Footer';
import React, { useState, useMemo, useEffect } from "react";
import NavBar from "./Navbar";

import './styles/Home.scss';
import Aside from "./aside";
import ArtistSongs from "./ArtistSongs";

import Search from "./Search";
import audio1 from './Song/Akon - Smack That  ft. Eminem.mp3';
import audio2 from './Song/AURORA - Runaway.mp3';
import audio3 from './Song/Ava Max - Sweet but Psycho.mp3';
import audio4 from './Song/Avicii - The Nights.mp3';
import audio5 from './Song/David Guetta - Hey Mama ft Nicki Minaj, Bebe Rexha & Afrojack.mp3';
import audio6 from './Song/Elysa - Hunter .mp3';
import audio7 from './Song/George Ezra - Shotgun .mp3';
import audio8 from './Song/Jason Derulo - Wiggle feat. Snoop Dogg.mp3';
import audio9 from './Song/Jason Derulo - Swalla (feat. Nicki Minaj & Ty Dolla $ign).mp3';
import audio10 from './Song/OneRepublic - Counting Stars.mp3';
import audio11 from './Song/PSY - GANGNAM STYLE(강남스타일) M_V .mp3';
import audio12 from './Song/Rihanna - Work (Explicit) ft. Drake.mp3';
import audio13 from './Song/Adele-Hello.mp3';
import audio14 from './Song/DJ Snake-Taki Taki.mp3';

import a from './images/animation1.jpg';
import b from './images/animation3.jpg';
import c from './images/animation2.jpg';
import d from './images/animation2.jpg';
import adele from './images/Song/adele/adele.jpg';
import Mainplayer from "./Mainplayer";
import Home from "./Home";



const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isInputVisible ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isInputVisible]);
  const audioSources = useMemo(() => [
  {
    id: 1,  
    title: "Akon - Smack That  ft. Eminem",
    cover: a,
    src: audio1,
    artist: "Akon",
 
  },
  {
    id: 2,
    title: "AURORA - Runaway",
    cover: b,
    src: audio2,
    artist: "AURORA",

  },
  {
    id: 3,
    title: "Ava Max - Sweet but Psycho",
    cover: c,
    src: audio3,
    artist: "Ava Max",
   
  },
  {
    id: 4,
    title: "Avicii - The Nights.mp3",
    cover: d,
    src: audio4,
    artist: "Avicii",

    },
   {
    id: 5,
    title: "David Guetta - Hey Mama ft Nicki Minaj, Bebe Rexha & Afrojack",
    cover: d,
    src: audio5,
    artist: "David Guetta",

    },
    {
    id: 6,
    title: "Elysa - Hunter",
    cover: d,
    src: audio6,
    artist: "Elysa",

    },
     {
    id: 7,
    title: "George Ezra - Shotgun",
    cover: d,
    src: audio7,
    artist: "George Ezra",

  },
   {
    id: 8,
    title: "Jason Derulo -Wiggle feat. Snoop Dogg",
    cover: d,
    src: audio8,
     artist: "Jason Derulo",

  },
   {
    id: 9,
    title: "Jason Derulo - Swalla (feat. Nicki Minaj & Ty Dolla $ign)",
    cover: d,
    src: audio9,
     artist: "Jason Derulo",

  },
   {
    id: 10,
    title: "OneRepublic - Counting Stars",
    cover: d,
    src: audio10,
    artist: "OneRepublic",

    },
    {
    id: 11,
    title: "PSY - GANGNAM STYLE(강남스타일) M_V",
    cover: d,
    src: audio11,
    artist: "PSY",

    },
    {
    id: 12,
    title: "Rihanna - Work",
    cover: d,
    src: audio12,
    artist: "Rihanna",

  }, {
    id: 13,
    title: "Adele-Hello",
    cover: adele,
    src: audio13,
    artist: "Adele",

  }, {
    id: 14,
    title: "DJ Snake-Taki Taki",
    cover: adele,
    src: audio14,
    artist: "DJ Snake",

  },
  ], []);


const handlePlaybackToggle = (index) => {
    if (currentIndex === index) {
      setIsPlaying(!isPlaying); // Toggle play/pause if it's the same song
    } else {
      // Pause the current song and play the new one
      setCurrentIndex(index); // Update the currentIndex in the parent component
      setIsPlaying(true);
    }
  };
        return (
   
         <Router>
            <div className={`container ${isInputVisible ? 'search-sidebar-open' : ''}`}>
                 <NavBar />
              <Routes>
                <Route path="/" element={<Home isSidebarOpen={isSidebarOpen} audioSources={audioSources} handlePlaybackToggle={handlePlaybackToggle} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />               
                <Route path="/Adele" element={<ArtistSongs artist="Adele" audioSources={audioSources} handlePlaybackToggle={handlePlaybackToggle} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentIndex={currentIndex} isSidebarOpen={isSidebarOpen} />} />
                <Route path="/Jason Derulo" element={<ArtistSongs artist="Jason Derulo" audioSources={audioSources}  handlePlaybackToggle={handlePlaybackToggle} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentIndex={currentIndex} isSidebarOpen={isSidebarOpen}/>}/>
                </Routes>
               <Aside isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
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
        <Search
          audioSources={audioSources}
          currentIndex={currentIndex}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setCurrentIndex={setCurrentIndex}
          isInputVisible={isInputVisible}
          setIsInputVisible={setIsInputVisible}
          handlePlaybackToggle={handlePlaybackToggle}
        />
        <Footer />
        </div>
        </Router>
    );
};

export default App;
