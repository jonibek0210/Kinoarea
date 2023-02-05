import Image from 'next/image';
import * as React from 'react';

interface IMovieProps {
}

const Movie: React.FunctionComponent<IMovieProps> = (props) => {
   return (
      <div className="">
         <div className="rounded-xl overflow-hidden relative">
            <p className='absolute || right-5 max-md:right-2 || top-3 max-md:top-2 || px-2 max-md:px-1 || py-1 max-sm:py-0 || text-lg max-md:text-sm max-sm:text-xs || font-black max-md:font-bold || rounded text-white bg-[#4BCB36]'>10.00</p>
            <Image className='w-full object-cover' src="/images/movie-img.jpg" width={1000} height={1000} alt="movie" />
         </div>
         <div className="mt-2">
            <p className='text-lg max-md:text-base font-bold text-white truncate'>Плохие парни навсегда</p>
            <p className='text-sm font-normal text-[#F2F60F] truncate'>Боевик, комедия, криминал</p>
         </div>
      </div>
   );
};

export default Movie;
