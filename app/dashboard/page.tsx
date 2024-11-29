"use client"
import SearchSection  from "./_components/SearchSection";
import { useState } from "react";
import TemplateListSection  from "./_components/TemplateListSection";
export default function Dashboard() {

  const [userSearchInput, setUserSearchInput] = useState<string>("");


  return (
    <div>
      {/* Search section */}

      <SearchSection onSearchInput={(value: string)=> setUserSearchInput(value)} />

      {/* Template list section */}

      <TemplateListSection useSearchInput={userSearchInput} />
    </div>
  )
}
