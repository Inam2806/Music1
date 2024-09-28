import React from "react";

import './styles/Home.scss';

import { Link } from 'react-router-dom';



const Home = ({audioSources, isSidebarOpen }) => {

    return (
        <div className={`home ${isSidebarOpen ? 'home-sidebar-open' : ''} `}>
            <div class="header">
                <h5>Genres</h5>
            </div>
            <div className="album">
                {audioSources.map((song, index) => (
                    
                    <div key={index} className="artist">
                        <Link to={`/${song.artist.replace(/\s+/g, "-")}`} rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>
                            <img src={song.cover} alt="" />
                            <center>
                                <p className="playlist-card-name">{song.artist}</p>
                            </center>
                        </Link>
                    </div>
                ))}

            </div>


        </div>




    );
};

export default Home;