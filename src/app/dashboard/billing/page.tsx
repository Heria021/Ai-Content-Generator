'use client'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Check, Loader2Icon } from 'lucide-react'
import Script from 'next/script'
import { db } from '@/utils/db'
import { UserSubscription } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { useRouter } from 'next/navigation'

const offerList = [
  {
    plan: 'Free',
    price: '$0',
    duration: 'month',
    description: 'You are currently on a free plan.',
    features: [
      'unlimited post',
      'custom support',
      'chat sandbox',
      'full hours',
      'Gpt 3.4.2'
    ]
  },
  {
    plan: 'Basic',
    price: '$1.99',
    duration: 'week',
    description: 'You are currently on a basic plan.',
    features: [
      'limited post',
      'email support',
      'basic analytics',
      'standard templates'
    ]
  },
  {
    plan: 'Premium',
    price: '$4.99',
    duration: 'month',
    description: 'You are currently on a premium plan.',
    features: [
      'unlimited post',
      'priority support',
      'advanced chat features',
      'premium analytics',
      'custom templates',
      'Gpt 3.5.1 upgrade'
    ]
  }
];

function Billing() {
  const { user } = useUser();
  const [loading, setLoading] = useState(false)

  const saveSubscription = async (paymentId: string) => {

    const joinDate = moment().utc().format('YYYY-MM-DD HH:mm:ss');
    const expireDate = moment().utc().add(7, 'days').format('YYYY-MM-DD HH:mm:ss');
    
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress as string,
      userName: user?.username as string,
      active: true,
      paymentId: paymentId,
      joinDate: joinDate,
      expireDate: expireDate as string
    });
    if (result) {
      window.location.reload();
    }
  }

  const createSubscription = (plan: string) => {
    setLoading(true)
    axios.post('/api/create-subscription', { plan }).then(resp => {
      console.log(resp.data);
      onPayment(resp.data.id, plan);
    }).catch(error => {
      setLoading(false);
      setPressed(-1);
      console.error(error);
    });
  }

  const onPayment = (subId: string, plan: string) => {
    const options = {
      "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      "subscription_id": subId,
      "name": 'Ai Content Generator',
      "description": `${plan} Subscription`,
      image: '/next.svg',
      notes: {
        address: 'Corporate Office'
      },
      theme: {
        color: '#704ef8'
      },
      modal: {
        backdropclose: true,
        ondismiss: () => {
          console.log('Checkout form closed');
        },
        escape: true
      },
      handler: async (response: any) => {
        console.log(response);
        if (response) {
          saveSubscription(response.razorpay_payment_id)
        }
      }
    }
    setLoading(false);
    setPressed(-1);
    {/*@ts-ignore */ }
    const rzp = new window.Razorpay(options)
    rzp.open();
  }

  const [pressed, setPressed] = useState<number>(-1)
  const handleLoading = (id: number) => {
    setPressed(id);
  }

  const router = useRouter();
  const handleButton = (offerPlan: string, index: number) => {
    if (user) { createSubscription(offerPlan); handleLoading(index) } else { router.push('/sign-in') }
  }


  return (
    <div className=''>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className=" flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {offerList.map((offer, index) => (
            <div key={index} className="h-full p-10 max-w-2xl border border-border rounded-sm shadow-lg flex flex-col justify-between">
              <div>
                <h2 className="font-semibold text-2xl text-slate-500">{offer.plan}</h2>
                <div className="my-6">
                  <div className="flex justify-start items-end">
                    <h2 className="font-medium text-3xl text-foreground">{offer.price}</h2>
                    <p className="text-foreground">/{offer.duration}</p>
                  </div>
                  <p className="my-1 text-sm text-secondary-foreground ">{offer.description}</p>
                </div>
                <div className="flex flex-col gap-4">
                  {offer.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="bg-secondary rounded-full p-[3px] inline" size={18} strokeWidth={3} />
                      <p className="text-sm text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* <Button disabled={pressed === index} onClick={() => { handleButton(offer.plan, index) }} className="font-medium p-3 mt-12 rounded-sm bg-white text-primary border border-border hover:bg-primary hover:text-white">
                {pressed === index && loading && <Loader2Icon className='mr-1 animate-spin duration-300' />} Choose Plan
              </Button> */}
              <Button disabled onClick={() => { handleButton(offer.plan, index) }} className="font-medium p-3 mt-12 rounded-sm bg-white text-primary border border-border hover:bg-primary hover:text-white">
                {pressed === index && loading && <Loader2Icon className='mr-1 animate-spin duration-300' />} Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Billing
