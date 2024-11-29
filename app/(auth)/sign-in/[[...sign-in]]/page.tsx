"use client"
// import { SignIn } from '@clerk/nextjs'

// export default function Page() {
//   return(
//     <div className='h-screen flex justify-center items-center'>
//         <SignIn />
//     </div>
//   ) 
// }


import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignInPage() {
  const { isSignedIn  } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
     router.push("/dashboard");
    }
  }, [isSignedIn, router ]);

  // Show the SignIn component only if the user is not signed in
  return(
    <div className="h-screen flex justify-center items-center">
     {
       !isSignedIn ? <SignIn /> : null
     } 
    </div>
  );
}
