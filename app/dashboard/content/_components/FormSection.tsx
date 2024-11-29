"use client"
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2Icon } from 'lucide-react'

interface PROPS {
    selectedTemplate:TEMPLATE | undefined,
    userFormData: any,
    loading:boolean
}



export default function FormSection({selectedTemplate , userFormData , loading}: PROPS) {
        
    const [formData, setFormData] = useState<any>()

    const handleChangeInput =(event:any)=>{
        const {name,value} = event.target;
        setFormData({...formData,[name]:value})

    }
    const onSubmit = (e: any)=>{
        e.preventDefault();
        userFormData(formData)
    }

  return (
    <div className='p-5 shadow-lg rounded-lg border bg-white'>
        {/* @ts-ignore */}
       <Image src={selectedTemplate?.icon || "/logo.png"} 
       width={70} height={70} alt='logo'
       />
    
       <h1 className='text-2xl font-bold text-primary mb-3'>{selectedTemplate?.name}</h1>
       <p className='text-sm text-gray-500'> {selectedTemplate?.decs}</p>

        <form className='mt-6' onSubmit={onSubmit}>
            {
                // @ts-ignore
                selectedTemplate?.icon != "" && selectedTemplate?.form.map((item, index)=>(
                    <div className='my-2 flex flex-col gap-2 mb-7' key={index}>
                        <label className='font-bold'>{item.label}</label>
                        {
                            item.field=="input"?
                            <Input name={item.name} required={item?.requirement}
                            onChange={handleChangeInput}
                            className='w-full text-md' /> : item.field=="textarea"?
                            <Textarea name={item.name} required={item?.requirement}
                            onChange={handleChangeInput} className='w-full text-md' />: null
                        }
                    </div>
                ))
            }
            <Button 
            disabled={loading}
            type='submit' className='w-full py-6'>
                {loading && <Loader2Icon className='animate-spin mr-2'/>}
                Generate Content</Button>
        </form>
    </div>
  )

}