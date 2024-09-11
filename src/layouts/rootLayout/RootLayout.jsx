import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './rootLayout.css'; 

const RootLayout = () => {
  return (
    <div className='RootLayout'>
      <header>
        <Link to="/" className='logo'>
          <img src="/logo4.png" alt="Gemini logo" />
          <span>Gemini</span>
        </Link>
        <div className="user">
         
        </div>
      </header>
      <main>
     <Outlet/>
      </main>
    </div>
  );
};

export default RootLayout;
