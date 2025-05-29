import React from 'react';
import './Header.css';
import logo from '../assets/Logo.jpeg';

function Header() {
  return (
    <header className="custom-header">
      <div className="overlay">
        <img src={logo} alt="Logo" className="header-logo" />
        <div className="header-content">
          <h1 className="main-title"> SHORT HILLS</h1>
          <h1 className="sub-title"> AUTO DETAILING</h1>
          <br></br>
          <h2 className="description"> CAR DETAILING<br />RIGHT ON YOUR<br />DRIVEWAY</h2>
          <br></br>
          <br></br>
          <a href="#booking" className="book-now-button">Book Now</a>
        </div>
      </div>
    </header>
  );
}

export default Header;