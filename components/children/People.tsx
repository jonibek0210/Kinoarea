/* eslint-disable @next/next/no-img-element */

const People: React.FC<any> = (props) => {
   const { item } = props

   const img = item?.profile_path ? `https://image.tmdb.org/t/p/w500/${item?.profile_path}` : 'https://www.jku.at/fileadmin/bilderpool/Icons/Avatar.jpg'

   return (
      <a href={`actors/${item.id}`} className="flex flex-col justify-between">
         <div className="h-full rounded-xl max-md:rounded-md || overflow-hidden">
            <img className='object-cover h-full' src={img} alt={item?.name} />
         </div>
         <div className="mt-3 max-lg:mt-2">
            <p className="text-white font-bold truncate || text-lg max-lg:text-base">{item?.name}</p>
         </div>
      </a>
   )
}

export default People