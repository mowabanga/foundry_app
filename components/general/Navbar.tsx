import React from 'react'
import { Button } from '../ui/button'
import { ThemeToggle } from './ThemeToggle'


const Navbar = () => {
  return (
    <nav className='mt-4'>
      <div className='flex justify-end items-center gap-2 md:gap-4 w-full'>
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Navbar