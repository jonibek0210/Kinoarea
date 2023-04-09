interface ActorReviewProps {
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
}
