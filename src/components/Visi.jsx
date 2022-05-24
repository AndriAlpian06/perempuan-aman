import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import { RiNumber1,RiNumber2,RiNumber3,RiNumber4 } from 'react-icons/ri';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Visi = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div className='py-12 bg-white' data-aos="fade-up" data-aos-duration="2000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Visi dan Isu Strategis PEREMPUAN AMAN
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Perempuan Adat berdaulat atas dirinya, kehidupannya dan wilayah hidupnya
dalam rangka mewujudkan Masyarakat Adat yang berdaulat, mandiri dan bermartabat.
            </p>
            </div>

            <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                    <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#8756c2] text-white">
                        <RiNumber1 className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Pembanguan Kapasitas</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">Peningkatan kapasitas perempuan adat di berbagai aspek seperti politik, hukum, ekonomi, dan ekologi baik di lingkup domestik, publik maupun Negara.</dd>
                </div>

                <div className="relative">
                    <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#8756c2] text-white">
                        <RiNumber2 className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Pengetahuan</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">Pendokumentasian pengetahuan dan pengalaman perempuan adat.</dd>
                </div>

                <div className="relative">
                    <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#8756c2] text-white">
                        <RiNumber3 className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Advokasi</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">Advokasi kebijakan atas hak-hak perempuan adat.</dd>
                </div>

                <div className="relative">
                    <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#8756c2] text-white">
                        <RiNumber4 className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Identitas</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">Membangun dan memperkuat kesadaran identitas sebagai perempuan dan perempuan adat.</dd>
                </div>
            </dl>
            </div>


      </div>
    </div>
  )
}

export default Visi