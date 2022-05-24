import React from 'react'
import books from '../assets/books.png'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Books = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div className='w-full my-32' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <div className='max-w-[1240px] mx-auto'>

            <div className='grid md:grid-cols-5 gap-1 px-2 text-center'>
                <div className='py-8 col-span-2' >
                    <img className='mx-auto' src={books} />
                </div>
                <div  className='py-2 col-span-3' >
                    <p className='float-left pb-2 text-1xl'>Salam Berkeadilan dan Setara,</p><br /><br />
                    <p className='float-left pb-2 text-1xl'>Untuk Perempuan Adat seluruh Nusantara,</p><br /><br/>
                    <p className='text-justify text-1xl'>Dengan penuh rasa syukur, telah terbit Buletin Ina Tana PEREMPUAN AMAN Edisi Pertama 2018 “Pentingnya RUU Masyarakat Adat”. Tulisan-tulisan didalamnya adalah hasil torehan dari tangan Perempuan Adat, berasal dari kampung-kampung yang tersebar di seluruh Nusantara.</p><br/>
                    <p className='text-justify text-1xl text-slate-500'>"Mereka, perempuan adat bahkan tidak percaya atau bahkan tidak dipercayai dapat menulis. Stigma atau label itu kuat sekali tertanam sehingga proses menghadirkan tulisan-tulisan perempuan adat ini berada dalam genggaman kita menjadi suatu perjalanan yang menantang bagi tim redaksi."</p><br />
                    <p className='text-justify text-orange-300 text-sm'>-Devi Anggraini, Ketua Umum PEREMPUAN AMAN dalam Tajuk Ina.</p><br />
                    <p className='text-justify'>Selamat Membaca…</p><br />
                    <p className='text-justify'>Salam Semangat!</p><br />
                    <p className='text-justify'>Tim Redaksi Ina Tana</p><br />
                    <div>
                        <button className='float-left transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Unduh</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Books