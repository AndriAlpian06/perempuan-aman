import React from 'react'
import news1 from '../assets/news1.jpeg'
import news2 from '../assets/news2.jpeg'
import newsKartini from '../assets/newsKartini.jpeg'
import newsPidato from '../assets/newsPidato.jpeg'
import hariHutan from '../assets/Hari-Hutan.jpeg'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const News = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    
  return (
    <div className='py-12 bg-white' data-aos="fade-up" data-aos-duration="2000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    News
                </p>
                <div className='grid sm:grid-cols-4 lg:grid-cols-4 gap-4 pt-4'>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-96">
                        <a href="#">
                            <img className="rounded-t-lg" src={newsKartini} alt="" />
                        </a>
                        <div className="p-5">
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Hari Kartini: “Patahkan Stigma, Diskriminasi, dan Ketidakadilan terhadap Perempuan Adat”</p>
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
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Audit Lembaga Persekutuan Perempuan Adat Nusantara (PEREMPUAN AMAN) 2020 & 2021</p>
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
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">PIDATO KETUA UMUM (Hari Kebangkitan Perempuan Adat Nusantara 2022 & 10 Tahun PEREMPUAN AMAN)</p>
                            <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={hariHutan} alt="" />
                        </a>
                        <div className="p-5">
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Hari Hutan Sedunia</p>
                            <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-96">
                        <a href="#">
                            <img className="rounded-t-lg" src={newsKartini} alt="" />
                        </a>
                        <div className="p-5">
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Hari Kartini: “Patahkan Stigma, Diskriminasi, dan Ketidakadilan terhadap Perempuan Adat”</p>
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
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Audit Lembaga Persekutuan Perempuan Adat Nusantara (PEREMPUAN AMAN) 2020 & 2021</p>
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
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">PIDATO KETUA UMUM (Hari Kebangkitan Perempuan Adat Nusantara 2022 & 10 Tahun PEREMPUAN AMAN)</p>
                            <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={hariHutan} alt="" />
                        </a>
                        <div className="p-5">
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Hari Hutan Sedunia</p>
                            <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News