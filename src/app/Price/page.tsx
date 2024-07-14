import Billing from '@/app/dashboard/billing/page'
import { Badge } from '@/components/ui/badge'
import React from 'react'
import { LucideCircleDollarSign } from 'lucide-react'

function Price() {
    return (
        <div className="flex flex-col text-center items-center justify-center gap-6 md:gap-10 my-10 p-2" >
            <div className=" flex flex-col items-center justify-center gap-1 md:gap-2 p-4">
                <Badge variant={'outline'} className=' flex items-center gap-2'><LucideCircleDollarSign size={16} /> Price</Badge>
                <h2 className=' text-4xl font-medium mt-5'>Pick a plan that's right for you</h2>
                <p className=' text-lg font-normal px-4'>No hidden fees, just simple and affordable plans tailored to your needs.</p>
            </div>
            <div className="">
                <Billing />
            </div>

            <div className=" flex flex-col text-center items-center justify-center gap-1 px-2">
                <h2 className=' text-base font-medium'>Generate content in minutes that whould cost $2000 to create</h2>
                <p className=' text-sm font-normal'>Yes, You read currectly. Save money grow faster</p>
            </div>
        </div>
    )
}

export default Price