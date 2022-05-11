import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';


const Visi = () => {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='text-3xl text-center'>Visi dan Isu Strategis PEREMPUAN AMAN</h2>
            <p className='text-2xl py-8 text-gray-500 text-center'>
            Perempuan Adat berdaulat atas dirinya, kehidupannya dan wilayah hidupnya
dalam rangka mewujudkan Masyarakat Adat yang berdaulat, mandiri dan bermartabat
            </p>

            <div className='grid mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600' />
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Pembanguan Kapasitas</h3>
                        <p className='text-lg pt-2 pb-4'>Peningkatan kapasitas perempuan adat di berbagai aspek seperti politik, hukum, ekonomi, dan ekologi baik di lingkup domestik, publik maupun Negara.</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600' />
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'> Pengetahuan</h3>
                        <p className='text-lg pt-2 pb-4'>Pendokumentasian pengetahuan dan pengalaman perempuan adat</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600' />
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Advokasi</h3>
                        <p className='text-lg pt-2 pb-4'>Advokasi kebijakan atas hak-hak perempuan adat.</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <CheckIcon className='w-7 mr-4 text-green-600' />
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Identitas</h3>
                        <p className='text-lg pt-2 pb-4'>Membangun dan memperkuat kesadaran identitas sebagai perempuan dan perempuan adat.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Visi