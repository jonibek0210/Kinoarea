interface IStarringProps {
   actors: {
      cast: [
         {
            id: number;
            name: string;
            character: string;
            job: string;
            profile_path: string | null;
            roles: any;
            jobs: any;
         }
      ],
      crew: [
         {
            id: number;
            name: string;
            character: string;
            job: string;
            profile_path: string | null;
            roles: any;
            jobs: any;
         }
      ]
   }
}