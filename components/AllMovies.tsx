import Movie from "./children/Movie";

interface AllMoviesProps {
   description: string
   movies: [
      {
         id: number;
         title: string;
         name: string;
         vote_average: number;
         poster_path: string | null;
         first_air_date: string;
         release_date: string;
      }
   ]
}

const AllMovies: React.FC<AllMoviesProps> = ({ movies, description }) => {

   return (
      <div className='mb-20 max-lg:mb-14 max-md:mb-10 max-sm:mb-8'>
         <div className="flex max-xl:flex-col justify-between items-center max-xl:items-start">
            <div className="max-md:w-full flex items-center max-md:justify-center max-md:gap-5">
               <h1 className='text-4xl max-xl:text-3xl max-md:text-xl || font-black text-white'>{description}</h1>
            </div>
         </div>
         <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 || gap-5 max-md:gap-x-2 max-md:gap-y-4 || pt-12 max-lg:pt-7 max-md:pt-5 max-sm:pt-4">
            {
               movies.map((item: {
                  id: number;
                  title: string;
                  name: string;
                  vote_average: number;
                  poster_path: string | null;
                  first_air_date: string;
                  release_date: string;
               }) =>
                  <Movie key={item.id} item={item} />
               )
            }
         </div>
      </div>
   );
}

export default AllMovies;