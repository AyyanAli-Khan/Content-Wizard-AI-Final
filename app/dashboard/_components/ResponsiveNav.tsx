"use client";
import { useState } from "react";
import { FileClock, Home, Settings, WalletCards, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import CreditUsage from "./CreditUsage";

export default function ResponsiveNav() {

  
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="z-[100]"> 
      {/* Hamburger Menu Icon */}
      <div className="lg:hidden p-2 bg-[#003399] text-white flex justify-between items-center rounded-lg h-fit">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-8 w-8" />
        </button>
      </div>

      {/* Sidebar for small/medium screens */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-md p-5 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:hidden`}
      >
        {/* Close Button for small screens */}
        <div className="flex justify-between items-center mb-4">
          <Image src="/logo.png" height={100} width={100} alt="logo" />
          <button onClick={() => setIsOpen(false)} className="text-[#003399]">
            <X className="h-8 w-8" />
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className="mt-10">
          {MenuList.map((item) => (
            <Link key={item.path} href={item.path}>
              <div
                className={`flex gap-2 mb-2 cursor-pointer 
                rounded-lg items-center p-3
                hover:bg-[#003399] hover:text-white transition
                ${path == item.path && "bg-[#003399] text-white"}`}
              >
                <item.icon className="h-6 w-6" />
                <h2>{item.name}</h2>
              </div>
            </Link>
          ))}
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <CreditUsage />
          <Button 
            variant={"outline"} 
            onClick={() => {
              router.push('/dashboard/billing');
              setIsOpen(false); // Close the menu after clicking
            }} 
            className="w-full mt-5 text-primary font-semibold hover:bg-primary hover:text-white"
          >
            Upgrade
          </Button>
        </div>
      </div>
    </div>
  );
}
