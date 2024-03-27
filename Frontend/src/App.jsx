import './App.css'
import React from 'react'
import Navbar from './Navbar'
import Create from './Create';
import Read from './Read';
import Update from './Update';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/all' element={<Create />} />
          <Route exact path='/' element={<Update />} />

          <Route path="/Update" element={<Read />} />
        </Routes>
      </Router>





    </>
  )
}

export default App

