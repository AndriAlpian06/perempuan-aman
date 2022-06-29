import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/perempuan-aman.png'
import {Route, Link, Routes} from 'react-router-dom';
import Home from '../pages';
import About from '../pages/About';
import Our_Program from '../pages/Our_Program';

import './Navbar.css'
  

const Navbar = () => {

    // setting mobile nav
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    // change nav color when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    // close menu on click
    const closeMenu = () => setClick(false)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff'}} />)
                        : (<FaBars size={30} style={{ color: '#ffffff'}}/>)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="/" onClick={closeMenu}>Beranda</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' onClick={closeMenu}>Tentang Kami</Link>
                    </li>
                    <li className='nav-item'>
                        <a href='/our_program' onClick={closeMenu}>Kerja Kami</a>
                    </li>
                    <li className='nav-item'>
                    <a href='/' onClick={closeMenu}>Publikasi</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/www.gerainusantara.com' onClick={closeMenu}>Toko Aman</a>
                    </li>
                </ul>
            </nav>
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes> */}
        </div>
    )
}

export default Navbar