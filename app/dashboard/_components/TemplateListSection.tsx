import Templates from "@/app/(data)/Templates";
import TemplateCard from "./TemplateCard";
import { useEffect, useState } from "react";

export interface TEMPLATE {
  name: string,
  decs: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  code:number,
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  requirement?: boolean;
}

export default function TemplateListSection({ useSearchInput }: any) {
  const [templateList, setTemplateList] = useState(Templates);

  useEffect(() => {
    if (useSearchInput) {
      const filterData = Templates.filter((item) => (
        item.name.toLowerCase().includes(useSearchInput.toLowerCase())
      ));
      setTemplateList(filterData);
    } else {
      setTemplateList(Templates);
    }
  }, [useSearchInput]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-5">
      {templateList.map((item: TEMPLATE, index: number): any => {
        return <TemplateCard {...item} key={index} />;
      })}
    </div>
  );
}
