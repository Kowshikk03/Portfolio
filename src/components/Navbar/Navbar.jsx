import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';
import cartoonImg from '../../assets/Images/cartoon.png';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <h1 className="logo">Kowshikk</h1>

          <ul> 
            <li><HashLink smooth to="/#hero" className="menu-item white-text">Home</HashLink></li>
            <li><HashLink smooth to="/#about" className="menu-item white-text">About</HashLink></li>
            <li><HashLink smooth to="/#skills" className="menu-item white-text">Skills</HashLink></li>
            <li><HashLink smooth to="/#projects" className="menu-item white-text">Projects</HashLink></li>
            <li><HashLink smooth to="/#certificates" className="menu-item white-text">Certificates</HashLink></li>
            <li><HashLink smooth to="/#contact" className="menu-item white-text">Contact</HashLink></li>
            <li>
              <button
                className='contact-btn'
                onClick={() => window.open('/Resume/Kowshikk.pdf', '_blank')}
              >
                Resume
              </button>
            </li>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-symbols-outlined" style={{ fontSize: "1.8rem" }}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
