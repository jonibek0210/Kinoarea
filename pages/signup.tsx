import Link from 'next/link';
import * as React from 'react';

interface IsignupProps {
}

const signup: React.FC<IsignupProps> = (props) => {
   return (
      <div className="w-screen h-screen bg-[#191E2E]">
         <div className="max-w-[500px] w-full px-10 py-5 absolute top-1/2 left-1/2 flex flex-col -translate-x-1/2 -translate-y-1/2">
            <div className="mb-8">
               <h1 className='text-white text-4xl'>Sign Up</h1>
            </div>
            <form className='flex flex-col gap-5'>
               <input className='bg-[#1E2538] py-5 pl-6 rounded-lg text-white font-semibold tracking-wider outline-white placeholder:text-gray-500' placeholder='name' type="text" />
               <input className='bg-[#1E2538] py-5 pl-6 rounded-lg text-white font-semibold tracking-wider outline-white placeholder:text-gray-500' placeholder='surname' type="text" />
               <input className='bg-[#1E2538] py-5 pl-6 rounded-lg text-white font-semibold tracking-wider outline-white placeholder:text-gray-500' placeholder='login' type="text" />
               <input className='bg-[#1E2538] py-5 pl-6 rounded-lg text-white font-semibold tracking-wider outline-white placeholder:text-gray-500' placeholder='password' type="password" />
               <input className='bg-[#1E2538] py-5 pl-6 rounded-lg text-white font-semibold tracking-wider outline-white placeholder:text-gray-500' placeholder='email' type="email" />
               <button className='bg-[#F2F60F] py-3 rounded-lg text-lg font-semibold'>sign up</button>
            </form>
            <Link className='w-full' href={'/login'}>
               <button className='w-full py-3 rounded-lg text-lg font-semibold mt-2 bg-[#F2F60F]'>Log In</button>
            </Link>
         </div>
      </div>
   )
};

export default signup;