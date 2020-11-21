import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [navlinks, setNavlinks] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const changeNavlinks = () => {
    if (window.scrollY >= 300) {
      setNavlinks(true);
    } else {
      setNavlinks(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  window.addEventListener('scroll', changeNavlinks);

  return (
    <>
      <header className="main_header">
        <nav className={navbar ? 'navbar active' : 'navbar'}>
          <div className='navbar-container'>
            <a href='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img src="/images/mpartial.png" alt="" />

            </a>
            <div className='menu-icon' onClick={handleClick}>
              <i className='fas fa-bars' />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <a
                  href="/#Ground-Truth-Data"
                  className={navlinks ? 'nav-links active' : 'nav-links'}
                  onClick={closeMobileMenu}>

                  Ground-Truth Data
                </a>
              </li>
              <li className='nav-item'>
                <a
                  href="/#How-It-Works"
                  className={navlinks ? 'nav-links active' : 'nav-links'}
                  onClick={closeMobileMenu}>

                  How It Works
                </a>
              </li>
              <li className='nav-item'>
                <a
                  href="/#Fee-Structure"
                  className={navlinks ? 'nav-links active' : 'nav-links'}
                  onClick={closeMobileMenu}>

                  Fee Structure
                </a>
              </li>
              <li className='nav-item'>
                <a
                  href="/#Example-Deliverables"
                  className={navlinks ? 'nav-links active' : 'nav-links'}
                  onClick={closeMobileMenu}>

                  Example Deliverables
                </a>
              </li>
              <li className='nav-item'>
                <Link
                  to="/login"
                  className={navlinks ? 'nav-links active' : 'nav-links'}
                  onClick={closeMobileMenu}>

                  Submission Portal
                </Link>
              </li>
              <li className='nav-item'>
                <a
                  href="/#Contact-US"
                  className={navlinks ? 'nav-links active' : 'nav-links'}
                  onClick={closeMobileMenu}>

                  Contact Us
                </a>
              </li>

              <li className='nav-item'>
                <Link
                  to="/login" 
                  className='nav-links' 
                  onClick={closeMobileMenu}>

                  <button className="login_btn"> Sign In </button>
                </Link>
              </li>
            </ul>

          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
