import React from 'react'
import aman from '../assets/aman1.png'
import bpan from '../assets/bpan.png'
import partnership3 from '../assets/partnership3.png'
import partnership4 from '../assets/partnership4.png'
import partnership5 from '../assets/partnership5.png'

const Partners = () => {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>

            <div className='grid md:grid-cols-5 gap-1 px-2 text-center'>
                <div className='py-8' >
                    <img className='mx-auto' src={aman} />
                </div>
                <div  className='py-8' >
                    <img className='mx-auto' src={bpan} />
                </div>
                <div className='py-8' >
                    <img className='mx-auto' src={partnership3} />
                </div>
                <div  className='py-8' >
                    <img className='mx-auto' src={partnership4} />
                </div>
                <div className='py-8' >
                    <img className='mx-auto' src={partnership5} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners