import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    try {
        const { plan } = await req.json();

        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRECT_KEY
        });

        const plan_id = plan === 'Basic' 
            ? process.env.SUBSCRIPATION_WEEKLY_PLAN_ID 
            : process.env.SUBSCRIPATION_MONTHLY_PLAN_ID;

        const result = await instance.subscriptions.create({
            plan_id,
            customer_notify: 1,
            total_count: 1,
            quantity: 1,
            addons: [],
            notes: {
                key1: 'Note'
            }
        });

        return NextResponse.json(result);
    } catch (error) {
        console.error('Error creating subscription:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
