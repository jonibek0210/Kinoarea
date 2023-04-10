/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useEffect, useState } from "react";
import { Scrollbar, A11y } from 'swiper';
import { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Movie from "./children/Movie";

import 'swiper/css';
import 'swiper/css/scrollbar';

interface CollectionProps {
   collection: {
      id: number
      name: string,
      overview: string
      parts: [
         {
            id: number
            title: string
            poster_path: string | null
            vote_average: number
            first_air_date: string
            release_date: string
         }
      ],
   }
}

const Collection: React.FC<CollectionProps> = ({ collection }) => {
   const KEY: string = "1bb078d910403b47ba1478583d67aa0b"
   const URL: string = "https://api.themoviedb.org/3/"
   const [data, setData] = useState<{ name: string; parts: [{ id: number; title: string; poster_path: string | null; vote_average: number; first_air_date: string; release_date: string }], overview: string }>();

   useEffect(() => {
      axios.get(`${URL}collection/${collection.id}?api_key=${KEY}&language=en-US`)
         .then(res => {
            if (res.status === 200 || res.status === 201) {
               setData(res.data);
            }
         })
   }, [collection.id])

   return (
      <div className="mt-10">
         <div className="">
            <h2 className="text-4xl max-lg:text-3xl max-sm:text-2xl font-medium text-white">{data?.name}</h2>
            <p className="text-xl max-lg:text-base max-sm:text-sm text-gray-400 mt-5 max-sm:mt-3">{data?.overview}</p>
         </div>
         <div className="mt-3 max-sm:mt-2">
            <Swiper
               className="pb-5"
               scrollbar={{ draggable: true }}
               modules={[Controller, Scrollbar, A11y]}
               spaceBetween={8}
               slidesPerView={2}
               breakpoints={{
                  640: {
                     slidesPerView: 3,
                     spaceBetween: 8
                  },
                  768: {
                     slidesPerView: 4,
                     spaceBetween: 10
                  },
                  1024: {
                     slidesPerView: 4,
                     spaceBetween: 15
                  },
                  1280: {
                     slidesPerView: 4,
                  },
                  1536: {
                     slidesPerView: 4,
                     spaceBetween: 20
                  }
               }}
            >
               {
                  data?.parts?.map((item: {
                     id: number
                     title: string
                     poster_path: string | null
                     vote_average: number
                     first_air_date: string
                     release_date: string
                  }) => {
                     return (
                        <SwiperSlide key={item.id}>
                           <Movie item={item} />
                        </SwiperSlide>
                     )
                  })
               }
            </Swiper>
         </div>
      </div>
   );
}

export default Collection;