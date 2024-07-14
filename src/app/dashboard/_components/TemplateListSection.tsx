import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'


export interface FORM {
    label: string,
    field: string,
    name: string,
    required?: boolean
}

export interface TEMPLATE {
    name: string,
    desc: string,
    icon: string,
    category: string,
    slug: string,
    aiPrompt: string,
    form: FORM[]
}

function TemplateListSection({ userSearchInput }: any) {
    const [templateList, setTemplateList] = useState(Templates)

    useEffect(() => {
        if (userSearchInput) {
            const filterData = Templates.filter(item => item.name.toLowerCase().includes(userSearchInput.toLowerCase()))
            setTemplateList(filterData);
        }else{
            setTemplateList(Templates);
        }
    }, [userSearchInput])

    return (
        <div className='p-4 md:p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {templateList.map((item: TEMPLATE, index: number) => (
                <TemplateCard key={index} {...item} />
            ))}
        </div>
    )
}

export default TemplateListSection