export interface IActorPageProps {
   details: {
      name: string

      profile_path: string | null
      birthday: string
      gender: number
      adult: boolean
      place_of_birth: string | null
      homepage: string | null
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
   combined_credits: {
      cast: [
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
   images: [
      {
         file_path: string | null;
         vote_average: number;
      }
   ]
   translations: [
      {
         data: {
            biography: string
         }
         name: string
      }
   ]
}