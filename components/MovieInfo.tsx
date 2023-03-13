
const MovieInfo: React.FC<any> = (props) => {
   const { details } = props

   console.log();

   return (
      <>
         <ul className="w-1/2 max-md:w-full flex flex-col gap-5 text-white">
            <li className="flex text-lg font-semibold">
               <p className="flex-auto">Год:</p>
               <span className="text-[#F2F60F] underline font-light">{details.release_date}</span>
            </li>
            <li className="flex text-lg font-semibold">
               <p className="flex-auto">Страна:</p>
               <span className="text-[#F2F60F] underline font-light">{details.production_countries[0] ? details.production_countries[0].name : ''}</span>
            </li>
            <li className="flex text-lg font-semibold">
               <p className="flex-auto">исходный язык:</p>
               <span className="text-[#F2F60F] underline font-light">{details.original_language}</span>
            </li>
            <li className="flex text-lg font-semibold">
               <p className="flex-auto">разговорные языки:</p>
               {
                  details.spoken_languages.map((language: any, idx: any) => {
                     return <span key={idx} className="text-[#F2F60F] underline font-light ml-1">{language.name}</span>
                  })
               }
            </li>
            <li className="flex text-lg font-semibold truncate">
               <p className="flex-auto">Слоган:</p>
               <span className="text-[#F2F60F] underline font-light">{details.tagline}</span>
            </li>
         </ul>

         <ul className="w-1/2 max-md:w-full flex flex-col gap-5 text-white">
            <li className="flex text-lg font-semibold">
               <p className="flex-auto">Жанр:</p>
               {
                  details.genres.map((genre: any) => {
                     return <span key={genre.id} className="text-[#F2F60F] underline font-light ml-1">{genre.name}</span>
                  })
               }
            </li>
            <li className="flex text-lg font-semibold">
               <p className="flex-auto">Бюджет:</p>
               <span className="text-[#F2F60F] underline font-light">{details.budget}$</span>
            </li>
            <li className="flex text-lg font-semibold">
               <p className="flex-auto">Доход:</p>
               <span className="text-[#F2F60F] underline font-light">{details.revenue}$</span>
            </li>
            <li className="flex text-lg font-semibold">
               <p className="flex-auto">Время:</p>
               <span className="text-[#F2F60F] underline font-light">{details.runtime} min</span>
            </li>
            <li className="flex text-lg font-semibold truncate">
               <p className="flex-auto mr-5">компания:</p>
               {
                  details.production_companies.map((company: any) => {
                     return <span key={company.id} className="text-[#F2F60F] underline font-light ml-1 ">{company.name}</span>
                  })
               }
            </li>
         </ul>
      </>
   )
}

export default MovieInfo