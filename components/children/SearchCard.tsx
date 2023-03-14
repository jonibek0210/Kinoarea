/* eslint-disable @next/next/no-img-element */

import Link from "next/link"

const SearchCard: React.FC = (props) => {
   const { item, type } = props
   console.log(type);

   const imgMovie = item?.poster_path ? `https://image.tmdb.org/t/p/w500${item?.poster_path}` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
   const imgPeople = item?.profile_path ? `https://image.tmdb.org/t/p/w500/${item?.profile_path}` : 'https://www.jku.at/fileadmin/bilderpool/Icons/Avatar.jpg'

   return (
      <Link href={type === 'person' ? `actors/${item.id}` : `/${item.id}`} className="flex justify-between items-center p-3 relative rounded-lg bg-[#1E2538]">
         <div className="flex items-center w-3/4 gap-5">
            <div className="overflow-hidden rounded-lg w-1/6 bg-black">
               <img className='object-cover' src={type === 'person' ? imgPeople : imgMovie} alt={item?.title || item?.name} />
            </div>
            <div className="">
               <p className='text-lg max-md:text-sm || font-bold truncate text-white '>{item?.title || item?.name}</p>
               <p className='text-sm font-normal text-[#F2F60F] truncate'>{item?.release_date || item?.original_name}</p>
            </div>
         </div>
         <div className="">
            {/* <p className='absolute || right-3 max-md:right-2 || top-3 max-md:top-2 || px-1 max-lg:px-1 || text-lg max-md:text-sm max-sm:text-xs || font-black max-md:font-bold || rounded text-white bg-[#4BCB36]'>{item?.vote_average.toFixed(1) || null}</p> */}
         </div>
      </Link>
   )
}

export default SearchCard