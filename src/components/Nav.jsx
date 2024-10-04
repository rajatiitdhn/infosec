import React from 'react';
import {NavLink} from "react-router-dom";
const Nav = () => {
  return (
    <nav className="sticknav">
      <NavLink to="/" className="links">
      <div className="links">Home</div>
      </NavLink>
      <a href="#about" className="links"><div>About</div></a>
      <a style={{ display: "block" }}>
        <img src="/images/cyberlabs icon.png" alt="Cyberlabs Icon" />
      </a>
      <a href="#Writeup" className="links"><div>Writeups</div></a> 
      <a href="#teams" className="links"><div>Teams</div></a>
    </nav>
  );
};

export default Nav;
