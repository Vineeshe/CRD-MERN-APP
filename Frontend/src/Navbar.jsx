import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <div className="navbar">
      <ul>

        <li> <Link to="/"> Home </Link></li>
        <li> <Link to="/all">Create post</Link></li>
        <li> <Link to="/update">All post</Link></li>
      </ul>
    </div>


  )
}

export default Navbar
