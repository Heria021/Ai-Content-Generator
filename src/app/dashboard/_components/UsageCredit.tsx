'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Rocket } from 'lucide-react'
import Link from 'next/link'

function UsageCredit({ totalUse }: { totalUse: any }) {
    return (
        <div className="mb-2">
            <div className=" flex items-center gap-4 bg-secondary p-4 rounded-lg">
                <div className="relative w-14 h-14 ">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                            className="text-gray-200 stroke-current"
                            strokeWidth="9"
                            cx="50"
                            cy="50"
                            r="40"
                            fill="transparent"
                        ></circle>
                        <circle
                            className="text-primary progress-ring__circle stroke-current"
                            strokeWidth="9"
                            strokeLinecap="round"
                            cx="50"
                            cy="50"
                            r="40"
                            fill="transparent"
                            strokeDasharray="251.2"
                            style={{
                                strokeDashoffset: `calc(251.2px - (251.2px * ${totalUse / 100}) / 100)`
                            }}
                        ></circle>

                        <text x="50" y="50" fontFamily="Verdana" fontSize="18" textAnchor="middle" alignmentBaseline="middle">{totalUse / 100}%</text>

                    </svg>
                </div>
                <div className="">
                    <h2 className=' text-secondary-foreground text-sm'>Free Credit Used</h2>
                    <p className=' text-slate-600 text-xs'>{totalUse}/10000</p>
                </div>
            </div>
            <Link href={'/dashboard/billing'}><Button className='bg-secondary hover:bg-slate-300 text-primary font-semibold text-sm mt-3 w-full flex items-center gap-2'><Rocket size={20} /> UPGRADE</Button></Link>
        </div>
    )
}

export default UsageCredit





// <div className=" m-5">
//     <div className="font-medium bg-secondary p-3 rounded-lg text-primary">
//         <h2 className=''>Credits</h2>
//         <div className=" h-2 bg-secondary outline w-full rounded-full mt-1 mb-3 ">
//             <div className=" h-2 bg-primary rounded-full" style={{ width: (totalUse/100)+'%'}}></div>
//         </div>
//         <h2 className=' text-sm w-full '>{totalUse}/10000 credit used</h2>
//     </div>
//     <Link href={'/dashboard/billing'}><Button className='bg-secondary hover:bg-slate-300 text-primary font-semibold text-sm mt-3 w-full flex items-center gap-2'><Rocket size={20}/> UPGRADE</Button></Link>
// </div>