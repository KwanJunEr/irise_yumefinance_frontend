'use client'
import { sidebarLinks } from '@/constant/links';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { cn } from '@/lib/utils';
import Footer from './Footer';

const Sidebar = () => {
    const pathname = usePathname();
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4 '>
            <Link href = "/dashboard" className="mb-12 cursor-pointer flex items-center gap-2">
                <Image
                     src="/logo.svg"
                     width={34}
                     height={34}
                     alt="Horizon logo"
                     className="size-[24px] max-xl:size-14"
                />
                <h1 className='sidebar-logo'>YumeFinance</h1>
            </Link>
            {sidebarLinks.map((item)=>{
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                return(
                    <Link href={item.route} key={item.label} className={cn('sidebar-link',{'bg-bankGradient': isActive})}>
                        <div className='relative size-6'>
                          <item.icon className= {cn('w-full h-full text-black',{'text-white' : isActive})}/>
                        </div>
                        <p className={cn("sidebar-label", { "!text-white": isActive })}>
                    {item.label}
                        </p>
                    </Link>
                )
            })}
        </nav>
        <Footer type='desktop'/>
    </section>
  )
}

export default Sidebar
