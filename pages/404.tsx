import Layout from '@/layout/Layout';
import Link from 'next/link';
import * as React from 'react';

interface IPageNotFoundProps {
}
// font-family: 'PT Sans', sans-serif;
const PageNotFound: React.FunctionComponent<IPageNotFoundProps> = (props) => {
   return (
      <Layout>
         <section className='py-20 max-2xl:py-16 max-md: || flex items-center justify-center'>
            <div className=" text-center text-white">
               <div className="">
                  <h1 className='text-9xl max-xl:text-8xl max-md:text-7xl || font-black'>404</h1>
                  <h2 className='text-6xl max-xl:text-5xl max-md:text-4xl max-[330px]:text-2xl || leading-8 max-xl:leading-7 max-md:leading-5 max-[330px]:leading-3 || font-black'>Page not found</h2>
                  <p className='text-xl mt-10 max-xl:mt-6 max-md:mt-4'>404: The page you are looking for isn’t here</p>
               </div>
               <div className="mt-20 max-xl:mt-10 max-md:mt-7">
                  <Link href={`/`}>
                     <button className='bg-[#3657CB] || rounded-md max-xl:rounded-[5px] || py-3 px-11 max-xl:px-7 max-xl:py-2 max-md:my-[6px] max-md:px-3 || text-white max-md:text-xs font-medium'>Go back to main page</button>
                  </Link>
               </div>
            </div>
         </section>
      </Layout>
   )
};



export default PageNotFound;
