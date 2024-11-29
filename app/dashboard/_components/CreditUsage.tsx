"use client"
import { TotalCreditContext } from "@/app/(context)/CreditsContext";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useContext, useEffect } from "react";


export default function CreditUsage() {

  const {user}: any = useUser();

  const {totalCreaditsUsage, setTotalCreaditsUsage} = useContext(TotalCreditContext)
 

  let total : number = 0;
  let result;
  const getTotalUsage = async () =>{
    
    result = await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress))

    // console.log(result)

    // console.log(user?.primaryEmailAddress?.emailAddress)



    result.forEach((elements) =>{
      total += Number(elements.aiResponse.replace(/[^a-zA-Z ]/g, "").trim().length)
      setTotalCreaditsUsage(total)
    })


    
    // console.log(total)
  }

  useEffect(() =>{
    getTotalUsage()
  },[user , result])


  
  

  return (
    <div>
        <div className="p-2  text-white w-52 h-30 bg-primary rounded-lg">
            <h1 className="font-semibold">Credits</h1>
            <div className="w-full mt-3 rounded-full h-2 bg-gray-400 overflow-hidden">
                <div
                className="w-full h-2 rounded-full bg-white"
                style={{ width: (totalCreaditsUsage/10000)*100 +"%"}}>
                </div>
            </div>

            <h2 className="text-sm my-2">
              {
                total >= 10000? `Total Credits are used` : `${totalCreaditsUsage}/20,000 Credits Used`
              }
              
              </h2>
      </div>
    </div>
  );
}
