import Templates from "@/app/(data)/Templates";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq, desc } from "drizzle-orm";
import { TEMPLATE } from "../_components/TemplateListSection";
import Image from "next/image";

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
  templateName: string;
}

// async function historyPage() {
//   const user = await currentUser();

//   console.log(user?.primaryEmailAddress);

//   // @ts-ignore
//   const historyList: HISTORY[] = await db.select().from(AIOutput) .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress)).orderBy(desc(AIOutput.id));

//   // const usedTemplates: TEMPLATE[] = Templates.filter((element: TEMPLATE) =>
//   //     historyList.some((item:HISTORY) => item.templateSlug == element.slug)
//   // )

//   console.log(historyList);

//   return (
//     <div className="m-5 p-5  bg-white rounded-lg">
//       <h1 className="font-semibold text-3xl text-primary">History</h1>
//       <p className="text-gray-700 text-sm">
//         Search your previous AI generated content
//       </p>

//       <div className="flex items-center flex-col gap-8">
//         <div className="w-full text-white font-[700] h-10 rounded-lg bg-primary mt-7 border-2 overflow-hidden flex justify-between items-center px-2">
//             <div className="text-center w-1/5 ">
//               <h1>Selected Template</h1>
//             </div>
//             <div className="w-60 flex justify-center items-center  h-full overflow-hidden ">
//               <h1 className="w-60 text-center ">
//                 AI  Response
//               </h1>
//             </div>
//             <div className='text-center'>
//               <h1>Words Count</h1>
//             </div>
//             <div className='text-center pr-5'>
//               <h1>
//                Date
//               </h1>
//             </div>
//         </div>
//         {historyList.map((item) => (
//           <div className="w-full h-35 rounded-md border-2 overflow-hidden flex justify-between items-center px-5">
//             <div className="flex items-center justify-between w-1/5 ">
//               <Image
//                 src={
//                   Templates.find(
//                     (element) => element.name === item.templateName)?.icon || "/default-icon.png"
//                 }
//                 height={50}
//                 width={50}
//                 alt="icon"
//               />

//               <h2>{item.templateName}</h2>
//             </div>
//             <div className="w-60 h-full overflow-hidden">
//               <p className="w-60 text-sm h-20">
//                 {item.aiResponse.replace(/[^a-zA-Z ]/g, "").trim()}
//               </p>
//             </div>
//             <div>
//               {item.aiResponse.replace(/[^a-zA-Z ]/g, "").trim().length}
//             </div>
//             <div>
//               <h1>
//                 { 
//                   item.createdAt
//                 }
//               </h1>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




async function historyPage() {
  const user = await currentUser();

  // @ts-ignore
  const historyList: HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress)).orderBy(desc(AIOutput.id));

  return (
    <div className="m-2 sm:m-3 lg:m-5 p-3 sm:p-4 lg:p-5 bg-white rounded-lg">
      <h1 className="font-semibold text-2xl sm:text-2xl lg:text-3xl text-primary">History</h1>
      <p className="text-gray-700 text-xs sm:text-sm">
        Search your previous AI generated content
      </p>

      <div className="flex items-center flex-col gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-6 lg:mt-7">
        {/* Header - Desktop & Tablet */}
        <div className="hidden sm:flex w-full text-white font-[700] h-10 rounded-lg bg-primary border-2 overflow-hidden justify-between items-center px-2 sm:px-4">
          <div className="text-center w-[25%] sm:w-1/5">
            <h1 className="text-sm lg:text-base">Selected Template</h1>
          </div>
          <div className="w-[35%] sm:w-[40%] flex justify-center">
            <h1 className="text-sm lg:text-base text-center">AI Response</h1>
          </div>
          <div className="text-center w-[20%] sm:w-[15%]">
            <h1 className="text-sm lg:text-base">Words Count</h1>
          </div>
          <div className="text-center w-[20%] sm:w-[15%]">
            <h1 className="text-sm lg:text-base">Date</h1>
          </div>
        </div>

        {/* History Items */}
        {historyList.map((item, index) => (
          <div key={index} className="w-full rounded-md border-2 overflow-hidden">
            {/* Mobile View */}
            <div className="sm:hidden p-3 space-y-3">
              <div className="flex items-center gap-3">
                <Image
                  src={
                    Templates.find(
                      (element) => element.name === item.templateName
                    )?.icon || "/default-icon.png"
                  }
                  height={40}
                  width={40}
                  alt="icon"
                  className="rounded-md"
                />
                <h2 className="font-medium text-sm">{item.templateName}</h2>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">
                {item.aiResponse.replace(/[^a-zA-Z ]/g, "").trim().substring(0, 100)}...
              </p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Words: {item.aiResponse.replace(/[^a-zA-Z ]/g, "").trim().length}</span>
                <span>{item.createdAt}</span>
              </div>
            </div>

            {/* Desktop & Tablet View */}
            <div className="hidden sm:flex justify-between items-center px-4 py-3">
              <div className="flex items-center gap-3 w-[25%] sm:w-1/5">
                <Image
                  src={
                    Templates.find(
                      (element) => element.name === item.templateName
                    )?.icon || "/default-icon.png"
                  }
                  height={40}
                  width={40}
                  alt="icon"
                  className="rounded-md"
                />
                <h2 className="text-sm lg:text-base">{item.templateName}</h2>
              </div>
              <div className="w-[35%] sm:w-[40%]">
                <p className="text-xs lg:text-sm text-gray-600 line-clamp-2">
                  {item.aiResponse.replace(/[^a-zA-Z ]/g, "").trim()}
                </p>
              </div>
              <div className="w-[20%] sm:w-[15%] text-center text-sm lg:text-base">
                {item.aiResponse.replace(/[^a-zA-Z ]/g, "").trim().length}
              </div>
              <div className="w-[20%] sm:w-[15%] text-center text-sm lg:text-base">
                {item.createdAt}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default historyPage;
