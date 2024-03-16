import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'} style={{ fontFamily: 'cursive', fontSize: '24px', color: '#333', fontWeight: 'bold' }}>
              Life<span style={{ color: 'purple' }}>Track</span>
            </Link>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/login'} style={{ fontWeight: 'bold' }}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/signup'} style={{ fontWeight: 'bold' }}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>

            {/* Logo Images with Margins */}
            <div className="ml-auto">
              <img src="/images/SuperiorLogo.png" alt="Logo" style={{ width: '50px', height: 'auto', marginRight: '10px' }} />
              <img src="/images/hecLogo.png" alt="Logo" style={{ width: '50px', height: 'auto', marginRight: '10px' }} />
            </div>
          </div>
        </nav>
  );
}

export default NavBar;
