import Image from 'next/image';
import Movie from './children/Movie';

import { RxHamburgerMenu } from "react-icons/rx"
import { IMovies } from '@/types/data';

export interface IMoviesProps {
   movies: IMovies[]
}

const Movies: React.FC = (props) => {

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
         <div className="flex justify-center mt-8">
            <button className='px-12 max-xl:px-8 max-md:px-7 || py-5 max-xl:py-4 max-md:py-3 || border-[2px] rounded-lg || text-lg  || font-bold || text-white border-white'>Все новинки</button>
         </div>
      </div>
   );
}

export default Movies