/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import CompaniesInfo from './CompaniesInfo';

const Companies: React.FC<CompaniesProps> = ({ details }) => {

   const [modal, setModal] = useState<any>(false);
   const [id, setId] = useState<number>(0);

   return (
      <>
         <div className="mt-10 flex flex-col items-center justify-center gap-10 pb-10 border-b-2 border-gray-700">
            {
               details.networks ?
                  <div className="">
                     <div className="text-center">
                        <h2 className='text-2xl font-medium text-white mb-5'>Телесеть</h2>
                     </div>
                     <div className="flex items-center max-sm:grid max-sm:grid-cols-2 gap-5">
                        {
                           details?.networks?.map((net: {
                              id: number;
                              name: string;
                              logo_path: string | null;
                           }) => {
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
                     details?.production_companies?.map((company: {
                        id: number;
                        name: string;
                        logo_path: string | null;
                     }) => {
                        return (
                           <div onClick={() => { setId(company.id), setModal(true) }} key={company.id} className="w-fit flex flex-col items-center justify-center cursor-pointer">
                              <div className="w-full">
                                 <img className='w-full object-cover' src={company.logo_path ? `https://image.tmdb.org/t/p/w500${company.logo_path}` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'} alt={'logo'} />
                              </div>
                              <div className="mt-2">
                                 <p className='text-white text-center max-sm:text-sm'>{company.name}</p>
                              </div>
                           </div>
                        )
                     })
                  }
               </div>
            </div>
         </div>
         {
            modal ?
               <CompaniesInfo company_id={id} setModal={setModal} />
               : null
         }
      </>
   );
}

export default Companies;