import React from 'react'
import news1 from '../assets/news1.jpeg'
import news2 from '../assets/news2.jpeg'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const News = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
  return (
    <div className='w-full my-32' data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
        <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='text-3xl text-center my-20'>News</h2>

            <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-4 pt-4'>
                <div className='flex'>
                    <div>
                        <img className='float-left px-4' src={news1} width={150} height={150}/>
                        <p className='text-lg pb-2'>Hari Kartini: “Patahkan Stigma, Diskriminasi, dan Ketidakadilan terhadap Perempuan Adat”</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <img className='float-left px-4' src={news2} width={150} height={150}/>
                        <p className='text-lg pb-2'>Audit Lembaga Persekutuan Perempuan Adat Nusantara (PEREMPUAN AMAN) 2020 & 2021</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <img className='float-left px-4' src={news1} width={150} height={150}/>
                        <p className='text-lg pb-2'>PIDATO KETUA UMUM (Hari Kebangkitan Perempuan Adat Nusantara 2022 & 10 Tahun PEREMPUAN AMAN)</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <img className='float-left px-4' src={news2} width={150} height={150}/>
                        <p className='text-lg pb-2'>Hutan memiliki arti sangat penting bagi seluruh kehidupan kita semua</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <img className='float-left px-2' src={news1} width={150} height={150}/>
                        <p className='text-lg pb-2'>Tujuan-Tujuan Pembangunan Berkelanjutan dan Masyarakat Adat: Sebuah Panduan Praktis Bagi Masyarakat Adat (Versi II)</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <img className='float-left px-2' src={news2} width={150} height={150}/>
                        <p className='text-lg pb-2'>Apa Itu Credit Union Pancoran Kehidupan (CU Randu) ?</p>
                    </div>
                </div>
            </div>
            
            <div className='mt-2'>
                <button className='justify-items-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Read More ..</button>    
            </div>
        </div>

    </div>
  )
}

export default News