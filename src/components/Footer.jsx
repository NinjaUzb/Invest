import React from 'react';
import Logo from '../assets/dark-logo.jpg'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer d-flex align-items-start justify-content-around pt-5 pb-5'>
            <div className="logo">
                  <img src={Logo} alt="" />
                  <div className="social d-flex align-items-center gap-5">
                        <div className="item">
                              <i className="fa-brands fa-telegram"></i>
                        </div>
                        <div className="item">
                              <i className="fa-brands fa-instagram"></i>
                        </div>
                        <div className="item">
                              <i className="fa-brands fa-facebook"></i>
                        </div>
                  </div>
            </div>
            <div className="foot-menu d-flex flex-column gap-1">
                  <h2>Our Platform</h2>
                  <Link className='m-0'>About us</Link>
                  <Link className='m-0'>Privacy Policy</Link>
                  <Link className='m-0'>FAQ</Link>
                  <Link className='m-0'>Contact us</Link>
                  <Link className='m-0'>Terms of service</Link>
            </div>
            <div className="foot-menu d-flex flex-column gap-1">
                  <h2>Pages</h2>
                  <Link className='m-0'>Startups</Link>
                  <Link className='m-0'>Investors</Link>
                  <Link className='m-0'>Partners</Link>
            </div>
            <div className="about-us d-flex flex-column gap-1">
                  <h2>Contacts</h2>
                  <p className='m-0'>+998 99 229 3737</p>
                  <p className='m-0'>raimjonovdev@gmail.com</p>
                  <p className='m-0'>Fargóna viloyati , 7-Q uy</p>
            </div>
    </div>
  );
}

export default Footer;