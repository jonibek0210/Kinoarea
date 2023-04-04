/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

interface CompaniesProps {
   details: any
}

const Companies: React.FC<CompaniesProps> = ({ details }) => {

   return (
      <div className="mt-10 flex flex-col items-center justify-center gap-10 pb-10 border-b-2 border-gray-700">
         {
            details.networks ?
               <div className="">
                  <div className="text-center">
                     <h2 className='text-2xl font-medium text-white mb-5'>Телесеть</h2>
                  </div>
                  <div className="flex items-center max-sm:grid max-sm:grid-cols-2 gap-5">
                     {
                        details?.networks?.map((net: any) => {
                           return (
                              <div key={net.id} className="w-fit">
                                 <div className="w-40 max-sm:w-full">
                                    <img className='w-full object-cover' src={`https://image.tmdb.org/t/p/w500${net.logo_path}`} alt={'logo'} />
                                 </div>
                                 <div className="mt-2">
                                    <p className='text-white text-center max-sm:text-sm'>{net.name}</p>
                                 </div>
                              </div>
                           )
                        })
                     }
                  </div>
               </div>
               : null
         }
         <div className="flex flex-col justify-start">
            <div className="text-center">
               <h2 className='text-2xl font-medium text-white mb-5'>производственные компании</h2>
            </div>
            <div className="grid grid-cols-5 max-lg:grid-cols-3 gap-10 max-lg:gap-5 max-sm:grid-cols-2">
               {
                  details?.production_companies?.map((compan: any) => {
                     return (
                        <div key={compan.id} className="w-fit flex flex-col items-center justify-center">
                           <div className="w-full">
                              <img className='w-full object-cover' src={compan.logo_path ? `https://image.tmdb.org/t/p/w500${compan.logo_path}` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'} alt={'logo'} />
                           </div>
                           <div className="mt-2">
                              <p className='text-white text-center max-sm:text-sm'>{compan.name}</p>
                           </div>
                        </div>
                     )
                  })
               }
            </div>
         </div>
      </div>
   );
}

export default Companies;