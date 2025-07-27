import { FaBars } from 'react-icons/fa';
import React from 'react';

const Navbar = ({ toggleSidebar }) => (
  <div className="navbar">
    <h2>Dipali Kunde</h2>
    <FaBars className="nav-toggle" size={24} onClick={toggleSidebar} />
  </div>
);

export default Navbar;
