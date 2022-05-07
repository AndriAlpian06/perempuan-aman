import React from 'react'
import backgroundVideo from '../assets/background.mp4'
import {BsSearch} from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' src={backgroundVideo} autoPlay loop muted/>
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1 className='uppercase'>perempuan Aman</h1>
            <h2>Persekutuan Perempuan Adat Nusantara</h2>
            <p className='py-4 mx-auto max-w-[700px]'>Persekutuan Perempuan Adat Nusantara AMAN (PEREMPUAN AMAN) adalah organisasi sayap Aliansi Masyarakat Adat Nusantara (AMAN) yang dideklarasikan pada tanggal 16 April 2012 di Tobelo, Halmahera Utara Propinsi Maluku Utara.</p>
            <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
                <div>
                    <input className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none' type="text" placeholder='Search' />
                </div>
                <div>
                    <button><AiOutlineSearch size={20} className='icon' style={{color: '#ffffff'}} /></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero