import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css'; // Optional: for styling

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/todolist">Todo List</Link>
      <Link to="/contact">Contact Form</Link>
    </nav>
  );
}
 
export default Navbar;
