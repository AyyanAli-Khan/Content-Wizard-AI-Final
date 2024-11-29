import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import ResponsiveNav from "./ResponsiveNav";

export default function Header() {
  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between bg-white">
        <div className='lg:flex items-center gap-5 border shadow-lg rounded-md px-3 py-1 max-w-lg hidden '>
            <Search />
            <input type="text" placeholder="Search.." 
            className='outline-none max-w-lg
             rounded-md
            '
            />
        </div>

        <div className='lg:hidden'>
        <ResponsiveNav  />

        </div>

        <div className="flex items-center gap-3">
            <h2 className=' bg-primary rounded-xl text-white p-2 max-sm:hidden '>🔥Join Membership just for $9.99/Month</h2>
            <UserButton />
        </div>
    </div>
  )
}
