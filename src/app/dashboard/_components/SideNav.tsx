'use client'
import { FileClock, Github, Home, Instagram, LayoutGrid, Mail, PenLineIcon, PlaneTakeoff, Settings, Twitter, WalletCards } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import UsageRadical from './UsageRadical'
import UsageCredit from './UsageCredit'
import UsageTrack from './UsageTrack'

function SideNav() {
  const path = usePathname();
  const menuList = [
    {
      name: 'Home',
      icon: Home,
      path: '/'
    }, {
      name: 'Dashboard',
      icon: LayoutGrid,
      path: '/dashboard'
    }, {
      name: 'History',
      icon: FileClock,
      path: '/dashboard/History'
    }, {
      name: 'Billing',
      icon: WalletCards,
      path: '/dashboard/billing'
    }, {
      name: 'Setting',
      icon: Settings,
      path: '/dashboard/setting'
    }
  ]
  return (
    <div className='text-secondary bg-primary relative h-screen py-5'>
      <div className=" px-3 flex rounded-sm justify-center items-center gap-2">
        <img src="newCat.png" className='w-[240px] block dark:hidden' alt="" />
        <img src="drkCat.png" className='w-[240px] hidden dark:block' alt="" />
      </div>
      <div className=" px-5 mt-10">
        {menuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <div className={`flex gap-2 mb-2 p-3 hover:bg-secondary hover:text-primary rounded-full cursor-pointer ${path === menu.path && 'bg-secondary text-primary'}`}>
              <div>
                <menu.icon />
              </div>
              <h2>{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className=" absolute bottom-10 left-0 w-full">

        <div className="p-4">
          <UsageTrack />
        </div>

        <div className="px-10 flex justify-between items-center">
          <Mail />
          <Github />
          <Twitter />
          <Instagram />
        </div>
      </div>
    </div>
  )
}

export default SideNav