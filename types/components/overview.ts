export interface IOverviewProps {
   details: {
      id: number
      title: string
      name: string
      poster_path: string | null
      backdrop_path: string | null
      vote_average: number
      overview: string
      popularity: number
      homepage: string | null

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
      revenue: number
      origin_country: string
      spoken_languages: [
         {
            english_name: string
         }
      ]
      created_by: [
         {
            id: number;
            name: string;
         }
      ]
      production_countries: [
         {
            name: string
         }
      ]
      genres: [
         {
            id: number;
            name: string;
         }
      ]

      production_companies: [
         {
            id: number;
            name: string;
            logo_path: string | null;
         }
      ]
   }
   external: {
      facebook_id: string | null
      imdb_id: string | null
      instagram_id: string | null
      twitter_id: string | null
      wikidata_id: string | null
      youtube_id: string | null
      tiktok_id: string | null
   }
}