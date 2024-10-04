import React from 'react';
import { NavLink } from 'react-router-dom';

const Writeup = () => {
  return (
    <div id="Writeup" className="writeup-banner" style={{ backgroundColor: 'rgb(42, 40, 40)', marginTop: '10%' }}>
      <div style={{ fontFamily: 'pixelify sans', fontWeight: 500, fontSize: '50px', color: 'whitesmoke', textAlign: 'center', borderBottom: '3px solid lime' }}>
        CTF WRITEUPS
      </div>
      <div className="bannercontainer">
        <div className="banner">
          <NavLink to="/googlectf" className="links">
            <img src="/CTF Banners/GoogleCTF.gif" alt="Google CTF" />
            <p>Google CTF</p>
          </NavLink>
        </div>

        <div className="banner">
          <NavLink to="/nahamconctf" className="links">
            <img src="/CTF Banners/Nahamcon CTF.png" alt="Nahamcon CTF" />
            <p>Nahamcon CTF</p>
          </NavLink>
        </div>

        <div className="banner">
          <NavLink to="/wanictf" className="links">
            <img src="/CTF Banners/Wani CTF.png" alt="Wani CTF" />
            <p>Wani CTF</p>
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Writeup;
