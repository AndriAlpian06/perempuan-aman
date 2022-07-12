import React from "react";
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar";
import NavbarLama from "../components/NavbarLama";
import Home from './Home'
import BannerAbout from '../assets/about.jpeg';
import Side from "../components/Side";
import books from '../assets/books.png'
import Partners from "../components/Partners";
import BackToTopButton from "../components/BackToTopButton";
import Footer from "../components/Footer";
  
function About (){
  return(
    <>
      <Navbar />
      <div className="w-full h-[25rem] relative">
        <img className="w-[100%] h-[25rem] object-cover" src={BannerAbout} />
      </div>
      <div className="py-12 bg-white">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className='grid md:grid-cols-5 gap-1 px-2 text-center'>
            <div className='py-8 col-span-2' >
              <Side />
            </div>
            <div  className='py-2 col-span-3' >
              <h2 className='float-left pb-2 text-1xl'>Latar Belakang</h2><br /><br />
              <p className='text-justify'>Indonesia sebagai negara kepulauan terdiri atas suku bangsa yang didalamnya termasuk Masyarakat Adat. Data BPS tahun 2010 memperlihatkan di Indonesia terdapat 1.128 suku. Diperkirakan jumlah Masyarakat Adat sebanyak 70 juta jiwa dari 254,9 juta populasi di Indonesia. Diestimasi bahwa 49% dari jumlah Masyarakat Adat adalah jumlah Perempuan Adat, yakni 34,3 juta jiwa.</p><br/>
              <p className='text-justify'>Perempuan Adat di seluruh pelosok Nusantara masih mengalami beragam bentuk penyingkiran (eksklusi) dan kekerasan baik di ranah domestik, publik dan Negara (lihat Tsing 1998, KOMNAS Perempuan 2013& 2015). Keberadaan konsesi-konsesi di dalam wilayah adat oleh Negara berakibat pada penghancuran dan pengkerutan ruang hidup dan wilayah kelola Perempuan Adat. Sementara di sisi lain, ruang politik—baik di lingkup komunitas maupun Negara—bagi Perempuan Adat menyuarakan kepentingannya masih sempit dan terbatas. Situasi tersebut menyebabkan pencerabutan identitas dan pengetahuan Perempuan Adat serta pengerusakan atas tubuhnya, anak-anaknya serta jiwa-jiwa yang akan lahir.</p><br />
              <p className='text-justify'>Menyikapi penghancuran yang sistematis tersebut, Perempuan Adat menolak diam dengan menunjukkan peran dan posisinya sebagai pejuang perubahan sosial. Perempuan Adat sejak lama telah berjuang dan melawan berbagai bentuk penindasan, ketidakadilan, eksploitasi dan perampasan atas hak-haknya baik sebagai perempuan dan Perempuan Adat yang diakibatkan dari tatanan kebijakan global, nasional, lokal dan komunitas yang belum berpihak dan diskriminatif terhadap Perempuan Adat. Didasari rasa senasib sepenanggungan serta cita-cita bersama, Perempuan Adat berkumpul dan menggalang kekuatan yang tangguh bersama PEREMPUAN AMAN sehingga mampu mewujudkan kehidupan bermasyarakat yang setara, adil dan berkelanjutan.</p><br />
              <p className='text-justify'>Persekutuan Perempuan Adat Nusantara AMAN (PEREMPUAN AMAN) adalah organisasi sayap Aliansi Masyarakat Adat Nusantara (AMAN) yang dideklarasikan pada tanggal 16 April 2012 di Tobelo, Halmahera Utara Provinsi Maluku Utara. Organisasi ini didirikan berdasar pengalaman bahwa Perempuan Adat membutuhkan wadah selain AMAN sebagai tempat belajar dan mengkonsolidasikan diri untuk mampu menyuarakan kepentingannya sendiri. Dalam rangka itulah, PEREMPUAN AMAN didirikan untuk mampu memfasilitasi Perempuan-Perempuan Adat mengorganisir diri, pengetahuan dan hak-haknya. Organisasi ini beranggotakan individu Perempuan Adat yang berasal dari komunitas anggota AMAN.</p><br />
              <h2 className='text-justify text-1xl'>Visi PEREMPUAN AMAN</h2><br />
              <p className='text-justify font-bold text-1xl'>“Perempuan Adat berdaulat atas dirinya, kehidupannya, wilayah hidupnya, masyarakat dan Negara dalam rangka mewujudkan cita-cita Masyarakat Adat yang Setara, Berdaulat, Mandiri, dan Bermartabat.”</p><br/>
              <h2 className='text-justify text-1xl'>Misi PEREMPUAN AMAN yaitu:</h2><br />
              <ol className="list-decimal">
                <li className='text-justify ml-6'>Memperkuat identitas, kepercayaan diri, harkat dan martabat Perempuan Adat.</li>
                <li className='text-justify ml-6'>Membela dan memperjuangkan pengakuan, penghormatan, perlindungan dan pemenuhan hak-hak Perempuan Adat serta penghapusan segala bentuk diskriminasi terhadap Perempuan Adat</li>
                <li className='text-justify ml-6'>Memastikan adanya pengakuan terhadap pengetahuan dan ketrampilan Perempuan Adat dalam pengelolaan sumberdaya alam dan sumberdaya lainnya, serta nilai-nilai spiritual dan budaya</li>
                <li className='text-justify ml-6'>Memastikan generasi muda melanjutkan pengetahuan dan keterampilan Perempuan Adat</li>
                <li className='text-justify ml-6'>Memastikan terciptanya kesetaraan dan keadilan gender di dalam keluarga, komunitas,
                organisasi induk (AMAN), organisasi sayap, dan badan otonom serta negara</li>
                <li className='text-justify ml-6'>Membangun, mengembangkan dan memperkuat kader-kader penggerak dan pemimpin Perempuan Adat</li>
                <li className='text-justify ml-6'>Memastikan adanya kebijakan yang berpihak kepada kepentingan dan Pemenuhan Hak Perempuan Adat</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Partners />
      <BackToTopButton />
      <Footer />
    </>
  )
}
  
export default About;