import React from 'react';
import Logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
            <div className="logo">
                  <img src={Logo} alt="" />
            </div>
            <div className="menu">
                  <Link className='active'>Bosh sahifa</Link>
                  <Link>Loyihalar</Link>
                  <Link>Investorlar</Link>
                  <Link>Hamkorlar</Link>
                  <Link>FAQ</Link>
            </div>
            <div className="sign-up">
                  <button>Tizimga kirish</button>
            </div>
    </div>
  );
}

export default Navbar;