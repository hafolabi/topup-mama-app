import * as React from 'react';
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from "./assets/logo.png";

interface ITopbarProps {
}

const Topbar: React.FunctionComponent<ITopbarProps> = (props) => {
  return (
    <nav className="navbar bg-light mb-lg-10 p-2">
      <div className="container d-flex justify-content-between align-item-center">
        <Link to="/" className="navbar-brand link">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
          </div>
          </Link>

        
          <div className="d-flex">
            <span className='mx-4 borderbtn px-3 py-1'>Login</span>
            <span className='borderbtn px-3 py-1'>Register</span>
        </div>
        
      </div>
    </nav>
  );
};

export default Topbar;

