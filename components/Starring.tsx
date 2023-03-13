import People from "./children/People"

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const Starring: React.FC<any> = (props) => {
   const { data } = props

   return (
      <div className="mt-20 max-lg:mt-14 max-md:mt-10 max-sm:mt-8">
         <div className="flex justify-between items-center">
            <h2 className="text-white font-black || text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">В главных ролях:</h2>
            <a className="flex flex-wrap items-center text-xl max-lg:text-lg text-white font-bold gap-5 max-lg:gap-3 max-sm:hidden" href="">All the actors <HiOutlineArrowNarrowRight color="#ffffff" /></a>
         </div>
         <div className="grid grid-cols-4 max-xl:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 || gap-5 max-lg:gap-4 || mt-10 max-lg:mt-6 max-md:mt-4">
            {
               data.cast.slice(0, 12).map((item: any) => <People key={item.id} item={item} />)
            }
         </div>
         <div className="justify-center mt-10 max-md:mt-5 max-sm:flex hidden">
            <button className='px-12 max-xl:px-8 max-md:px-7 || py-5 max-xl:py-4 max-md:py-3 || border-[2px] rounded-lg || text-lg  || font-bold || text-white border-white'>All the actors</button>
         </div>
      </div>
   )
}

export default Starring