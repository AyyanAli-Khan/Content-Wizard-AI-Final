"use client"  
// import Templates from "@/app/(data)/Templates";
// import { TEMPLATE } from "../../_components/TemplateListSection";
// import FormSection from "../_components/FormSection";
// import OutputSection from "../_components/OutputSection";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import { chatSession } from "@/utils/AiModel";
// import { useContext, useEffect, useState } from "react";
// import { db } from "@/utils/db";
// import { AIOutput } from "@/utils/schema";
// import { useUser } from "@clerk/nextjs";
// import moment from "moment";
// import { eq } from "drizzle-orm";
// import { TotalCreditContext } from "@/app/(context)/CreditsContext";
// import { useRouter } from "next/navigation";



// export default function CreateContent({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) {

//   const {user} = useUser();

//   const [slug, setSlug] = useState<string>("")

//   useEffect(() => {
//     const fetchSlug = async () => {
//       const slugData = (await params).slug;
//       setSlug(slugData); 
//       console.log(slugData);
//     };
//     fetchSlug();
//   }, [params]);
  
//   const [isLoading, setIsLoading] = useState<boolean>(false)
//   const [aiModelResponse, setAiModelResponse] = useState<string>("");
//   const {totalCreaditsUsage, setTotalCreaditsUsage} = useContext(TotalCreditContext)
  
  
//   console.log(slug)
//   const router = useRouter();
  
//   const selectedTemplate: TEMPLATE | undefined = Templates.find(
//     (item) => item.slug == slug
//   );
  
//   const generateAiContent = async(formData: any) => {
//     if(user?.primaryEmailAddress?.emailAddress == "ayyanalikhon@gmail.com" || "ayyanalikhan510@gmail.com"){
//       setTotalCreaditsUsage(1000)
//     }
//     else if(totalCreaditsUsage >= 10000){
//       router.push('/dashboard/billing')
//       return;
//     }
//     setIsLoading(true)
//     // @ts-ignore
//     const selectedPrompt: any  = selectedTemplate?.aiPrompt;
//     const finalPrompt = JSON.stringify(formData)+", "+ selectedPrompt;

//     const result = await chatSession.sendMessage(finalPrompt);

//     setAiModelResponse(result.response.text())
//     await saveInDb(JSON.stringify(formData),selectedTemplate?.slug, result?.response.text(), selectedTemplate?.name , selectedTemplate?.code)

//     setIsLoading(false)
//     }

//     const saveInDb = async(formData: any , slug:any , aiResp : string , templateName: any , code: any) =>{
//         const result = await db.insert(AIOutput).values({
//           formData:formData ,
//           templateSlug:slug  ,
//           aiResponse:aiResp ,
//           createdBy: user?.primaryEmailAddress?.emailAddress || "",
//           createdAt: moment().format("DD/MM/yyyy"),
//           templateName:templateName,
//           code:code
//         });

//         // console.log(result)
//     }


//   return (
//    <div className="p-10">
//     <Link href={'/dashboard'}>
//       <Button><ArrowLeft/>&nbsp;Back</Button>
//     </Link>
//      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 py-5">
//       {/* FormSection */}
//       <FormSection loading={isLoading}
//       selectedTemplate={selectedTemplate} 
//       userFormData={(v:any)=>generateAiContent(v)}
//       />

//       {/* OutputSection */}
//       <div className="col-span-2">
//         <OutputSection response={aiModelResponse} />
//       </div>
//     </div>
//    </div>
//   );
// }


























//! DEMO WALA CODE

import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "../../_components/TemplateListSection";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalCreditContext } from "@/app/(context)/CreditsContext";

export default function CreateContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { user } = useUser();
  const [slug, setSlug] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [aiModelResponse, setAiModelResponse] = useState<string>("");
  const { totalCreaditsUsage, setTotalCreaditsUsage } = useContext(TotalCreditContext);
  const router = useRouter();

  useEffect(() => {
    const fetchSlug = async () => {
      const slugData = (await params).slug; // Safely fetch params
      setSlug(slugData); // Update state after mounting
      console.log(slugData);
    };
    fetchSlug();
  }, [params]); // Ensure this runs only once when `params` is available

  const selectedTemplate: TEMPLATE | undefined = Templates.find(
    (item) => item.slug === slug
  );

  const generateAiContent = async (formData: any) => {
    if (
      user?.primaryEmailAddress?.emailAddress === "ayyanalikhon@gmail.com" ||
      user?.primaryEmailAddress?.emailAddress === "ayyanalikhan510@gmail.com"
    ) {
      setTotalCreaditsUsage(1000);
    } else if (totalCreaditsUsage >= 10000) {
      router.push("/dashboard/billing");
      return;
    }
    setIsLoading(true);
    const selectedPrompt: any = selectedTemplate?.aiPrompt;
    const finalPrompt = JSON.stringify(formData) + ", " + selectedPrompt;

    const result = await chatSession.sendMessage(finalPrompt);

    setAiModelResponse(await result.response.text());
    await saveInDb(
      JSON.stringify(formData),
      selectedTemplate?.slug,
      await result.response.text(),
      selectedTemplate?.name,
      selectedTemplate?.code
    );

    setIsLoading(false);
  };

  const saveInDb = async (
    formData: any,
    slug: any,
    aiResp: string,
    templateName: any,
    code: any
  ) => {
    await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress || "",
      createdAt: moment().format("DD/MM/yyyy"),
      templateName: templateName,
      code: code,
    });
  };

  return (
    <div className="p-5 md:p-10">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft />
          &nbsp;Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 py-5">
        {/* FormSection */}
        <FormSection
          loading={isLoading}
          selectedTemplate={selectedTemplate}
          userFormData={(v: any) => generateAiContent(v)}
        />

        {/* OutputSection */}
        <div className="col-span-2">
          <OutputSection response={aiModelResponse} />
        </div>
      </div>
    </div>
  );
}
