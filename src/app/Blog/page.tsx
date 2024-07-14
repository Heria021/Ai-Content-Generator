import { Badge } from '@/components/ui/badge'
import { PackageSearchIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function blog() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 my-10" >
            <div className=" flex flex-col items-center justify-center gap-2">
                <Badge variant={'outline'} className=' flex items-center gap-2'> <PackageSearchIcon size={18}/> Blog</Badge>
                <h2 className=' text-4xl font-medium mt-2'>Pick a plan that's right for you</h2>
                <p className=' text-lg font-normal'>No hidden fees, just simple and affordable plans tailored to your needs.</p>
            </div>

            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                    <div className=" border-border border rounded-md shadow-sm overflow-hidden">
                        <Image src={'https://tx.shadcn.com/_next/image?url=%2Fimages%2Fblog%2Fblog-post-1.jpg&w=1920&q=75'} alt='blog' width={400} height={0}/>
                    </div>
                    <div className=" flex flex-col gap-1 p-1">
                        <h2 className='text-2xl font-bold'>Preview Mode for Headless CMS</h2>
                        <p className=' text-base max-w-sm'>Tailwind removes all of the default browser styling from paragraphs, headings, lists and more.</p>
                        <p className=' text-sm font-light'>9, April 2024</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className=" border-border border rounded-md shadow-sm overflow-hidden">
                        <Image src={'https://tx.shadcn.com/_next/image?url=%2Fimages%2Fblog%2Fblog-post-1.jpg&w=1920&q=75'} alt='blog' width={400} height={0}/>
                    </div>
                    <div className=" flex flex-col gap-1 p-1">
                        <h2 className='text-2xl font-bold'>Preview Mode for Headless CMS</h2>
                        <p className=' text-base max-w-sm'>Tailwind removes all of the default browser styling from paragraphs, headings, lists and more.</p>
                        <p className=' text-sm font-light'>9, April 2024</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className=" border-border border rounded-md shadow-sm overflow-hidden">
                        <Image src={'https://tx.shadcn.com/_next/image?url=%2Fimages%2Fblog%2Fblog-post-1.jpg&w=1920&q=75'} alt='blog' width={400} height={0}/>
                    </div>
                    <div className=" flex flex-col gap-1 p-1">
                        <h2 className='text-2xl font-bold'>Preview Mode for Headless CMS</h2>
                        <p className=' text-base max-w-sm'>Tailwind removes all of the default browser styling from paragraphs, headings, lists and more.</p>
                        <p className=' text-sm font-light'>9, April 2024</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className=" border-border border rounded-md shadow-sm overflow-hidden">
                        <Image src={'https://tx.shadcn.com/_next/image?url=%2Fimages%2Fblog%2Fblog-post-1.jpg&w=1920&q=75'} alt='blog' width={400} height={0}/>
                    </div>
                    <div className=" flex flex-col gap-1 p-1">
                        <h2 className='text-2xl font-bold'>Preview Mode for Headless CMS</h2>
                        <p className=' text-base max-w-sm'>Tailwind removes all of the default browser styling from paragraphs, headings, lists and more.</p>
                        <p className=' text-sm font-light'>9, April 2024</p>
                    </div>
                </div>
            </div>

            <div className=" flex flex-col items-center justify-center gap-1">
                <h2 className=' text-base font-medium'>Generate content in minutes that whould cost $2000 to create</h2>
                <p className=' text-sm font-normal'>Yes, You read currectly. Save money grow faster</p>
            </div>
        </div>
  )
}

export default blog