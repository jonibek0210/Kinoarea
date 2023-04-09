export interface IMoviesPageProps {
   movies: [
      {
         id: number;
         title: string;
         name: string;
         vote_average: number;
         poster_path: string | null;
         first_air_date: string;
         release_date: string;

         backdrop_path: string | null;
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
   nowPlaying: [
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
   topRated: [
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
