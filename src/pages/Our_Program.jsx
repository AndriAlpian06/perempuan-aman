import React from "react";
import BackToTopButton from "../components/BackToTopButton";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import kerjaSama from '../assets/our_program.jpeg'
import Side from "../components/Side";
  
const Our_Program = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[25rem] relative">
        <img className="w-[100%] h-[25rem] object-cover" src={kerjaSama} />
      </div>
      <div className="py-12 bg-white">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className='grid md:grid-cols-5 gap-1 px-2 text-center'>
            <div className='py-8 col-span-2' >
              <Side />
            </div>
            <div  className='py-2 col-span-3' >
              <h1 className='float-left pb-2'>PROGRAM KERJA</h1><br/><br/>
              <p className='text-justify font-bold text-2xl'>Periode: Tahun 2021-2026</p><br/>
              <p className='text-justify'>1. Memperkuat struktur Kelembagaan dan anggota PEREMPUAN AMAN, serta kepemimpinan Perempuan Adat :</p>
              <ol className="list-disc">
              <li className='text-justify ml-6'>Memperkuat system pengambilan keputusan di PEREMPUAN AMAN (memastikan terjadinya rapat-rapat di PEREMPUAN AMAN) berkoordinasi dengan Pengurus Besar, Badan Pengurus Harian Wilayah, Badan Pengurus Harian Daerah, Organisasi Sayap, Badan Otonom dan lainnya.</li>
              <li className='text-justify ml-6'>Mengembangkan mekanisme komunikasi internal organisasi antara PHKOM, PHD, PHW dengan Ketua Umum dan Dewan Nasional, untuk meningkatkan keaktifan dan efektifitas organisasi.</li>
              <li className='text-justify ml-6'>Merekrut anggota dan memfasilitasi terbentuknya struktur organisasi PEREMPUAN AMAN di Komunitas Adat, Daerah dan Wilayah.</li>
              <li className='text-justify ml-6'>Mengembangkan kapasitas pengurus dan anggota PEREMPUAN AMAN dalam berorganisasi.</li>
              <li className='text-justify ml-6'>Melakukan pendidikan pengorganisasian bagi anggota penggerak perempuan adat di Komunitas-Komunitas Adat Anggota AMAN.</li>
              <li className='text-justify ml-6'>Memastikan pengembangan, penguatan dan pengarusutamaan gender dan kebijakan khusus sementara (Affirmative Action) dalam organisasi induk (AMAN), organisasi sayap, dan badan otonom.</li>
              <li className='text-justify ml-6'>Pembuatan data dan kartu anggota PEREMPUAN AMAN.</li>
              <li className='text-justify ml-6'>Membangun jaringan strategis dan kerjasama PEREMPUAN AMAN di tingkat, lokal, regional, nasional dan internasional.</li>
              <li className='text-justify ml-6'>Memastikan penarikan iuran anggota PEREMPUAN AMAN serta mendorong adanya sumbangan-sumbangan dalam bentuk lainnya (hasil pertanian dll).</li><br />
              </ol>
              <p className='text-justify'>2. Menyelenggarakan pendidikan kritis dan peningkatan kapasitas Perempuan Adat :</p>
              <ol className="list-disc">
              <li className='text-justify ml-6'>Melakukan pendidikan kritis tentang pelanggaran hak Perempuan Adat dalam pengelolaan sumber daya alam, kebudayaan, diskriminasi, kekerasan, kesetaraan, keadilan gender dan kelompok rentan, serta pendidikan lingkungan, kesehatan (termasuk kesehatan ibu dan anak) dan kesehatan reproduksi bagi Perempuan Adat.</li>
              <li className='text-justify ml-6'>Melakukan pendidikan politik dan kepemimpinan Perempuan Adat.</li>
              <li className='text-justify ml-6'>Mengembangkan program beasiswa bagi Perempuan Adat.</li>
              <li className='text-justify ml-6'>Mengembangkan pendidikan adat berbasis pengetahuan perempuan adat menggunakan pendekatan pendidikan yang melekat dalam kehidupan masyarakat adat yang kolektif, disertai dengan Pendidikan melek aksara dan angka.</li>
              <li className='text-justify ml-6'>Melakukan penyadaran tentang disabilitas, identifikasi penyandang disabilitas dan melakukan pendokumentasian tentang sistem pengurusan penyandang disabilitas di komunitas-komunitas adat.</li>
              </ol>
              <p className='text-justify'>3. Memperkuat resiliensi (daya tangguh) perempuan adat dan komunitas, dalam merespon berbagai krisis (krisis pandemic, perubahan iklim, ekonomi, konflik dan lain-lain) yang berdampak pada perempuan adat dan komunitas :</p>
              <ol className="list-disc">
              <li className='text-justify ml-6'>Melakukan penyadaran tentang berbagai krisis yang berdampak pada Perempuan Adat dan komunitas.</li>
              <li className='text-justify ml-6'>Melakukan upaya-upaya untuk meningkatkan produksi pangan secara organik yang sesuai dengan pengetahuan dan teknologi lokal di komunitas.</li>
              <li className='text-justify ml-6'>Memperkuat sistem kesehatan masyarakat adat dengan melakukan identifikasi dan praktek pengolahan obat tradisional.</li>
              <li className='text-justify ml-6'>Melakukan upaya pemulihan dampak krisis di komunitas, khususnya yang berkaitan dengan perempuan adat.</li>
              <li className='text-justify ml-6'>Melakukan identifikasi pengetahuan tradisional dan inovasi tentang bagaimana komunitas adat merespon krisis.</li>
              <li className='text-justify ml-6'>Membuat mekanisme emergency response/urgent action (aksi cepat) dalam penanganan krisis (termasuk team Tanggap Darurat).</li>
              </ol>
              <p className='text-justify'>4. Mengelola Informasi Kritis, Dokumentasi dan Diseminasi Pengetahuan</p>
              <ol className="list-disc">
              <li className='text-justify ml-6'>Memastikan pengetahuan, pengalaman dan sistem penguasaan perempuan adat termuat dalam informasi data sosial peta wilayah adat, termasuk pemetaan kekerasan terhadap perempuan adat berbasis budaya.</li>
              <li className='text-justify ml-6'>Melakukan publikasi kritis tentang perempuan adat dalam bentuk media cetak, audio-visual, dan media sosial.</li>
              <li className='text-justify ml-6'>Melakukan pendokumentasian, riset dan pembuatan buku tentang berbagai bentuk ketidakadilan gender yang dialami perempuan adat, termasuk kekerasan, pelanggaran HAM perempuan adat dan catatan pembelajaran dari pengorganisasian perempuan adat.</li>
              <li className='text-justify ml-6'>Melakukan pendokumentasian bahasa dan kebudayaan, antara lain : benih, obat-obatan, tenun, kerajinan, cerita/legenda/dongeng, musik serta alat musik, lagu daerah dan tari-tarian, ritual adat, bangunan, pakaian, rumah adat, alat kerja, makanan tradisional, permainan tradisional, senjata tradisional, situs dan lainnya.</li>
              <li className='text-justify ml-6'>Membangun jaringan/networking dengan lembaga penelitian, akademisi, media lokal, media nasional, media internasional, lembaga pemerintah mulai tingkat lokal hingga nasional, organisasi dan lembaga lainnya.</li>
              </ol>
              <p className='text-justify'>5. Melakukan upaya advokasi kebijakan di berbagai level terkait hak-hak Perempuan Adat :</p>
              <ol className="list-disc">
              <li className='text-justify ml-6'>Mengawal pembahasan rancangan undang-undang Masyarakat Adat, maupun peraturan turunannya (Perda, Perbup, Perdes, dll) yang terkait dengan sumber daya alam dan kebudayaan agar berpihak kepada Perempuan Adat.</li>
              <li className='text-justify ml-6'>Memfasilitasi dan mengawal perempuan adat untuk masuk dalam parlemen (Kabupaten/Kota, Provinsi dan Pusat), serta membangun mekanisme kontrol atau tali mandat antara organisasi dengan utusan politik perempuan adat terpilih.</li>
              <li className='text-justify ml-6'>Mendorong keterwakilan perempuan adat dalam struktur lembaga adat dan lembaga desa di komunitas-komunitas adat khususnya anggota AMAN.</li>
              <li className='text-justify ml-6'>Melakukan upaya-upaya perlindungan dan pendampingan perempuan adat dan perempuan adat pembela HAM, dalam pemenuhan Hak Asasi Manusia, terutama di wilayah konflik, termasuk bantuan hukum/paralegal.</li>
              <li className='text-justify ml-6'>Membangun mekanisme penanganan dan pemulihan berbasis komunitas bagi perempuan adat korban kekerasan.</li>
              <li className='text-justify ml-6'>Menyediakan data tentang kondisi pemenuhan HAM perempuan adat sebagai bahan dalam menyusun laporan ke berbagai mekanisme HAM di nasional dan internasional.</li>
              <li className='text-justify ml-6'>Memastikan dan memfasilitasi keterlibatan perempuan adat dan kelompok rentan lainnya dalam proses pemetaan dan registrasi wilayah adat serta proses mewujudkan pengakuan atas wilayah adat.</li>
              <li className='text-justify ml-6'>Mendorong pelibatan Perempuan Adat melalui PEREMPUAN AMAN dalam proses-proses pengambilan keputusan terkait rencana pembentukan Ibu Kota Negara Baru.</li>
              </ol>
              <p className='text-justify'>6. Memfasilitasi penguatan ekonomi Perempuan Adat :</p>
              <ol className="list-disc">
              <li className='text-justify ml-6'>Melakukan peningkatan kapasitas managemen usaha perempuan adat.</li>
              <li className='text-justify ml-6'>Memperkuat pengetahuan dan ketrampilan perempuan adat dalam pengembangan produk, peningkatan mutu, serta pemasaran melalui berbagai pelatihan.</li>
              <li className='text-justify ml-6'>Membangun akses jaringan, permodalan dan pengembangan lembaga pendanaan usaha perempuan adat, serta akses pasar.</li>
              <li className='text-justify ml-6'>Mengembangkan teknologi yang ramah terhadap perempuan adat dan lingkungan.</li>
              <li className='text-justify ml-6'>Penguatan ekonomi melalui unit usaha mandiri perempuan adat, seperti Badan Usaha Milik Masyarakat Adat (BUMMA), koperasi-koperasi perempuan adat dll.</li>
              <li className='text-justify ml-6'>Mengembangkan usaha serta mempromosikan makanan dan minuman tradisional sebagai salah satu usaha ekonomi Perempuan Adat.</li>
              </ol>
              <div>
                <a href="https://perempuan.aman.or.id/wp-content/uploads/2021/04/Garis-Besar-Program-Kerja-PEREMPUAN-AMAN-2021-2026.pdf" target="_blank" rel="noreferrer">
                  <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Download Program Kerja 2021 - 2026</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Partners />
      <BackToTopButton />
      <Footer />
    </>
  );
};
  
export default Our_Program;