import { DollarSign } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <header className='w-full h-16 px-4 lg:px-6 flex justify-between border-b sticky top-0 backdrop-blur-sm z-20 items-center  '>
        <div className='flex items-center gap-2'>
            <DollarSign className='h-6 w-6 text-primary'/>
            <span className='font-bold'>YumeFinance</span>            
        </div>
        <nav className='hidden md:flex gap-6'>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
        <div className='flex gap-4 items-center'>
            <Link href="/sign-in">
            <Button variant='ghost'>Sign In</Button>
            </Link>
            <Link href="/sign-up">
            <Button size="sm">Get Started</Button>
            </Link>
            
        </div>
    </header>
  )
}

export default Navbar
