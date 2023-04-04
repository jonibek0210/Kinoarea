import * as React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import Movie from './children/Movie';

export interface IPopularProps {
   popular: any
}

const Popular: React.FC<any> = (props) => {
   const { popular } = props

   return (
      <div className='mt-40 max-xl:mt-28 max-lg:mt-20 max-md:mt-10 max-sm:mt-8'>
         <div className="flex max-xl:flex-col justify-between items-center max-xl:items-start">
            <h1 className='text-4xl max-xl:text-3xl max-md:text-xl || font-black text-white'>Популярные фильмы</h1>
         </div>
         <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 || gap-5 max-md:gap-x-2 max-md:gap-y-4 || pt-12 max-lg:pt-7 max-md:pt-5 max-sm:pt-4">
            {
               popular.slice(0, 4).map((item: { id: any; }) => <Movie key={item.id} item={item} />)
            }
         </div>
      </div>
   );
}

export default Popular