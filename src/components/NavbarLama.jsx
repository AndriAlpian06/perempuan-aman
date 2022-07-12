import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/perempuan-aman.png'
import Home from '../pages/Home';
import About from '../pages/About';
import Our_Program from '../pages/Our_Program';
import { Link } from "react-router-dom"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'


import './Navbar.css'
  
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const NavbarLama = () => {

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
                <Link to='/' className='logo'>
                    <img src={logo} alt='logo' />
                </Link>
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
                        <Link to='/our_program' onClick={closeMenu}>Kerja Kami</Link>
                    </li>
                    <Menu as="div" className="relative inline-block text-left">
                        <div className='nav-item'>
                            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                            Publikasi
                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="dropdown-ucos text-black origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#8756c2] ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-black-900' : 'text-black',
                                        'block px-4 py-2 text-sm text-dropdown'
                                    )}
                                    >
                                    Buku
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Acara
                                    </a>
                                )}
                                </Menu.Item>
                            </div>
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Berita
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Youtube
                                    </a>
                                )}
                                </Menu.Item>
                            </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <li className='nav-item'>
                        <a href="http://www.gerainusantara.com/" target="_blank" rel="noopener" onClick={closeMenu}>Toko Aman</a>
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default NavbarLama