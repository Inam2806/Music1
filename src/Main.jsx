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
import audio15 from './Song/Atif Aslam/Dil Diyan Gallan Song _ Tiger Zinda Hai _ Salman Khan _ Katrina Kaif _ Atif Aslam.mp3';
import audio16 from './Song/Atif Aslam/Jeene Laga Hoon Lyrical - Ramaiya Vastavaiya _ Girish Kumar, Shruti Haasan _ Atif Aslam.mp3';
import audio17 from './Song/Atif Aslam/Tera Hone Laga Hoon Lyrical - Ajab Prem Ki Ghazab Kahani _ Atif Aslam _ Ranbir, Katrina K _ Pritam.mp3';
import audio18 from './Song/Atif Aslam/Tu Jaane Na Lyrical - Ajab Prem Ki Ghazab Kahani _ Atif Aslam _ Ranbir Kapoor, Katrina Kaif _ Pritam.mp3';
import audio19 from './Song/Arijit Singh/Full Song - Tujhe Kitna Chahne Lage _ Kabir Singh _ Mithoon Feat. Arijit Singh _ Shahid K, Kiara A.mp3';
import audio20 from './Song/Arijit Singh/Hamari Adhuri Kahani Title Track Full Video - Emraan Hashmi,Vidya Balan_Arijit Singh.mp3';
import audio21 from './Song/Arijit Singh/Main Dhoondne Ko Zamaane Mein (Heartless) - Arijit Singh.mp3';
import audio22 from './Song/Arijit Singh/Pachtaoge - Arijit Singh.mp3';
import audio23 from './Song/Arijit Singh/Tera Fitoor Lyrical - Genius _ Utkarsh Sharma, Ishita Chauhan _ Arijit Singh _ Himesh Reshammiya ( 160kbps ).mp3';
import audio24 from './Song/Arijit Singh/Tu Hi Hai Aashiqui Arijit Singh and Palak Muchhal ( 128kbps ).mp3';
import audio25 from './Song/Arijit Singh/Yaad Hai Na - Raaz Reboot (Arijit Singh) 190Kbps.mp3';
import Atif from './images/Song/Atif Aslam/Atif aslam.jpg';
import Atif1 from './images/Song/Atif Aslam/Dil-Diyan.jpg';
import Arijit from './images/Song/Arijit Singh/Arijit Singh.jpg';

// import Adele from './images/Song/adele/adele.jpg';
import Jason from './images/Song/Jason Derulo/Jason.jpg';
import Snake from './images/Song/Dj snake/DJ-Snake.jpg';
// import calvin from './images/Song/calvin/1.jpg';
// import alan from './images/Song/alan/alan.jpg';
// import maroon from './images/Song/maroon/1.jpg';
// import balvin from './images/Song/balvin/1.jpg';
// import Selena from './images/Song/Selena Gomez/Selena Gomez.jpg';
import a from './images/animation1.jpg';
import b from './images/animation3.jpg';
import c from './images/animation2.jpg';
import d from './images/animation2.jpg';
import adele from './images/Song/adele/adele.jpg';
import Mainplayer from "./Mainplayer";
import Home from "./Home";


const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const audio1 = 'https://res.cloudinary.com/dkdz37uxc/video/upload/f_auto:video,q_auto/ezb4scdnfgqicnclsry6';
  useEffect(() => {
    document.body.style.overflow = isInputVisible ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isInputVisible]);
  const audioSources = useMemo(() => [
    {
      title: "Dil Diyan Gallan",
      cover: Atif1,
      src: audio15,
      artist: "Atif Aslam",
    },
    {
      title: "Jeene Laga Hoon",
      cover: Atif,
      src: audio16,
      artist: "Atif Aslam",
    },
    {
      title: "Tera Hone Laga Hoon",
      cover: Atif,
      src: audio17,
      artist: "Atif Aslam",
    },
    {
      title: "Tu Jaane Na",
      cover: Atif,
      src: audio18,
      artist: "Atif Aslam",
    },
    {
      title: "Tujhe Kitna Chahne Lage",
      cover: Arijit,
      src: audio19,
      artist: "Arijit Singh",
    },
    {
      title: "Hamari Adhuri Kahani",
      cover: Arijit,
      src: audio20,
      artist: "Arijit Singh",
    },
    {
      title: "Pachtaoge",
      cover: Arijit,
      src: audio21,
      artist: "Arijit Singh",
    },
    {
      title: "Tera Fitoor",
      cover: Arijit,
      src: audio22,
      artist: "Arijit Singh",
    },
    {
      title: "Tu Hi Hai",
      cover: Arijit,
      src: audio23,
      artist: "Arijit Singh",
    },
    {
      title: "Arijit Singh-Yaad Hai Na",
      cover: Arijit,
      src: audio24,
      artist: "Arijit Singh",
    },
    {
      title: "Tujhe Kitna Chahne Lage",
      cover: Arijit,
      src: audio25,
      artist: "Arijit Singh",
    },

    {

      title: "Akon - Smack That  ft. Eminem",
      cover: a,
      src: audio1,
      artist: "Akon",

    },
    {

      title: "AURORA - Runaway",
      cover: b,
      src: audio2,
      artist: "AURORA",

    },
    {

      title: "Ava Max - Sweet but Psycho",
      cover: c,
      src: audio3,
      artist: "Ava Max",

    },
    {

      title: "Avicii - The Nights.mp3",
      cover: d,
      src: audio4,
      artist: "Avicii",

    },
    {

      title: "David Guetta - Hey Mama ft Nicki Minaj, Bebe Rexha & Afrojack",
      cover: d,
      src: audio5,
      artist: "David Guetta",

    },
    {

      title: "Elysa - Hunter",
      cover: d,
      src: audio6,
      artist: "Elysa",

    },
    {

      title: "George Ezra - Shotgun",
      cover: d,
      src: audio7,
      artist: "George Ezra",

    },
    {

      title: "Jason Derulo -Wiggle feat. Snoop Dogg",
      cover: Jason,
      src: audio8,
      artist: "Jason Derulo",

    },
    {

      title: "Jason Derulo - Swalla (feat. Nicki Minaj & Ty Dolla $ign)",
      cover: Jason,
      src: audio9,
      artist: "Jason Derulo",

    },
    {

      title: "OneRepublic - Counting Stars",
      cover: d,
      src: audio10,
      artist: "OneRepublic",

    },
    {

      title: "PSY - GANGNAM STYLE(강남스타일) M_V",
      cover: d,
      src: audio11,
      artist: "PSY",

    },
    {

      title: "Rihanna - Work",
      cover: d,
      src: audio12,
      artist: "Rihanna",

    }, {

      title: "Adele-Hello",
      cover: adele,
      src: audio13,
      artist: "Adele",

    }, {

      title: "DJ Snake-Taki Taki",
      cover: Snake,
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
  const artists = [
    "Adele",
    "Jason Derulo",
    "Balvin",
    "DJ Snake",
    "Justin Bieber",
    "Alan",
    "Maroon",
    "Akon ",
    "Selena Gomez",
    "Calvin Harris",
    "Atif Aslam",
    "Arijit Singh"
    // Add more artists as needed
  ];
  const artistRoutes = artists.map((artist, index) => (
    <Route
      key={index}
      path={`/${artist.replace(/\s+/g, "-")}`} // Use hyphenated artist name in the path
      element={
        <ArtistSongs
          artist={artist}
          audioSources={audioSources}
          handlePlaybackToggle={handlePlaybackToggle}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentIndex={currentIndex}
          isSidebarOpen={isSidebarOpen}
        />
      }
    />
  ));

  return (

    <Router>
      <div className={`container ${isInputVisible ? 'search-sidebar-open' : ''}`}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home isSidebarOpen={isSidebarOpen} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          {artistRoutes}


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
        
          isInputVisible={isInputVisible}
          setIsInputVisible={setIsInputVisible}
          handlePlaybackToggle={handlePlaybackToggle}
        />
        <Footer />
      </div>
    </Router>
  );
};

export default Main;
