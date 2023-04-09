export interface IHomePageProps {
   movies: [
      {
         id: number;
         title: string;
         name: string;
         vote_average: number;
         poster_path: string | null;
         first_air_date: string;
         release_date: string;

         backdrop_path: string | null
      }
   ]
   TV: [
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
   popular: [
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
   persons: [
      {
         id: number;
         name: string; character: string;
         job: string;
         profile_path: string | null;
         roles: any;
         jobs: any;
      }
   ]
}

