'use client'
import React, { useContext, useState } from 'react'
import FormSection from '../_component/FormSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import OutputSection from './OutputSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'
import { db } from '@/utils/db'
import { AiOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { InstantCreditUpdate } from '@/app/(context)/InstantCreditUpdate'


interface PROPS {
    params: {
        'template-slug': string
    }
}

function CreateNewContent(props: PROPS) {
    const [loading, setLoading] = useState(false);
    const [aiOutput, setAiOutput] = useState<string>('');
    const { user } = useUser();
    const router = useRouter()

    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params['template-slug'])

    const { totalUse, setTotalUse } = useContext<any>(TotalUsageContext);
    const { creditUpdate, setCreditUpdate } = useContext<any>(InstantCreditUpdate);

    /**
     * AI DATA GENERATOR
     * @param formData 
     * @returns 
     */
    const GenerateAIContent = async (formData: any) => {
        if (totalUse >= 10000) {
            router.push('/dashboard/billing')
            return;
        }

        console.log(totalUse)
        setLoading(true);

        const selectedPrompt = selectedTemplate?.aiPrompt;
        const finalAiPrompt = JSON.stringify(formData) + "," + selectedPrompt;
        const result = await chatSession.sendMessage(finalAiPrompt);

        setAiOutput(result.response.text());
        await SaveInDb(formData, selectedTemplate?.slug, result.response.text());
        setLoading(false);
        setCreditUpdate(Date.now())
    }

    const SaveInDb = async (formData: any, slug: any, aiOutput: any) => {
        {/*@ts-ignore */ }
        const result = await db.insert(AiOutput).values({
            formData: formData,
            templateSlug: slug,
            aiResponse: aiOutput,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            createdAt: moment().format('DD/MM/yyyy')
        })
    }



    return (
            <div className="p-5">
                <Link href={'/dashboard'}><Button><ArrowLeft />Back</Button></Link>
                <div className=' grid grid-cols-1 md:grid-cols-3 gap-10 py-5'>
                    {/* Form Section */}
                    <FormSection selectedTemplate={selectedTemplate} userFormInput={(v: any) => GenerateAIContent(v)} loading={loading} />
                    {/* OutPut Section */}
                    <div className=" md:col-span-2"><OutputSection aiOutput={aiOutput} /></div>
                </div>
            </div>
    )
}

export default CreateNewContent