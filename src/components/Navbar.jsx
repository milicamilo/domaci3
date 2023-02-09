import React from 'react';
import logo from '../images/bombona.png';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-custom" id="header">
      <Link to="/" className="navbar-brand">
        <img src={logo} width="auto" height="30" className="d-inline-block align-center" alt=""></img>
        Poslasticarnica <strong><i> Slatkisi</i></strong>
      </Link>
      <div>
        <Link to="/" className="nav-link">
          Pocetna
        </Link>
        <Link to="/omiljeno" className="nav-link">
          Omiljeni kolaci
        </Link>
        <Link to="/novislatkis" className="nav-link">
          Dodaj novi slatkis
        </Link>
      </div>
    </nav>
  );
}

export default Navbar