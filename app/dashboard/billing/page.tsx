import Link from "next/link";
// import {TotalCreditContext} from "@/app/(context)/CreditsContext"
// import { useContext } from "react";

export default function Page() {

  // const {totalCreaditsUsage, setTotalCreaditsUsage} = useContext(TotalCreditContext)

  // const credits: number = Number(totalCreaditsUsage)

  return (
    <div className="p-10 ">
      <h1 className="text-5xl">Outof credits contact us for more credits.</h1>
      <br />
      <p className="text-lg">ayyanalikhan510@gmail.com</p>
      <br />
      <h1 className="text-5xl">
        Or click on
        <a
          className="text-blue-800"
          href="https://www.linkedin.com/in/ayyan-ali-khan-765943320"
          target="_blank"
        >
          LinkedIn
        </a>
      </h1>
    </div>
  );
}
