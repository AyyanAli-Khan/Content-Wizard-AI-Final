import { UserProfile } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="h-screeen z-[-1] flex justify-center items-center">
      <UserProfile routing="hash" />
    </div>
  )
}
