import React from 'react';
import './styles/aside.scss'; // Import your navbar styles

// Aside component takes isSidebarOpen and setSidebarOpen as props
const Aside = ({ isSidebarOpen, setSidebarOpen }) => {
  // Function to handle the toggling of the sidebar
  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className="container">
      <div className={`sidebarX ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <button className="menu-btn1" onClick={handleSidebarToggle}>
          <i className={`bx ${isSidebarOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </button>

        <aside className="sidebar" style={{ display: isSidebarOpen ? 'block' : 'none' }}>
          <div className="logo">
            <i className="bx bx-pulse"></i>
            <a href="vdv" title="MusiX">
             MusiX
            </a>

            <button className="menu-btn">
              <i className="bx bx-arrow-back"></i>
            </button>
          </div>

          <div >
            <div class="menu">
                <h5>Search</h5>
                <ul>
                    <li>
                        <i class='bx bxs-bolt-circle'></i>
                        <a href="vdv" alt="">Explore</a>
                    </li>
                    <li>
                        <i class='bx bxs-volume-full'></i>
                        <a href="vdv" alt="">Genres</a>
                    </li>
                    <li>
                        <i class='bx bxs-album'></i>
                        <a href="vdv" alt="">Albums</a>
                    </li>
                    <li>
                        <i class='bx bxs-microphone'></i>
                        <a href="vdv" alt="">Artists</a>
                    </li>
                    <li>
                        <i class='bx bxs-radio'></i>
                        <a href="vdv" alt="">Poddcasts</a>
                    </li>
                </ul>
            </div>

            <div class="menu">
                <h5>Library</h5>
                <ul>
                    <li>
                        <i class='bx bx-undo'></i>
                        <a href="vdv" alt="">Recent</a>
                    </li>
                    <li>
                        <i class='bx bxs-photo-album'></i>
                        <a href="vdv" alt="">Albums</a>
                    </li>
                    <li>
                        <i class='bx bxs-heart'></i>
                        <a href="vdv" alt="">Favourites</a>
                    </li>
                    <li>
                        <i class='bx bxs-folder'></i>
                        <a href="vdv" alt="">Local</a>
                    </li>

                </ul>
            </div>

            <div class="menu">
                <h5>Playlist</h5>
                <ul>
                    <li>
                        <i class='bx bxs-plus-square'></i>
                        <a href="vdv" alt="">Create New</a>
                    </li>
                    <li>
                        <i class='bx bxs-caret-right-circle'></i>
                        <a href="vdv" alt="">Best of 2023</a>
                    </li>
                    <li>
                        <i class='bx bxs-caret-right-circle'></i>
                        <a href="vdv" alt="">Best of 2022</a>
                    </li>
                    <li>
                        <i class='bx bxs-caret-right-circle'></i>
                        <a href="vdv" alt="">Kael Fischer</a>
                    </li>

                </ul>
            </div>

       
</div>

        </aside>

       
</div>
    </div>


    );
};

export default Aside;
