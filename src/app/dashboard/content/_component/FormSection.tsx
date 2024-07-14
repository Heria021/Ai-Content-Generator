'use client'

import React, { useContext, useEffect, useState } from 'react';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
    selectedTemplate?: TEMPLATE;
    userFormInput: any
    loading:boolean
}

function FormSection({ selectedTemplate, userFormInput, loading}: PROPS) {

    const [formData, setFormData] = useState<any>();

    const handleOnChange = (event:any) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]:value })
    }
        
    const onSubmit = (e:any) => {
        e.preventDefault();
        userFormInput(formData)
    }
    
    return (
        <div className=' border-border border bg-card shadow-lg rounded-lg p-5'>
            {/* @ts-ignore */}
            <Image src={selectedTemplate?.icon} alt='icon' width={70} height={70} />
            <h2 className=' font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
            <p className='text-card-foreground text-sm'>{selectedTemplate?.desc}</p>

            <form className='mt-6' onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <div className=" mt-2 mb-7 flex flex-col gap-2" key={index} >
                        <label className=' font-bold'>{item.label}</label>
                        {
                            item.field == 'input' ?
                                <Input name={item.name} required={item.required} onChange={handleOnChange}/> :
                                item.field == 'textarea' ?
                                    <Textarea name={item.name} required={item.required} onChange={handleOnChange}/> : null
                        }
                    </div>
                ))}
                <Button className='w-full py-6' type='submit' disabled={loading}> {loading?<Loader2Icon size={24} className='animate-spin duration-300 mr-2'/>:''} Generate Content</Button>
            </form>
        </div>
    );
};

export default FormSection;
