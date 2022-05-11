import React, {useState} from 'react'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai' 
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaYoutube} from 'react-icons/fa'
import logoAman from '../assets/perempuan-aman.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
            <img onClick={handleNav} className={logo ? 'hidden' : 'block h-[100px] p-4'} src={logoAman} />
        </div>
        <ul className='hidden md:flex'>
            <li>Tentang Kami</li>
            <li>Kerja Sama</li>
            <li>Publikasi</li>
            <li>Berita</li>
            <li>Organisasi</li>
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