import { Button } from '@/components/ui/button'
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import React from 'react'
import { Grid2X2, SlidersVertical, Smile, ThumbsUp } from 'lucide-react'

const parks = [
    {
        logo: Smile,
        name: 'Accessible',
        desc: 'All components strictly follow WAI-ARIA standards.'
    },
    {
        logo: SlidersVertical,
        name: 'Themable',
        desc: 'Fully customize all components to your brand with theme support and style props.'
    },
    {
        logo: Grid2X2,
        name: 'Composable',
        desc: 'Compose components to fit your needs and mix them together to create new ones.'
    },
    {
        logo: ThumbsUp,
        name: 'Productive',
        desc: 'Designed to reduce boilerplate and fully typed, build your product at speed.'
    }
]

function Hero() {

    return (
        <div className="flex flex-col items-center justify-center gap-20 md:gap-28 my-24" >
            <div className="p-4 flex flex-col items-center justify-center gap-5 text-center">
                <Badge variant={'outline'} className=' font-medium text-sm'>Support us on with GitHub stars 🤩</Badge>
                <div className="font-medium text-4xl md:text-6xl max-w-5xl ">
                    <span className=' bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500 '>Unleash Your Create with TrendScript Ai - The Latest in SaaS Innovation.</span>
                </div>
                <p className='max-w-3xl text-sm md:text-2xl text-foreground'>Welcome to Create.ai, your ultimate Saas platform for unleasing creativty. Whether you're designing, developing or inovating.</p>
                <div className="flex gap-4 items-center justify-center">
                    {/* <Link href={'/dashboard'}><Button variant={'secondary'}  className='font-medium text-sm md:text-base my-4' >Buy a Plan </Button></Link> */}
                    <Link href={'/dashboard'}><Button className='font-medium text-sm md:text-base my-4' >Get Started For Free  </Button></Link>
                </div>
            </div>

            <div className=" flex items-center justify-center">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2 md:px-16 lg:px-28 ">
                    {parks.map((park, index) => (
                        <div className=" p-4 flex flex-col items-start gap-3">
                            <div key={index} className=" bg-blue-100 rounded-full p-2"><park.logo className=' text-primary' size={17} /></div>
                            <div className=" text-lg"><h2>{park.name}</h2></div>
                            <div className=" text-secondary-foreground opacity-60 text-base"><p>{park.desc}</p></div>
                        </div>
                    ))}
                </div>
            </div> 

            {/* <div className="flex justify-center items-center">
                <div className="relative z-20 p-8 md:p-10">
                    <div className="absolute top-3 bottom-3 left-3 right-3 bg-orange-500 -rotate-2 bg-opacity-40 rounded-lg z-0"></div>
                    <div className="absolute top-3 bottom-3 left-3 right-3 bg-violet-500 rotate-2 bg-opacity-40 rounded-lg z-0"></div>
                    <div className="w-full md:max-w-6xl z-10 relative">
                        <img className="w-full object-contain rounded-lg shadow-lg border-border" src="/workflow/generate.png" alt="" />
                    </div>
                </div>
            </div> */}

            
        </div>
    )
}

export default Hero