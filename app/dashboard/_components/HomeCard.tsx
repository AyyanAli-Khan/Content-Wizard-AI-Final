import { Button } from "@/components/ui/button";
import { Tablet } from "lucide-react";

export default function HomeCard() {
  return (
    <div className="w-80 mb-[50vw] h-64 flex items-left justify-center flex-col gap-5 p-5 py-4  rounded-tr-[50px] bg-primary text-white  hover:bg-[#1955cf]  transition-all duration-150">
        <Tablet className="text-white " height={60} width={60}/>
        {/* <div className="h-20 w-20 bg-primary rounded-xl text-white flex items-center justify-center">
        </div> */}
        <div>
            <h1 className="text-2xl font-semibold">25+ Templates</h1>
        </div>
        <div>
            <p className="text-sm">More than 25 templates to explore and work with</p>
            {/* <Button variant={"secondary"}>Learn More</Button> */}
            <h3 className="mt-4">Learn More</h3>
        </div>
    </div>
  )
}
