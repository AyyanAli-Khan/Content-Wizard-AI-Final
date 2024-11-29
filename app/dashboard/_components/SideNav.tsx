"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname , useRouter } from "next/navigation";
import CreditUsage from './CreditUsage'
import { Button } from "@/components/ui/button";



export default function SideNav() {

  const router = useRouter();
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();

  return (
    <div className="h-screen p-5 border shadow-md bg-white relative">
      <div className="flex justify-center items-center">
        <Image src={"/logo.png"} height={150} width={150} alt="logo" />
      </div>

      <div className="mt-10">
        {MenuList.map((item , index) => {
          return (
            <Link href={item.path} key={index}>
              <div
                className={`flex gap-2 mb-2 cursor-pointer 
            rounded-lg items-center
            p-3  hover:bg-primary hover:text-white
            ${path == item.path && "bg-primary text-white"}
            `}
              >
                <item.icon className="h-6 w-6" />
                <h2>{item.name}</h2>
              </div>
            </Link>
          );
        })}
      </div>

        <div className="absolute bottom-15 mt-12">
          <CreditUsage />
          <Button variant={"outline"} onClick={()=>router.push('/dashboard/billing') } className="w-full mt-5 text-primary 
          font-semibold hover:bg-primary hover:text-white">Upgrade</Button>
        </div>

    </div>
  );
}


// //? new one\

// "use client";
// import { useState } from "react";
// import { FileClock, Home, Settings, WalletCards, Menu, X } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function SideNav() {
//   const [isOpen, setIsOpen] = useState(false);
//   const MenuList = [
//     {
//       name: "Home",
//       icon: Home,
//       path: "/dashboard",
//     },
//     {
//       name: "History",
//       icon: FileClock,
//       path: "/dashboard/history",
//     },
//     {
//       name: "Billing",
//       icon: WalletCards,
//       path: "/dashboard/billing",
//     },
//     {
//       name: "Settings",
//       icon: Settings,
//       path: "/dashboard/settings",
//     },
//   ];

//   const path = usePathname();

//   return (
//     <>
//       {/* Hamburger Icon */}
//       <div className="block lg:hidden p-5 bg-[#003399] text-white">
//         <button onClick={() => setIsOpen(!isOpen)}>
//           <Menu className="h-8 w-8" />
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-md p-5 transform lg:translate-x-0 transition-transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:block lg:static`}
//       >
//         {/* Close Button for small screens */}
//         <div className="lg:hidden flex justify-between">
//           <Image src={"/logo.png"} height={150} width={150} alt="logo" />
//           <button onClick={() => setIsOpen(false)} className="text-[#003399]">
//             <X className="h-8 w-8" />
//           </button>
//         </div>

//         {/* Logo for large screens */}
//         <div className="hidden lg:flex justify-center items-center mb-10">
//           <Image src={"/logo.png"} height={150} width={150} alt="logo" />
//         </div>

//         {/* Sidebar Menu */}
//         <div className="mt-10">
//           {MenuList.map((item) => {
//             return (
//               <Link key={item.path} href={item.path}>
//                 <div
//                   className={`flex gap-2 mb-2 cursor-pointer 
//                 rounded-lg items-center p-3
//                 hover:bg-[#003399] hover:text-white transition
//                 ${path == item.path && "bg-[#003399] text-white"}`}
//                 >
//                   <item.icon className="h-6 w-6" />
//                   <h2>{item.name}</h2>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }
