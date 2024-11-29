"use client"
import { Search } from "lucide-react"

export default function SearchSection({onSearchInput}: any) {
  return (
    <div className='p-10 bg-gradient-to-br from-primary via-blue-700 to-primary flex items-center justify-center flex-col'>
        <h2
        className='text-3xl font-bold text-white md:text-4xl'
        >Browse All Templates</h2>
        <p className='text-white md:text-large'>What you like to create today?</p>
        <div className='flex items-center w-64 rounded-md h-10 bg-white gap-3 mt-6 py-3 px-5 max-sm:w-[75%]'>
            <Search size={5} />
            <input onChange={(event)=>onSearchInput(event.target.value)} type='text' placeholder="search template"
            className='bg-transparent outline-none font-bold'
            />
        </div>
    </div>
  )
}

