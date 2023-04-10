import { useState } from 'react';

import Movie from "./children/Movie"

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface RecMoviesProps {
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

const RecMovies: React.FC<RecMoviesProps> = ({ movies, description }) => {
   let btn: number = Math.ceil(movies?.length / 4)
   let step: number = 4
   const [page, setPage] = useState<number>(1);
   const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
   };

   return (
      <div className="mt-20 max-lg:mt-14 max-md:mt-10 max-sm:mt-8">
         <div className="">
            <h2 className="text-white font-bold || text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl || text-center">{description}</h2>
         </div>
         <div className="grid grid-cols-4 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 || gap-5 max-lg:gap-4 || mt-10 max-lg:mt-6">
            {
               movies?.slice(page * step - 4, page * step).map((item: {
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
         <Stack spacing={2} display={'flex'} alignItems={'center'} className='mt-14 max-lg:mt-10 max-sm:mt-6'>
            <Pagination count={btn} variant="outlined" defaultPage={1} onChange={handleChange} shape="rounded" size="large" />
         </Stack>
      </div>
   );
}

export default RecMovies;