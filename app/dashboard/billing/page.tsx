import { Button } from "@/components/ui/button";
import Link from "next/link";
// import {TotalCreditContext} from "@/app/(context)/CreditsContext"
// import { useContext } from "react";

export default function Page() {

  // const {totalCreaditsUsage, setTotalCreaditsUsage} = useContext(TotalCreditContext)

  // const credits: number = Number(totalCreaditsUsage)

  return (

    //! Previous Code
    // <div className="p-10 ">
    //   <h1 className="text-5xl">Outof credits contact us for more credits.</h1>
    //   <br />
    //   <p className="text-lg">ayyanalikhan510@gmail.com</p>
    //   <br />
    //   <h1 className="text-5xl">
    //     Or click on
    //     <a
    //       className="text-blue-800"
    //       href="https://www.linkedin.com/in/ayyan-ali-khan-765943320"
    //       target="_blank"
    //     >
    //       LinkedIn
    //     </a>
    //   </h1>
    // </div>

      <div className="container h-screen p-5 flex items-start justify-center flex-wrap  flex-col md:flex-row md:p-10 gap-6">
      {/* Package 1 */}
      <div className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white flex flex-col justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Basic Plan</h2>
        <p className="text-gray-600 mt-2">
          Perfect for individual creators. Generate content with AI-powered templates.
        </p>
        <div className="mt-4 flex-grow">
          <span className="text-2xl font-bold text-primary">$9.99 / month</span>
          <p className="text-gray-500 mt-2">Limited templates and features.</p>
        </div>
        <Button className="mt-4 w-28 font-medium text-[16px] bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
          Get Started
        </Button>
      </div>

      {/* Package 2 */}
      <div className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white flex flex-col justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Pro Plan</h2>
        <p className="text-gray-600 mt-2">
          Designed for professionals and teams. Unlock all features and templates.
        </p>
        <div className="mt-4 flex-grow">
          <span className="text-2xl font-bold text-primary">$19.99 / month</span>
          <p className="text-gray-500 mt-2">Access to all templates, unlimited content generation.</p>
        </div>
        <Button className="mt-4 w-28 font-medium text-[16px] bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
          Get Started
        </Button>
      </div>
    </div>
    
  );
}
