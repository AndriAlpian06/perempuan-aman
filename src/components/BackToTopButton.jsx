import React from 'react'
import { useEffect,useState } from 'react'
import { AiOutlineUp } from 'react-icons/ai';

function BackToTopButton () {
    const [backToTopButton,setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div className='App'>
        {backToTopButton && (
        <button style={{
        position: 'fixed',
        bottom: '50px',
        right: '50px',
        height: '50px',
        width: '50px',
        fontSize: '50px'
        }}
        onClick={scrollUp}
        ><AiOutlineUp className='w-6 h-6'/>
        </button>
        )
        }
    </div>
  )
}

export default BackToTopButton