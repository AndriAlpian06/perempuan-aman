import React from 'react'
import news1 from '../assets/news1.jpeg'
import news2 from '../assets/news2.jpeg'

const News = () => {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='text-3xl text-center my-20'>News</h2>

            <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-4 pt-4'>
                <div className='flex'>
                    <div>
                        <img className='float-left px-2' src={news1} width={150} height={150}/>
                        <p className='text-lg pb-2'>Indigenous Women: Every day is Earth Day for Us</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <img className='float-left px-2' src={news2} width={150} height={150}/>
                        <p className='text-lg pt-2 pb-2'>The Eighth Awakening Day of The Indigenous Women of the Archipelago: While in Pandemic, Indigenous Women Remain Unstoppable</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <img className='float-left px-2' src={news1} width={150} height={150}/>
                        <p className='text-lg pb-2'>THE FOURTH NATIONAL WORK MEETING: PEREMPUAN AMAN TOWARDS THE THIRD NATIONAL GATHERING 2020</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <img className='float-left px-2' src={news2} width={150} height={150}/>
                        <p className='text-lg pt-2 pb-2'>Indigenous Women from All Over the World Joined Terra Livre Camp 2019</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <img className='float-left px-2' src={news1} width={150} height={150}/>
                        <p className='text-lg pb-2'>Indigenous Women: Every day is Earth Day for Us</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <img className='float-left px-2' src={news2} width={150} height={150}/>
                        <p className='text-lg pt-2 pb-2'>The Eighth Awakening Day of The Indigenous Women of the Archipelago: While in Pandemic, Indigenous Women Remain Unstoppable</p>
                    </div>
                </div>
            </div>
            {/* <div className='mx-auto'>
                <div>
                    <button className='mx-auto'>Read More ..</button>
                </div>
            </div> */}
        </div>

    </div>
  )
}

export default News