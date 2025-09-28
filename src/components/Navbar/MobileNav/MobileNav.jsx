import React from 'react';
import './MobileNav.css';
import { HashLink } from 'react-router-hash-link';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}
    onClick={toggleMenu}>
      
      <div className='mobile-menu-container'>
        <h1 className="mobile-logo">Kowshikk</h1>

        <ul>
          <li>
            <HashLink smooth to="/#hero" className='menu-item' onClick={toggleMenu}>Home</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about" className='menu-item' onClick={toggleMenu}>About</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#skills" className='menu-item' onClick={toggleMenu}>Skills</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects" className='menu-item' onClick={toggleMenu}>Projects</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#certificates" className='menu-item' onClick={toggleMenu}>Certificates</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact" className='menu-item' onClick={toggleMenu}>Contact</HashLink>
          </li>

          <li>
            <button className='contact-btn'
              onClick={() => window.open('/Resume/Kowshikk.pdf', '_blank')}>
              Resume
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
