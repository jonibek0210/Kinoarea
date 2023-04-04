/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

interface IPeopleProps {
   item: any
}

const People: React.FC<IPeopleProps> = ({ item }) => {
   const img = item?.profile_path ? `https://image.tmdb.org/t/p/w500/${item?.profile_path}` : 'https://www.jku.at/fileadmin/bilderpool/Icons/Avatar.jpg'

   return (
      <Link href={{ pathname: `/actors/${item.id}`, query: { id: item.id } }} className="flex flex-col justify-between">
         <div className="h-full rounded-xl max-md:rounded-md || overflow-hidden">
            <img className='object-cover h-full' src={img} alt={item?.name} />
         </div>

         <div className="mt-3 max-lg:mt-2">
            <p className="text-white font-bold truncate || text-lg max-lg:text-base">{item?.name}</p>
            {
               item.character ?
                  <p className="font-bold truncate || text-base text-yellow-300">{item?.character}</p>
                  : null
            }
            {
               item.job ?
                  <p className="font-bold truncate || text-base text-yellow-300">{item?.job}</p>
                  : null
            }
            {
               item.roles ?
                  <p className="font-bold truncate || text-base text-yellow-300">{item?.roles[0]?.character}</p>
                  : null
            }
            {
               item.jobs ?
                  <p className="font-bold truncate || text-base text-yellow-300">{item?.jobs[0]?.job}</p>
                  : null
            }
         </div>
      </Link>
   )
}

export default People