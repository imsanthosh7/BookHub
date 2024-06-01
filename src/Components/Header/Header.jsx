import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchFrom from '../SearchForm/SearchForm'
import './Header.css'

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>find your book of choice.</h2>
          <br />
          <p className='header-text fs-18 fw-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium officiis quaerat pariatur vitae? Dolorem debitis mollitia possimus maxime adipisci velit ipsam, voluptatem error eum eveniet.</p>
          <SearchFrom/>


        </div>
      </header>
    </div>
  )
}

export default Header