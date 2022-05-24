import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/perempuan-aman.png'

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
                        <a href='/' onClick={closeMenu}>Beranda</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Tentang Kami</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Kerja Kami</a>
                    </li>
                    <li className='nav-item'>
                    <a href='/' onClick={closeMenu}>Publikasi</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Toko Aman</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar