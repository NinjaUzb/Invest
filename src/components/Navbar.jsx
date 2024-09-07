import React from 'react';
import Logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom';

function Navbar() {
      return (
            <div className='navbar'>
                  <div className="nav-left d-flex align-items-center gap-5">
                        <div className="logo">
                              <img src={Logo} alt="" />
                        </div>
                        <div className="menu">
                              <Link className='active'>Home</Link>
                              <Link>Startups</Link>
                              <Link>Investors</Link>
                              <Link>Partners</Link>
                              <Link>FAQ</Link>
                        </div>

                  </div>
                  <div className="sign-up">
                        <button className='btn ps-5 pe-5 fw-lighter'>Sign in</button>
                  </div>
            </div>
      );
}

export default Navbar;