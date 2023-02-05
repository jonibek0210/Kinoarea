import Image from 'next/image';
import * as React from 'react';
import Movie from './children/Movie';

import { RxHamburgerMenu } from "react-icons/rx"

export interface IMoviesProps {
}

export function Movies(props: IMoviesProps) {
   return (
      <div>
         <div className="flex max-xl:flex-col justify-between items-center max-xl:items-start">
            <div className="flex items-center max-md:gap-5">
               <h1 className='text-6xl max-xl:text-5xl max-md:text-3xl || font-black text-white'>Сейчас в кино</h1>
               <button className='hidden max-md:block'><RxHamburgerMenu size={25} color='#ffffff' /></button>
            </div>
            <div className="w-3/5 max-xl:w-4/5 max-lg:w-full || max-xl:mt-5 || max-md:absolute max-md:-top-full">
               <ul className='flex justify-between'>
                  <li className='text-lg max-md:text-sm font-bold text-[#ffffff35] hover:text-white ease-in duration-75 cursor-pointer'>Все</li>
                  <li className='text-lg max-md:text-sm font-bold text-[#ffffff35] hover:text-white ease-in duration-75 cursor-pointer'>Боевики</li>
                  <li className='text-lg max-md:text-sm font-bold text-[#ffffff35] hover:text-white ease-in duration-75 cursor-pointer'>Приключения</li>
                  <li className='text-lg max-md:text-sm font-bold text-[#ffffff35] hover:text-white ease-in duration-75 cursor-pointer'>Комедии</li>
                  <li className='text-lg max-md:text-sm font-bold text-[#ffffff35] hover:text-white ease-in duration-75 cursor-pointer'>Фантастика</li>
                  <li className='text-lg max-md:text-sm font-bold text-[#ffffff35] hover:text-white ease-in duration-75 cursor-pointer'>Триллеры</li>
                  <li className='text-lg max-md:text-sm font-bold text-[#ffffff35] hover:text-white ease-in duration-75 cursor-pointer'>Драма</li>
               </ul>
            </div>
         </div>
         <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 || gap-5 max-md:gap-x-2 max-md:gap-y-4 || pt-12">
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
         </div>
      </div>
   );
}
