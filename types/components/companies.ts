interface CompaniesProps {
   details: {
      networks: [
         {
            id: number;
            name: string;
            logo_path: string | null;
         }
      ],
      production_companies: [
         {
            id: number;
            name: string;
            logo_path: string | null;
         }
      ]
   }
}
