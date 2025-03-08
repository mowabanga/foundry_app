import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ThemeToggle } from './ThemeToggle'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='flex items-center justify-between py-5'>
        <div className='flex items-center gap-4'>
            <ThemeToggle />
            <Button variant="outline" className=''>
                Login
            </Button>
        </div>


    </nav>
  )
}

export default Navbar