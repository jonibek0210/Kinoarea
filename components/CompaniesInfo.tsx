/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { useEffect, useState } from 'react'
import Network from './children/Network';
import { IoMdClose } from 'react-icons/io';

interface CompaniesInfoProps {
   company_id: number
   setModal: Function
}

const CompaniesInfo: React.FC<CompaniesInfoProps> = ({ company_id, setModal }) => {

   const [data, setData] = useState<any>();

   useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/company/${company_id}?api_key=1bb078d910403b47ba1478583d67aa0b`)
         .then(res => {
            if (res.status === 200 || res.status === 201) {
               setData(res.data);
            }
         })
         .catch(err => console.log(err))
   }, [company_id])

   return (
      <div className="w-screen h-screen flex items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
         <div onClick={() => setModal(false)} className="fixed top-0 left-0 w-screen h-screen bg-black/40"></div>

         <div className="flex flex-col gap-5 || py-20 max-lg:py-16 max-md:py-12 max-sm:py-10 || px-10 max-md:px-8 max-sm:px-5 || mx-6 || rounded-xl max-lg:rounded-lg || bg-[#1e2538] relative z-10">
            <div className="pb-5 border-b border-gray-400">
               <img className='w-full object-cover' src={data?.logo_path ? `https://image.tmdb.org/t/p/w500${data?.logo_path}` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'} alt={'logo'} />
            </div>
            <div className="">
               <ul className="px-10 max-md:px-8 max-sm:px-5 pb-5 border-b border-gray-400">
                  <li className='flex justify-between'>
                     <p className='max-sm:text-sm text-white'>name</p> <span className='truncate max-sm:text-sm text-yellow-400'>{data?.name || '-'}</span>
                  </li>
                  <li className='flex justify-between'>
                     <p className='max-sm:text-sm text-white'>главное управление</p> <span className='truncate max-sm:text-sm text-yellow-400'>{data?.headquarters || '-'}</span>
                  </li>
                  <li className='flex justify-between'>
                     <p className='max-sm:text-sm text-white'>страна происхождения</p> <span className='truncate max-sm:text-sm text-yellow-400'>{data?.origin_country || '-'}</span>
                  </li>
               </ul>
               <div className="flex items-center justify-center gap-3 mt-5">
                  <button onClick={() => setModal(false)} className='text-[30px] text-white'><IoMdClose /></button>
                  <Network details={data} external={data} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default CompaniesInfo;