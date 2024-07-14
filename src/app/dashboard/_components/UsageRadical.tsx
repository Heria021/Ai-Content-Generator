import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function UsageRadical({ percentage, expireDate, status }: { percentage: number, expireDate: string, status: boolean }) {
    return (
        <div className="">
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
                                strokeDashoffset: `calc(251.2px - (251.2px * ${percentage}) / 100)`
                            }}
                        ></circle>
                        <text fill='#2563eb' x="50" y="50" fontFamily="Verdana" fontSize="18" textAnchor="middle" alignmentBaseline="middle">{percentage}%</text>
                    </svg>
                </div>
                <div className="">
                    <h2 className=' text-secondary-foreground text-sm'>Subscription <span className={`${status ? 'text-green-600' : 'text-red-600'}`}>{status ? 'Active' : 'Expire'}</span> </h2>
                    <p className='text-slate-600 text-xs'>Exp {expireDate.split(' ')[0]}</p>
                </div>
            </div>
            {
                !status && <Link href={'/dashboard/billing'}>
                    <Button className='bg-secondary hover:bg-slate-300 text-primary font-semibold text-sm mt-3 w-full flex items-center gap-2'>
                        <Rocket size={20} /> UPGRADE
                    </Button>
                </Link>
            }
        </div>

    );
}

export default UsageRadical;
