import React from 'react';
import Logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer d-flex align-items-start justify-content-around pt-5 pb-5'>
            <div className="logo">
                  <img src={Logo} alt="" />
            </div>
            <div className="foot-menu d-flex flex-column gap-3">
                  <h2>Bizning Platformamiz</h2>
                  <Link>Biz haqimizda</Link>
                  <Link>Maxfiylik siyosati</Link>
                  <Link>FAQ</Link>
                  <Link>Biz bilan bog'laning</Link>
                  <Link>Xizmat shartlari</Link>
            </div>
            <div className="foot-menu d-flex flex-column gap-3">
                  <h2>Bo'limlar</h2>
                  <Link>Startaplar</Link>
                  <Link>Investorlar</Link>
                  <Link>Hamkorlar</Link>
            </div>
            <div className="about-us d-flex flex-column gap-1">
                  <h2>Kontaktlar</h2>
                  <p>+998 99 229 3737</p>
                  <p>raimjonovdev@gmail.com</p>
                  <p>Fargóna viloyati , 7-Q uy</p>
            </div>
    </div>
  );
}

export default Footer;