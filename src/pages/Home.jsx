import React from 'react';
import Navbar from '../components/Navbar';
import Main from './Main';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;