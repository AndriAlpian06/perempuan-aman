import React from 'react'
import news1 from '../assets/news1.jpeg'
import news2 from '../assets/news2.jpeg'
import newsKartini from '../assets/newsKartini.jpeg'
import newsPidato from '../assets/newsPidato.jpeg'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const News = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
  return (
    <div className='w-full my-16' data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
        <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='text-3xl text-center my-20'>News</h2>

            <div className='grid sm:grid-cols-3 lg:grid-cols-3 gap-4 pt-4'>
                {/* <div className='flex'>
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
                </div> */}
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={newsKartini} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hari Kartini: “Patahkan Stigma, Diskriminasi, dan Ketidakadilan terhadap Perempuan Adat”</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={news2} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Audit Lembaga Persekutuan Perempuan Adat Nusantara (PEREMPUAN AMAN) 2020 & 2021</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={newsPidato} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PIDATO KETUA UMUM (Hari Kebangkitan Perempuan Adat Nusantara 2022 & 10 Tahun PEREMPUAN AMAN)</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                        </a>
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