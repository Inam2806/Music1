import React from "react";

import './styles/Home.scss';

import { Link } from 'react-router-dom';
import Adele from './images/Song/adele/adele.jpg';
const Home = ({isSidebarOpen}) => {
    return (
         <div className={`home ${isSidebarOpen ? 'home-sidebar-open' : ''} `}> 
   
          <div class="header">
               <h5>Genres</h5>
                       
                    </div>
        
        <div className="album">
         
         
          <div className="artist">
              <Link to="/Adele" rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>
                        <img src={Adele} alt="" />
                        <center>
                            <p className="playlist-card-name">ADELE</p>
                        </center>
                </Link>  
          </div>
           
         <div className="artist">
              <Link to="/Jason Derulo" rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>
                        <img src={Adele} alt="" />
                        <center>
                            <p className="playlist-card-name">Jason Derulo</p>
                        </center>
                </Link>  
          </div>
          <div className="artist">
              <Link to="/Adele" rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>
                        <img src={Adele} alt="" />
                        <center>
                            <p className="playlist-card-name">ADELE</p>
                        </center>
                </Link>  
          </div>
          <div className="artist">
              <Link to="/Adele" rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>
                        <img src={Adele} alt="" />
                        <center>
                            <p className="playlist-card-name">ADELE</p>
                        </center>
                </Link>  
          </div>
          <div className="artist">
              <Link to="/Adele" rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>
                        <img src={Adele} alt="" />
                        <center>
                            <p className="playlist-card-name">ADELE</p>
                        </center>
                </Link>  
          </div>
          <div className="artist">
              <Link to="/Adele" rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>
                        <img src={Adele} alt="" />
                        <center>
                            <p className="playlist-card-name">ADELE</p>
                        </center>
                </Link>  
          </div>
          <div className="artist">
              <Link to="/Adele" rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>
                        <img src={Adele} alt="" />
                        <center>
                            <p className="playlist-card-name">ADELE</p>
                        </center>
                </Link>  
          </div><div className="artist">
              <Link to="/Adele" rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>
                        <img src={Adele} alt="" />
                        <center>
                            <p className="playlist-card-name">ADELE</p>
                        </center>
                </Link>  
          </div>
          <div className="artist">
              <Link to="/Adele" rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>
                        <img src={Adele} alt="" />
                        <center>
                            <p className="playlist-card-name">ADELE</p>
                        </center>
                </Link>  
          </div>
          <div className="artist">
              <Link to="/Adele" rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>
                        <img src={Adele} alt="" />
                        <center>
                            <p className="playlist-card-name">ADELE</p>
                        </center>
                </Link>  
          </div><div className="artist">
              <Link to="/Adele" rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>
                        <img src={Adele} alt="" />
                        <center>
                            <p className="playlist-card-name">ADELE</p>
                        </center>
                </Link>  
          </div><div className="artist">
              <Link to="/Adele" rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>
                        <img src={Adele} alt="" />
                        <center>
                            <p className="playlist-card-name">ADELE</p>
                        </center>
                </Link>  
          </div><div className="artist">
              <Link to="/Adele" rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>
                        <img src={Adele} alt="" />
                        <center>
                            <p className="playlist-card-name">ADELE</p>
                        </center>
                </Link>  
          </div><div className="artist">
              <Link to="/Adele" rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>
                        <img src={Adele} alt="" />
                        <center>
                            <p className="playlist-card-name">ADELE</p>
                        </center>
                </Link>  
          </div>
        
          </div>
          
          
     </div>
     

      

  );
};

export default Home;