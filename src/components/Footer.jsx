import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-[#8756c2] text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-2 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Perempuan Aman</h6>
                <ul>
                    <li className='py-1'>Sekretariat Nasional
Jl. Sempur Kaler Blok.7 No.17, RT.05/RW.01, Kota Bogor, Jawa Barat, 16129 Indonesia</li>
                    <li className='py-1'>+62 811 920 2062</li>
                    <li className='py-1'>perempuanaman@aman.or.id</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Aman House Jakarta</h6>
                <ul>
                    <li className='py-1'>Jl. Tebet Timur Dalam Raya No 11 A South Jakarta, Indonesia 12820</li>
                    <li className='py-1'>Telephone: +62 21 829 7954, 8370 6282</li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-white'>
        <p className='py-4'>2022 Workflow, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
        </div>
        </div>
    </div>
  )
}

export default Footer