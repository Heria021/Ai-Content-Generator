import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={'/dashboard/content/'+item.slug}>
      <div className=' p-5 rounded-md flex flex-col shadow-sm border border-border bg-card text-card-foreground gap-2 md:gap-3 cursor-pointer  hover:scale-105 transition-all'>
        <Image src={item.icon} width={50} height={50} alt='icon' />
        <h2 className=' text-lg font-medium'>{item.name}</h2>
        <p className=' text-sm md:text-base text-secondary-foreground opacity-65 font-light line-clamp-3'>{item.desc}</p>
      </div>
    </Link>
  )
}

export default TemplateCard