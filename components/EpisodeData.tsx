/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Controller, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

import { IoMdClose } from 'react-icons/io';
import { RiArrowRightSLine } from 'react-icons/ri';
import People from './children/People';
import Trailer from './Trailer';

interface EpisodeDataProps {
	tv_id: number
	season_number: number
	episode_number: any
	setModal: Function
}

const EpisodeData: React.FC<EpisodeDataProps> = ({ tv_id, season_number, episode_number, setModal }) => {
	const [episode_numberData, setEpisode_numberData] = useState<any>([]);

	const KEY: string = "1bb078d910403b47ba1478583d67aa0b"
	const URL: string = "https://api.themoviedb.org/3/"

	useEffect(() => {
		axios.get(`${URL}tv/${tv_id}/season/${season_number}/episode/${episode_number}?api_key=${KEY}&language=en-US`)
			.then(res => {
				if (res.status === 200 || res.status === 201) {
					setEpisode_numberData(res.data);
				}
			})
			.catch(err => console.log(err))
	}, [episode_number, season_number, tv_id])

	return (
		<div className="w-screen h-screen flex items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-black/40">
			<div className="w-[90%] h-full px-16 max-md:px-10 max-sm:px-5 || py-14 max-md:py-10 rounded-lg overflow-auto relative bg-[#1e2538]">
				<div className="h-fit absolute top-2 right-2">
					<button onClick={() => setModal(false)} className='text-[30px] text-white'><IoMdClose /></button>
				</div>
				<div className="flex max-xl:flex-col gap-10 max-xl:gap-7 max-md:gap-5 max-sm:gap-2">
					<div className="overflow-hidden rounded-lg">
						<img className='w-full object-cover' src={episode_numberData?.still_path ? `https://image.tmdb.org/t/p/w500${episode_numberData?.still_path}` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'} alt={'IMG'} />
					</div>
					<div className="flex flex-col justify-center">
						<p className='text-white'>date: <span className='text-yellow-400'>{episode_numberData?.air_date}</span></p>
						<div className="flex text-gray-400">
							<p className='flex items-center'>season: <span className='text-white ml-1'>{episode_numberData?.season_number}</span> <RiArrowRightSLine /></p>
							<p className='flex items-center'>episode: <span className='text-white ml-1'>{episode_numberData?.episode_number}</span> <RiArrowRightSLine /></p>
							<p className='flex items-center'>time: <span className='text-white ml-1'>{episode_numberData?.runtime}</span></p>
						</div>
						<p className='mt-2 text-xl max-lg:text-lg max-sm:text-base text-white'>{episode_numberData?.name}</p>
						<p className='text-lg max-md:text-base max-sm:text-sm text-gray-400'>{episode_numberData?.overview}</p>
					</div>
				</div>
				<div className="mt-10 max-md:mt-6">
					<div className="">
						<div className="">
							<h2 className='text-3xl max-xl:text-2xl max-lg:text-xl font-medium text-white'>Приглашённые звёзды</h2>
						</div>
						<div className="mt-5">
							<Swiper
								spaceBetween={8}
								slidesPerView={2}
								className='max'
								breakpoints={{
									640: {
										slidesPerView: 2,
										spaceBetween: 10
									},
									768: {
										slidesPerView: 4,
										spaceBetween: 10
									},
									1024: {
										slidesPerView: 5,
										spaceBetween: 15
									},
									1280: {
										slidesPerView: 6,
									},
									1536: {
										slidesPerView: 6,
										spaceBetween: 20
									}
								}}
							>
								{
									episode_numberData?.guest_stars?.map((item: any) => {
										return (
											<SwiperSlide key={item.id}>
												<People item={item} />
											</SwiperSlide>
										)
									})
								}
							</Swiper>
						</div>
					</div>
					<div className="">
						<div className="">
							<h2 className='text-3xl max-xl:text-2xl max-lg:text-xl font-medium text-white'>Съёмочный состав</h2>
						</div>
						<div className="mt-5">
							<Swiper
								spaceBetween={8}
								slidesPerView={2}
								className='max'
								breakpoints={{
									640: {
										slidesPerView: 2,
										spaceBetween: 10
									},
									768: {
										slidesPerView: 4,
										spaceBetween: 10
									},
									1024: {
										slidesPerView: 6,
										spaceBetween: 15
									},
									1280: {
										slidesPerView: 6,
									},
									1536: {
										slidesPerView: 6,
										spaceBetween: 20
									}
								}}
							>
								{
									episode_numberData?.crew?.map((item: any) => {
										return (
											<SwiperSlide key={item.id}>
												<People item={item} />
											</SwiperSlide>
										)
									})
								}
							</Swiper>
						</div>
					</div>
				</div>
				<div className="">
					<div className="">
						<h2>trailer</h2>
					</div>
					<div className="">

					</div>
				</div>
			</div>
		</div>
	);
}

export default EpisodeData;