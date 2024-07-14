'use client'
import { Github, Instagram, MessageCircleMoreIcon, Twitter } from 'lucide-react'
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Footer() {
    const path = usePathname();
    const isHidden = path.startsWith('/dashboard') || path.startsWith('/sign-in') || path.startsWith('/sign-up');


    return (
        <div className={`${isHidden ? "hidden" : ""} w-full`}>
        <hr className='border-border' />
        <div className="flex flex-col sm:flex-row justify-between max-w-[80%] items-center p-4 m-auto">
            <div className="flex items-center gap-6 justify-start mb-4 sm:mb-0">
                <MessageCircleMoreIcon size={26} />
                <Instagram />
                <Github />
                <Twitter />
            </div>
            <div className="flex flex-wrap items-center gap-6 justify-between text-sm">
                <Link href={'/Blog'}><p className='cursor-pointer hover:text-primary'>Blog</p></Link>
                <p className='cursor-pointer hover:text-primary'>Affiliate</p>
                <p className='cursor-pointer hover:text-primary'>Contact</p>
                <Link href={'/Term&Condition'}><p className='cursor-pointer hover:text-primary'>Terms</p></Link>
                <Link href={'/Privacy&Policy'}><p className='cursor-pointer hover:text-primary'>Privacy </p></Link>
            </div>
        </div>
    </div>
    
    )
}

export default Footer