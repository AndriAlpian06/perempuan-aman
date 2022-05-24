import React, {useState, Fragment} from 'react'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai' 
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaYoutube} from 'react-icons/fa'
import logoAman from '../assets/perempuan-aman.png'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }

  return (
    <div className='flex w-full justify-between items-center h-20 px-8 absolute z-10 text-white'>
        <div>
            <img onClick={handleNav} className={logo ? 'hidden' : 'block h-[100px] p-4'} src={logoAman} />
        </div>
        <ul className='hidden md:flex'>
            <li className='px-4'>Tentang Kami</li>
            <li className='px-4'>Kerja Sama</li>
            <li className='px-4'>Berita</li>
            <li className='px-4'>Organisasi</li>
            <li className='px-4'>
                <Menu as="div" className="relative text-left">
                    <div>
                        <Menu.Button className="flex justify-center w-full px-4 py-2 bg-transparent text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-500">
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
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
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
            </li>
            
        </ul>
        <div className='hidden md:flex'>
            {/* <BsSearch className='mr-2' size={20}/> */}
            <p>English</p>
        </div>

        <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20}/>}
            
        </div>

        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex-col' : 'absolute left-[-100%]'}>
            <ul>
                {/* <h1>Aman.</h1>            */}
                <img className='h-[100px] p-4' src={logoAman} />
                <li className='border-b'>Tentang Kami</li>
                <li className='border-b'>Kerja Sama</li>
                <li className='border-b'>Publikasi</li>
                <li className='border-b'>Berita</li>
                <li className='border-b'>Organisasi</li>
                <div className='flex flex-col'>
                    <button className='my-6'>Search</button>
                </div>
                <div className='flex justify-between my-6'>
                    <FaFacebook className='icon'/>
                    <FaTwitter className='icon'/>
                    <FaInstagram className='icon'/>
                    <FaPinterest className='icon'/>
                    <FaYoutube className='icon'/>
                </div>
            </ul>
        </div>
    </div>
    
  )
}

export default Navbar