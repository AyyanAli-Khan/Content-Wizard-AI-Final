import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Tablet, Workflow, MessagesSquare } from "lucide-react";
import { Poppins } from "next/font/google";
import { ArrowRight } from "lucide-react";

const poppis = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const socialIcons = [
    {
      icon: "/LinkedIn.png",
      href: "www.linkedin.com/in/ayyan-ali-khan-765943320",
      alt: "Linkedinicon",
    },
    {
      icon: "/instagram.png",
      href: "/",
      alt: "Instagramicon",
    },
    {
      icon: "/Discord.png",
      href: "/",
      alt: "discordicon",
    },
    {
      icon: "/GitHub.png",
      href: "https://github.com/AyyanAli-Khan",
      alt: "githubicon",
    },
  ];


  return (
    <div className={`${poppis.className} w-full`}>
      {/* Navbar */}
      <nav className="w-full px-4 sm:px-6 lg:px-[85px] h-auto py-4 sm:h-36 flex items-center justify-between">
        <div>
          <Image
            src="/logo.png"
            height={100}
            width={100}
            alt="logo"
            className="w-16 sm:w-24 lg:w-[100px]"
          />
        </div>
        <div>
          <Link href="/dashboard">
            <Button className="font-semibold w-32 sm:w-[156px] h-10 sm:h-[49px] text-sm sm:text-md">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full px-4 sm:px-6 lg:px-[85px] min-h-[60vh] py-10 flex items-center justify-center gap-6 sm:gap-10 flex-col">
        <div className="text-center">
          <h1 className="text-4xl tracking-normal sm:text-6xl lg:text-7xl font-bold">
            Content <span className="text-primary">Wizard</span> AI
          </h1>
        </div>
        <div>
          <p className="text-center leading-normal w-full sm:w-[90%] lg:w-[616px] text-base sm:text-[20px] font-regular">
            Transform your content game with our AI-powered app, crafting
            captivating, high-quality text in just seconds! Say goodbye to
            writer's block and hello to endless inspiration.
          </p>
        </div>
        <div>
          <Link href="/dashboard">
            <Button className="font-semibold w-[156px] h-[49px] text-md">
              Lets Explore &nbsp;
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full px-4 sm:px-6 lg:px-[85px] flex flex-col sm:flex-row items-center gap-6 sm:gap-4 lg:gap-6 sm:justify-between mb-10">
        {/* Repeat this structure for each card */}
        <div className="w-full sm:w-[30%] lg:w-80 h-64 flex items-left justify-center flex-col gap-5 p-5 rounded-tr-[50px] py-4  bg-primary text-white hover:bg-[#1955cf] transition-all duration-150 cursor-pointer">
      
            <Tablet className="text-white " height={60} width={60} />
            {/* <div className="h-20 w-20 bg-primary rounded-xl text-white flex items-center justify-center">
        </div> */}
            <div>
              <h1 className="text-2xl font-semibold">25+ Templates</h1>
            </div>
            <div>
              <p className="text-sm">
                More than 25 templates to explore and work with
              </p>
              {/* <Button variant={"seconda
            ry"}>Learn More</Button> */}
              <h3 className="mt-4 cursor-pointer">Learn More</h3>
            </div>
        </div>
        <div className="w-80  h-64 flex items-left justify-center flex-col gap-5 p-5 py-4  rounded-tr-[50px] bg-primary text-white  hover:bg-[#1955cf]  transition-all duration-150 cursor-pointer">
          <Workflow className="text-white " height={60} width={60} />
          {/* <div className="h-20 w-20 bg-primary rounded-xl text-white flex items-center justify-center">
        </div> */}
          <div>
            <h1 className="text-2xl font-semibold">Instant Content Ideas</h1>
          </div>
          <div>
            <p className="text-sm">
              Get endless, AI-generated prompts for fresh inspiration.
            </p>
            <h3 className="mt-4 cursor-pointer">Learn More</h3>
          </div>
        </div>
        <div className="w-80  h-64 flex items-left justify-center flex-col gap-5 p-5 py-4  rounded-tr-[50px] bg-primary text-white  hover:bg-[#1955cf]  transition-all duration-150 cursor-pointer">
          <MessagesSquare className="text-white " height={60} width={60} />
          {/* <div className="h-20 w-20 bg-primary rounded-xl text-white flex items-center justify-center">
        </div> */}
          <div>
            <h1 className="text-2xl font-semibold">Real-Time Assistance</h1>
          </div>
          <div>
            <p className="text-sm">
              Enhance your text with instant, smart suggestions.
            </p>
            {/* <Button variant={"secondary"}>Learn More</Button> */}
            <h3 className="mt-4 cursor-pointer">Learn More</h3>
          </div>
        </div>
      </div>

      {/* Developed by */}
      <div className="w-full pt-14 px-4 sm:px-6 lg:px-[85px] flex items-center justify-center gap-4 flex-col min-h-[55vh] text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
          <span className="text-primary">Developed</span> by
        </h1>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Ayyan Ali Khan
        </h2>
        <p className="text-lg sm:text-xl mt-6 sm:mt-10 w-full sm:w-[90%] lg:w-[924px]">
          Content Wizard AI is crafted to transform your content creation
          experience. Built for speed and quality, it delivers engaging text,
          smart editing, and versatile templates to bring ideas to life
          effortlessly.
        </p>
      </div>

      {/* Connect with me */}
      <div className="w-full py-8 sm:h-36 flex justify-center items-center flex-col gap-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          <span className="text-primary">Connect</span> With Me
        </h1>
        <div className="w-48 sm:w-56 flex items-center gap-3 sm:gap-5 justify-between">
          {socialIcons.map((item, index) => (
            <Link href={item.href} target="_blank" key={index}>
              <Image
                src={item.icon}
                height={70}
                width={70}
                alt={item.alt}
                className="w-12 sm:w-16 lg:w-[70px]"
              />
            </Link>
          ))}
        </div>
        <p className="mt-5 mb-10 text-sm sm:text-base">
          Copyright &copy; 2024 Ayyan Technologies &#174;
        </p>
      </div>
    </div>
  );

  // return (
  //   <div className={` ${poppis.className} sm:w-full `}>
  //     <nav className="w-full lg:px-[85px] h-36  flex items-center justify-between
  //       sm:px-10 bg-red-500
  //   ">
  //       <div>
  //         <Image src="/logo.png" height={100} width={100} alt="logo" />
  //       </div>
  //       <div>
  //         <Link href="/dashboard">
  //           <Button className="font-semibold lg:w-[156px] h-[49px] text-md">
  //             Get Started
  //           </Button>
  //         </Link>
  //       </div>
  //     </nav>
  //     {/* hero section */}
  //     <div
  //       className="w-full overflow-hidden px-[85px] h-[60vh] flex items-center justify-center gap-10 flex-col">
  //       <div>
  //         <h1 className="lg:text-7xl font-bold sm:text-6xl">
  //           Content <span className="text-primary"> Wizard </span> AI
  //         </h1>
  //       </div>
  //       <div>
  //         {/*  w-[616px] */}
  //         <p className="w-[616px] h-[87px] text-[20px] font-semibold">
  //           Transform your content game with our AI-powered app, crafting
  //           captivating, high-quality text in just seconds! Say goodbye to
  //           writer's block and hello to endless inspiration.
  //         </p>
  //       </div>
  //       <div>
  //         <Link href="/dashboard">
  //           <Button className="font-semibold  w-[156px] h-[49px] text-md">
  //             Lets Explore &nbsp;
  //             <ArrowRight />
  //           </Button>
  //         </Link>
  //       </div>
  //     </div>

  //     {/* Cards */}
  //     <div className="w-full flex items-center justify-between px-[85px] ">
  //       <div className="w-80  h-64 flex items-left justify-center flex-col gap-5 p-5 py-4  rounded-tr-[50px] bg-primary text-white  hover:bg-[#1955cf]  transition-all duration-150 cursor-pointer">
  //         <Tablet className="text-white " height={60} width={60} />
  //         {/* <div className="h-20 w-20 bg-primary rounded-xl text-white flex items-center justify-center">
  //       </div> */}
  //         <div>
  //           <h1 className="text-2xl font-semibold">25+ Templates</h1>
  //         </div>
  //         <div>
  //           <p className="text-sm">
  //             More than 25 templates to explore and work with
  //           </p>
  //           {/* <Button variant={"seconda
  //           ry"}>Learn More</Button> */}
  //           <h3 className="mt-4 cursor-pointer">Learn More</h3>
  //         </div>
  //       </div>
        // <div className="w-80  h-64 flex items-left justify-center flex-col gap-5 p-5 py-4  rounded-tr-[50px] bg-primary text-white  hover:bg-[#1955cf]  transition-all duration-150 cursor-pointer">
        //   <Workflow className="text-white " height={60} width={60} />
        //   {/* <div className="h-20 w-20 bg-primary rounded-xl text-white flex items-center justify-center">
        // </div> */}
        //   <div>
        //     <h1 className="text-2xl font-semibold">Instant Content Ideas</h1>
        //   </div>
        //   <div>
        //     <p className="text-sm">
        //       Get endless, AI-generated prompts for fresh inspiration.
        //     </p>
        //     <h3 className="mt-4 cursor-pointer">Learn More</h3>
        //   </div>
        // </div>
        // <div className="w-80  h-64 flex items-left justify-center flex-col gap-5 p-5 py-4  rounded-tr-[50px] bg-primary text-white  hover:bg-[#1955cf]  transition-all duration-150 cursor-pointer">
        //   <MessagesSquare className="text-white " height={60} width={60} />
        //   {/* <div className="h-20 w-20 bg-primary rounded-xl text-white flex items-center justify-center">
        // </div> */}
        //   <div>
        //     <h1 className="text-2xl font-semibold">Real-Time Assistance</h1>
        //   </div>
        //   <div>
        //     <p className="text-sm">
        //       Enhance your text with instant, smart suggestions.
        //     </p>
        //     {/* <Button variant={"secondary"}>Learn More</Button> */}
        //     <h3 className="mt-4 cursor-pointer">Learn More</h3>
        //   </div>
        // </div>
      // </div>

  //     {/* Developed by */}
  //     <div className="w-full pt-14 px-[85px] flex items-center justify-center gap-4 flex-col h-[55vh]">
  //         <h1 className="text-7xl font-bold"><span className="text-primary">Developed</span> by</h1>
  //         <h2 className='text-5xl font-semibold'>Ayyan Ali Khan</h2>
  //         <p className='text-xl mt-10 w-[924px] '>Content Wizard AI is crafted to transform your content creation experience. Built for speed and quality, it delivers engaging text, smart editing, and versatile templates to bring ideas to life effortlessly.</p>
  //     </div>

  //     {/* Connect with me  */}
  //     <div className="w-full h-36 flex justify-center items-center flex-col gap-4 ">
  //         <h1 className="text-4xl font-semibold "><span className="text-primary">Connect</span> With Me</h1>
  //         <div className="w-56 flex items-center gap-5 justify-between">
  //           {
  //             socialIcons.map((item , index)=> (
  //               <Link href={item.href} key={index}>
  //                <Image src={item.icon} height={70} width={70} alt={item.alt} />
  //               </Link>
  //             )
  //             )
  //           }
  //         </div>
  //          <p className="mt-5 mb-10">Copyright &copy; 2024 Ayyan Technologies &#174;</p>
  //     </div>

  //   </div>
  // );
}
