// import React from 'react'
import {SignedIn, SignedOut, SignInButton, SignUpButton} from '@clerk/clerk-react'
import { Navigate } from "react-router-dom";
function Auth() {
  return (
    <div className=' flex items-center justify-center min-h-screen'>
        <SignedOut >
            <SignInButton mode='modal' className=' m-10 shadow-2xl shadow-black px-4 py-2 rounded-lg border-[4px] border-blue-800 hover:bg-blue-900 hover:text-white' />
            <SignUpButton mode='modal' className=' m-10 shadow-2xl shadow-black px-4 py-2 rounded-lg border-[4px] border-blue-800 hover:bg-blue-900 hover:text-white' />
        </SignedOut>

        <SignedIn>
        <Navigate to="/home" />
        </SignedIn>
    </div>
  )
}

export default Auth