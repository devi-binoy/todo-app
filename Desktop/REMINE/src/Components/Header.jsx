import React from 'react';
import Navbar from './Navbar';


function Header() {
  return (
    <div id='main'>
        <Navbar/>
        
        <div className='name'>
            <h1><span>REMINE INDIA</span></h1>
            <h1><span>PRIVATE LTD</span></h1>
            <p className='details'>Recycling E-Waste and Li Batteries</p>
            <a href='#' className='cv-btn'>recycle now</a>
        </div>

    </div>
  )
}

export default Header