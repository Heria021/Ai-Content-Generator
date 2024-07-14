'use client';
import { ChevronDown, ChevronUp, MenuIcon, MoveRight } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState, useRef, RefObject } from 'react';
import { ModeToggle } from '@/app/dashboard/_components/Mode';
import { UserButton, useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import { usePathname } from 'next/navigation';
import Templates from '@/app/(data)/Templates';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
  const { user } = useUser();
  const path = usePathname();
  const [onList, setOnList] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleOnList = () => {
    setOnList(prev => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOnList(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const isHidden = path.startsWith('/dashboard') || path.startsWith('/sign-in') || path.startsWith('/sign-up');

  return (
    <div className={`${isHidden ? "hidden" : ""} relative w-full py-3 md:py-4 bg-primary text-primary-foreground`}>
      <div className="px-4 sm:w-full lg:max-w-[80%] m-auto flex justify-between items-center">

        <div className="flex items-center justify-center sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MenuIcon size={28} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link href={'/'}><DropdownMenuItem>Home</DropdownMenuItem></Link>
              <DropdownMenuSeparator />
              <Link href={'/dashboard'}><DropdownMenuItem>Dashboard</DropdownMenuItem></Link>
              <DropdownMenuSeparator />
              <Link href={'/Price'}><DropdownMenuItem>Pricing</DropdownMenuItem></Link>
              <DropdownMenuSeparator />
              <Link href={'/Blog'}><DropdownMenuItem>Blog</DropdownMenuItem></Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>


        <div className="flex items-center gap-12">
          <div className="flex gap-2 items-center">
            <img src="newCat.png" className=' w-[180px] md:w-[240px] block dark:hidden' alt="" />
            <img src="drkCat.png" className=' w-[180px] md:w-[240px] hidden dark:block' alt="" />
          </div>
        </div>

        <div className="hidden md:flex items-center mr-20 gap-8">

          <Link href={'/'}>
            <h2 className="cursor-pointer hover:text-secondary-foreground">Home</h2>
          </Link>

          <Link href={'/dashboard'}>
            <h2 className="cursor-pointer hover:text-secondary-foreground">Dashboard</h2>
          </Link>

          <div ref={ref}>
            <h2 onMouseDown={handleOnList} className="flex items-center gap-1 cursor-pointer hover:text-secondary-foreground">AI Features {!onList ? <ChevronDown className='mt-1' size={18} /> : <ChevronUp className='mt-1' size={18} />}</h2>
            {onList && (
              <div className={`bg-primary absolute top-[100%] left-0 w-full`}>
                <div className="px-2 md:px-12 py-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                  {Templates.map((item, index) => (
                    <Link key={index} href={'/dashboard/content/' + item.slug} onClick={() => setOnList(false)}>
                      <div className="shadow-md rounded-sm border border-border flex items-start gap-2 px-4 py-2">
                        <div className="w-20 py-1">
                          <Image src={item.icon} className=' text-white' width={50} height={50} alt='icon' />
                        </div>
                        <div className="">
                          <h1>{item.name}</h1>
                          <p className=' line-clamp-2 text-sm opacity-80'>{item.desc}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href={'/Price'}>
            <h2 className="cursor-pointer hover:text-secondary-foreground">Pricing</h2>
          </Link>

          <Link href={'/Blog'}>
            <h2 className="cursor-pointer hover:text-secondary-foreground">Blog</h2>
          </Link>

        </div>

        <div className="flex gap-2 items-center">
          <div className="flex justify-between items-center gap-4 text-secondary-foreground">
            <ModeToggle />
            {user ? (
              <div className='flex flex-row-reverse gap-2 items-center justify-center'>
                <div className="hidden md:block">
                  <p className='leading-4 text-xs text-slate-300'>welcome</p>
                  <h2 className='leading-3 text-xs text-secondary font-medium'>{user?.fullName}</h2>
                </div>
                <div className="flex items-center justify-center h-9 w-9 rounded-full outline-slate-900 border-2">
                  <UserButton appearance={{
                    elements: {
                      userButtonAvatarBox: "w-9 h-9",
                    }
                  }} />
                </div>
              </div>
            ) : (
              <Link href={'/dashboard'}>
                <Button variant={'outline'} className='flex gap-2 text-secondary-foreground shadow-sm'>
                  Try for Free <MoveRight size={20} />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
