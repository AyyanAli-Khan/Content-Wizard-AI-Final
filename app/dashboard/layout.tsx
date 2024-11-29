"use client"
import { useState } from "react";
import { TotalCreditContext } from "../(context)/CreditsContext";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [totalCreaditsUsage, setTotalCreaditsUsage] = useState<number>(0)

  return (

    <TotalCreditContext.Provider value={{totalCreaditsUsage, setTotalCreaditsUsage}}>
    <div className="bg-slate-200 h-full">
        <div className="lg:w-64  hidden lg:block fixed">
            <SideNav />
        </div>
      
        <div className="lg:ml-64">
            <Header />
            { children } 
        </div>
    </div>
    </TotalCreditContext.Provider>
);
}
