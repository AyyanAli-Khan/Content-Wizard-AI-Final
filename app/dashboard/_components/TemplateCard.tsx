import Image from "next/image";
import Link from "next/link";
import { TEMPLATE } from "./TemplateListSection";

const TemplateCard = (items: TEMPLATE) => {
  return (
    <Link href={"/dashboard/content/" + items.slug}>
      <div className=" h-50 bg-white shadow-xl p-3 flex flex-col gap-3 rounded-lg cursor-pointer hover:text-white hover:bg-primary transition-all hover:scale-105 duration-150 ">
        <Image src={items.icon} alt="icon" height={50} width={50} />
        <h1 className="text-xl font-bold">{items.name}</h1>
        <p>{items.decs}</p>
      </div>
    </Link>
  );
};

export default TemplateCard;
