import { UserButton, useUser } from '@clerk/nextjs'
import { ChevronsRight, MenuIcon, Text } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { ModeToggle } from './Mode'
import { usePathname } from 'next/navigation'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from './TemplateListSection'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'


function Header() {

  const { user } = useUser()
  const path = usePathname();

  const pathSplit = path.split('/').filter(segment => segment);
  const pathSlug = pathSplit[pathSplit.length - 1];
  const foundPage = pathSplit[1];

  const [pathBlog, setPathBlog] = useState('');
  const [pathPage, setPathPage] = useState('');
  const pathContent: TEMPLATE | undefined = Templates?.find((item) => item.slug === pathSlug)

  useEffect(() => {
    const pathContent = Templates?.find(item => item.slug === pathSlug);
    setPathPage(foundPage === undefined || foundPage === 'content' ? 'Dashboard' : foundPage);
    if (pathContent) {
      setPathBlog(pathContent.name);
    } else {
      setPathBlog('');
    }
  }, [pathSlug, Templates]);

  return (
    <div className='p-2 md:p-5 shadow-sm border-b-2 flex justify-between items-center'>

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
            <Link href={'/dashboard/billing'}><DropdownMenuItem>Billing</DropdownMenuItem></Link>
            <DropdownMenuSeparator />
            <Link href={'/dashboard/History'}><DropdownMenuItem>History</DropdownMenuItem></Link>
            <DropdownMenuSeparator />
            <Link href={'/dashboard/setting'}><DropdownMenuItem>Settings</DropdownMenuItem></Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className=" hidden md:flex gap-2 items-center md:p-2 md:px-3  max-w-lg">
        <Text size={24} />
        <p className='text-xl'>{pathPage}</p>
        {pathBlog && (
          <div className=' flex gap-2 items-center'>
            <ChevronsRight />
            <p className='text-xl'>{pathBlog}</p>
          </div>
        )}
      </div>
      <div className=" flex flex-row-reverse items-center gap-3">
        <div className=" hidden md:block">
          <p className=' leading-4 text-xs text-slate-500'>welcome</p>
          <h2 className=' leading-3 text-xs font-medium'>{user?.fullName}</h2>
        </div>
        <div className="flex items-center justify-center h-9 w-9 rounded-full outline-slate-900 border-2 ">
          <UserButton appearance={{
            elements: {
              userButtonAvatarBox: "w-9 h-9",
            }
          }} />
        </div>
        <ModeToggle />
      </div>
    </div>
  )
}

export default Header