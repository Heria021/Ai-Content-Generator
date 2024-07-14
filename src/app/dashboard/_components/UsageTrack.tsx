import { db } from '@/utils/db'
import { AiOutput, UserSubscription } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import React, { useContext, useEffect, useState } from 'react'
import { HISTORY } from '../History/page'
import { eq } from "drizzle-orm";
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext'
import { InstantCreditUpdate } from '@/app/(context)/InstantCreditUpdate'
import UsageCredit from './UsageCredit'
import UsageRadical from './UsageRadical'
import moment from 'moment'

function UsageTrack() {
    const { user } = useUser();
    const { creditUpdate, setCreditUpdate } = useContext<any>(InstantCreditUpdate);

    const [expireDate, setExpireDate] = useState<any>('');
    const [status, setStatus] = useState<any>('');
    const [plan, setPlan] = useState<number>(7);

    // const [percentage, setPercentage] = useState<any>(0);

    useEffect(() => {
        user && IsUserSubscribed();
    }, [user])

    useEffect(() => {
        user && GetData();
    }, [user && creditUpdate])

    const { totalUse, setTotalUse } = useContext<any>(TotalUsageContext);
    const { userSubscription, setUserSubscription } = useContext<any>(UserSubscriptionContext)


    const GetData = async () => {
        {/*@ts-ignore */ }
        const result: HISTORY[] = await db.select().from(AiOutput).where(eq(AiOutput.createdBy, user.primaryEmailAddress.emailAddress)) as HISTORY[];
        GetTotalUsage(result);
    }

    const IsUserSubscribed = async () => {
        {/*@ts-ignore */ }
        const result = await db.select().from(UserSubscription).where(eq(UserSubscription.email, user.primaryEmailAddress.emailAddress));
        console.log(result)
        if (result.length) {
            setUserSubscription(true);
            setExpireDate(result[0].expireDate)
            setStatus(result[0].active)
            setPlan(7);
        }
    }

    const today = moment()
    const remainDays = moment(expireDate).diff(today, 'days') + 1;
    const percentage = Math.min(Number((((plan - remainDays) / plan) * 100).toFixed()), 100);

    const GetTotalUsage = (result: HISTORY[]) => {
        let total: number = 0;
        result.forEach(element => {
            total = total + Number(element?.aiResponse?.length);
        })
        total = total > 10000 ? 10000 : total;
        setTotalUse(total);
    }

    return (
        <div>
            {
                userSubscription ?
                    <UsageRadical percentage={percentage} expireDate={expireDate} status={status} /> :
                    <UsageCredit totalUse={totalUse} />
            }
        </div>
    )
}

export default UsageTrack