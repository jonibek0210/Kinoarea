import * as React from 'react';

import { RxHamburgerMenu } from "react-icons/rx"
import Movie from './children/Movie';

export interface IPopularFilmsProps {
}

const PopularFilms: React.FC = (props) => {
   return (
      <div>
         <div className="flex-col justify-between items-center max-xl:items-start">
            <div className="flex items-center max-md:gap-5">
               <h1 className='text-6xl max-xl:text-5xl max-md:text-3xl max-sm:text-2xl || font-black text-white'>Популярные фильмы</h1>
               <button className='hidden max-md:block'><RxHamburgerMenu size={25} color='#ffffff' /></button>
            </div>
            <div className="w-3/5 max-xl:w-4/5 max-lg:w-full || mt-5 || max-md:absolute max-md:-top-full">
               <ul className='flex justify-between'>
                  <li className='text-lg max-md:text-sm font-bold text-[#ffffff35] hover:text-white ease-in duration-75 cursor-pointer'>Всё время</li>
                  <li className='text-lg max-md:text-sm font-bold text-[#ffffff35] hover:text-white ease-in duration-75 cursor-pointer'>2020</li>
                  <li className='text-lg max-md:text-sm font-bold text-[#ffffff35] hover:text-white ease-in duration-75 cursor-pointer'>2019</li>
                  <li className='text-lg max-md:text-sm font-bold text-[#ffffff35] hover:text-white ease-in duration-75 cursor-pointer'>2018</li>
                  <li className='text-lg max-md:text-sm font-bold text-[#ffffff35] hover:text-white ease-in duration-75 cursor-pointer'>2017</li>
                  <li className='text-lg max-md:text-sm font-bold text-[#ffffff35] hover:text-white ease-in duration-75 cursor-pointer'>2016</li>
                  <li className='text-lg max-md:text-sm font-bold text-[#ffffff35] hover:text-white ease-in duration-75 cursor-pointer'>2015</li>
               </ul>
            </div>
         </div>
         <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 || gap-5 max-md:gap-x-2 max-md:gap-y-4 || pt-12">
            <Movie />
            <Movie />
            <Movie />
            <Movie />
         </div>
      </div>
   );
}

export default PopularFilms