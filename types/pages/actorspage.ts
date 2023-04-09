export interface IActorsPageProps {
   persons: [
      {
         id: number
         name: string
         character: string
         job: string
         profile_path: string | null
         roles: any
         jobs: any
      }
   ]
}
