import React from 'react';
import logo2 from './logo2.png';
import './Header.css';
import FormattedDate from './FormattedDate.jsx';


const Header = () => {
    return (
    <header className="header">
      <a href="https://www.theguardian.com">
        <img src={logo2} alt="Guardian Logo" className="logo" />
      </a>
            <h1>Your Daily Guardian News Summary: <FormattedDate />
        </h1>
    </header>
    )
};

export default Header;




