import React from "react";
import NavBar from "../Navbar";
import t from '../images/animation1.jpg';

const Home = () => {
  return (
      <div className="home">
          <NavBar />
           <div className="album">
          <div className="artist">
              <a href="cscs" alt=""  >
              <img src={t} alt="" />
                  <p class="playlist-card-name">ALAN WALKER</p>
                  </a>
          </div>
          <div className="artist">
              <a href="cscs" alt=""  >
              <img src={t} alt="" />
                  <p class="playlist-card-name">ALAN WALKER</p>
                  </a>
          </div>
          <div className="artist">
              <a href="cscs" alt=""  >
              <img src={t} alt="" />
                  <p class="playlist-card-name">ALAN WALKER</p>
                  </a>
          </div>
          <div className="artist">
              <a href="cscs" alt=""  >
              <img src={t} alt="" />
                  <p class="playlist-card-name">ALAN WALKER</p>
                  </a>
          </div>
          <div className="artist">
              <a href="cscs" alt=""  >
              <img src={t} alt="" />
                  <p class="playlist-card-name">ALAN WALKER</p>
                  </a>
          </div>
          <div className="artist">
              <a href="cscs" alt=""  >
              <img src={t} alt="" />
                  <p class="playlist-card-name">ALAN WALKER</p>
                  </a>
          </div>
          <div className="artist">
              <a href="cscs" alt=""  >
              <img src={t} alt="" />
                  <p class="playlist-card-name">ALAN WALKER</p>
                  </a>
      </div>
            </div>
    </div>
  );
};

export default Home;
