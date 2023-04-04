/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

interface EpisodeProps {
	season_name: any
	season_number: any
	tv_id: any
}

const Episode: React.FC<EpisodeProps> = ({ season_number, season_name, tv_id }) => {
	const [episodes, setEpisodes] = useState<any>([]);

	useEffect(() => {
		axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/season/${season_number}?api_key=1bb078d910403b47ba1478583d67aa0b&language=en-US`)
			.then(res => {
				if (res.status === 200 || res.status === 201) {
					setEpisodes(res.data);
				}
			})
			.catch(err => console.log(err))
	}, [])

	console.log(episodes);
	return (
		<div className=" gap-5 mt-7">
			{
				<Swiper
					spaceBetween={8}
					slidesPerView={2.1}
					className='max'
					breakpoints={{
						640: {
							slidesPerView: 2.1,
							spaceBetween: 8
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 10
						},
						1024: {
							slidesPerView: 3.3,
							spaceBetween: 15
						},
						1280: {
							slidesPerView: 4.3,
						},
						1536: {
							slidesPerView: 5.3,
							spaceBetween: 20
						}
					}}
				>
					{
						episodes?.episodes?.map((episode: any) => {
							return (
								<SwiperSlide className='h-full' key={episode.id}>
									<div className="h-full flex flex-col justify-between">
										<div className="">
											<img className=' object-contain' src={episode.still_path ? `https://image.tmdb.org/t/p/w500${episode.still_path}` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'} alt="" />
										</div>
										<div className="text-white">
											<p className=' '>episode {episode.episode_number}</p>
											<p className='text-gray-400 max-sm:text-sm'>{episode?.name}</p>
										</div>
									</div>
								</SwiperSlide>
							)
						})
					}
				</Swiper>
			}
		</div>
	);
}

export default Episode;