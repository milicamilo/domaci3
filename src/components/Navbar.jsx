import React from 'react';
import logo from '../images/bombona.png';

function Navbar() {
  return (
    <nav className="navbar navbar-custom">
        <a className="navbar-brand" href="" >
            <img src={logo} width="auto" height="30" className="d-inline-block align-center" alt=""></img>
              Poslasticarica <strong><i> Slatkisi</i></strong>
        </a> 
        <div>
            <a className="nav-link" href="">Pocetna</a>
            <a className="nav-link" href="">Dodaj novi kolac</a>  
            <a className="nav-link" href="">Odjava</a>
        </div>

    </nav>
  )
}

export default Navbar