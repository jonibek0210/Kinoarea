interface IMovieInfoProps {
   details: {
      release_date: string
      first_air_date: string
      last_air_date: string
      original_language: string
      tagline: string
      in_production: boolean
      number_of_seasons: number
      number_of_episodes: number
      budget: number
      runtime: number
      origin_country: string
      revenue: number
      production_countries: [
         {
            name: string
         }
      ]
      spoken_languages: [
         {
            english_name: string
         }
      ]
      genres: [
         {
            id: number;
            name: string;
         }
      ]
      created_by: [
         {
            id: number;
            name: string;
         }
      ]
      production_companies: [
         {
            id: number;
            name: string;
         }
      ]
   }
}