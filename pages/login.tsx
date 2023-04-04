import Link from 'next/link';
import * as React from 'react';

interface IloginProps {
}

const login: React.FunctionComponent<IloginProps> = (props) => {
   return (
      <div className="w-screen h-screen bg-[#191E2E]">
         <div className="max-w-[500px] w-full px-10 py-5 absolute top-1/2 left-1/2 flex flex-col -translate-x-1/2 -translate-y-1/2">
            <div className="mb-8">
               <h1 className='text-white text-4xl'>Log In</h1>
            </div>
            <form className='flex flex-col gap-5'>
               <input className='bg-[#1E2538] py-5 pl-6 rounded-lg text-white font-semibold tracking-wider outline-white placeholder:text-gray-500' placeholder='password' type="password" />
               <input className='bg-[#1E2538] py-5 pl-6 rounded-lg text-white font-semibold tracking-wider outline-white placeholder:text-gray-500' placeholder='email' type="email" />
               <button className='bg-[#F2F60F] py-3 rounded-lg text-lg font-semibold'>Log In</button>
            </form>
            <Link className='w-full' href='/signup'>
               <button className='w-full py-3 rounded-lg text-lg font-semibold mt-2 bg-[#F2F60F]'>sign up</button>
            </Link>
         </div>
      </div>
   )
};

export default login;
