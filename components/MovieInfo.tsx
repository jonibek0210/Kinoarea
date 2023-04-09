import Link from "next/link";

const MovieInfo: React.FC<IMovieInfoProps> = ({ details }) => {

   return (
      <>
         <ul className="w-1/2 max-md:w-full flex flex-col gap-5 text-white">
            <li className="flex text-lg font-semibold">
               <p className="flex-auto max-sm:text-sm">дата выхода:</p>
               <span className="text-[#F2F60F] underline font-light max-sm:text-sm">{details.release_date || details.first_air_date}</span>
            </li>
            {
               details.last_air_date
                  ?
                  <li className="flex text-lg font-semibold">
                     <p className="flex-auto max-sm:text-sm">дата последнего эфира:</p>
                     <span className="text-[#F2F60F] underline font-light max-sm:text-sm">{details.last_air_date}</span>
                  </li>
                  :
                  null
            }
            <li className="flex text-lg font-semibold">
               <p className="flex-auto max-sm:text-sm">Страна:</p>
               {details?.production_countries ? details?.production_countries?.map((production: { name: string }, idx: number) => <span key={idx} className="text-[#F2F60F] underline font-light ml-1 max-sm:text-sm">{production?.name}</span>) : ''}
            </li>
            <li className="flex text-lg font-semibold">
               <p className="flex-auto max-sm:text-sm">исходный язык:</p>
               <span className="text-[#F2F60F] underline font-light max-sm:text-sm">{details.original_language}</span>
            </li>
            <li className="flex text-lg font-semibold truncate">
               <p className="flex-auto max-sm:text-sm mr-5">разговорные языки:</p>
               {
                  details?.spoken_languages?.map((language: { english_name: string }, idx: number) => {
                     return <span key={idx} className="text-[#F2F60F] underline font-light ml-1 max-sm:text-sm">{language.english_name}</span>
                  })
               }
            </li>
            {
               details.tagline ?
                  <li className="flex text-lg font-semibold truncate">
                     <p className="flex-auto max-sm:text-sm">Слоган:</p>
                     <span className="text-[#F2F60F] underline font-light max-sm:text-sm">{details.tagline}</span>
                  </li> : null
            }
            {
               details.in_production ?
                  <li className="flex text-lg font-semibold truncate">
                     <p className="flex-auto max-sm:text-sm">Статус:</p>
                     <span className="text-[#F2F60F] underline font-light max-sm:text-sm">{details.in_production ? 'Продолжается' : 'Завершился'}</span>
                  </li> : null
            }
         </ul>

         <ul className="w-1/2 max-md:w-full flex flex-col gap-5 text-white">
            <li className="flex text-lg font-semibold truncate">
               <p className="flex-auto max-sm:text-sm">Жанр:</p>
               {
                  details?.genres?.map((genre: { id: number; name: string; }) => {
                     return <span key={genre.id} className="text-[#F2F60F] underline font-light ml-1 max-sm:text-sm">{genre.name}</span>
                  })
               }
            </li>
            {
               details.number_of_seasons ?
                  <li className="flex text-lg font-semibold">
                     <p className="flex-auto max-sm:text-sm">количество сезонов:</p>
                     <span className="text-[#F2F60F] underline font-light max-sm:text-sm">{details.number_of_seasons}</span>
                  </li> : null
            }
            {
               details.number_of_episodes ?
                  <li className="flex text-lg font-semibold">
                     <p className="flex-auto max-sm:text-sm">количество серий:</p>
                     <span className="text-[#F2F60F] underline font-light max-sm:text-sm">{details.number_of_episodes}</span>
                  </li> : null
            }
            {
               details.budget
                  ?
                  <li className="flex text-lg font-semibold">
                     <p className="flex-auto max-sm:text-sm">Бюджет:</p>
                     <span className="text-[#F2F60F] underline font-light max-sm:text-sm">{details.budget}$</span>
                  </li>
                  :
                  null
            }
            {
               details.revenue
                  ?
                  <li className="flex text-lg font-semibold">
                     <p className="flex-auto max-sm:text-sm">Доход:</p>
                     <span className="text-[#F2F60F] underline font-light max-sm:text-sm">{details.revenue}$</span>
                  </li>
                  :
                  null
            }
            {
               details.runtime ?
                  <li className="flex text-lg font-semibold">
                     <p className="flex-auto max-sm:text-sm">Время:</p>
                     <span className="text-[#F2F60F] underline font-light max-sm:text-sm">{details.runtime} min</span>
                  </li> : null
            }
            <li className="flex text-lg font-semibold truncate">
               <p className="flex-auto max-sm:text-sm mr-5">компания:</p>
               {
                  details?.production_companies?.map((company: { id: number; name: string }) => {
                     return <span key={company.id} className="text-[#F2F60F] underline font-light ml-1 max-sm:text-sm">{company.name}</span>
                  })
               }
            </li>
            {
               details.created_by ?
                  <li className="flex text-lg font-semibold">
                     <p className="flex-auto max-sm:text-sm">Создатель:</p>
                     {
                        details.created_by.map((Creator: { id: number; name: string; }) => {
                           return (
                              <Link key={Creator.id} href={`actors/${Creator.id}`}>
                                 <span className="text-[#F2F60F] underline font-light ml-1 max-sm:text-sm">{Creator.name}</span>
                              </Link>
                           )
                        })
                     }
                  </li> : null
            }
            {
               details.origin_country ?
                  <li className="flex text-lg font-semibold">
                     <p className="flex-auto max-sm:text-sm">страна происхождения:</p>
                     <span className="text-[#F2F60F] underline font-light max-sm:text-sm">{details.origin_country}</span>
                  </li> : null
            }
         </ul>
      </>
   )
}

export default MovieInfo