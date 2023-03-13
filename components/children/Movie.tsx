/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

interface IMovieProps {
}

const Movie: React.FC<any> = (props) => {
   const { item } = props

   const img = item?.poster_path ? `https://image.tmdb.org/t/p/w500${item?.poster_path}` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'

   return (
      <Link href={`/${item.id}`} className="flex flex-col justify-between">
         <div className="bg-slate-500 h-full rounded-xl max-md:rounded-md || overflow-hidden relative">
            <p className='absolute || right-3 max-md:right-2 || top-3 max-md:top-2 || px-1 max-lg:px-1 || text-lg max-md:text-sm max-sm:text-xs || font-black max-md:font-bold || rounded text-white bg-[#4BCB36]'>{item?.vote_average.toFixed(1)}</p>
            <img className='object-cover h-full' src={img} alt={item?.title} />
         </div>

         <div className="mt-2">
            <p className='text-lg max-md:text-sm || font-bold truncate text-white '>{item?.title}</p>
            <p className='text-sm font-normal text-[#F2F60F] truncate'>{item?.release_date}</p>
         </div>
      </Link>
   );
};

export default Movie;

