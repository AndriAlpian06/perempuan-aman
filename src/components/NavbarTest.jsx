import React from 'react'
import {Link} from 'react-router-dom'

export const NavbarTest = () => {
  return (
    <section className='flex space-x-4'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/our_program">Our Program</Link>
    </section>
  )
}
