/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { useEffect, useState } from 'react'
import Episode from './Episode';

interface SeasonsProps {
	details: {
		seasons: [
			{
				id: number;
				name: string;
				poster_path: string | null;
				air_date: number;
				overview: string;
				season_number: number;
			}
		]
	}
	tv_id: number
}

const Seasons: React.FC<SeasonsProps> = ({ details, tv_id }) => {

	return (
		<div className="mt-20 max-lg:mt-14 max-md:mt-10 max-sm:mt-8">
			<div className="">
				<h2 className='text-white font-bold || text-6xl max-xl:text-5xl max-lg:text-4xl'>Эпизоды</h2>
			</div>
			<div className="grid grid-cols-1 gap-10 max-xl:gap-7 || mt-10 max-lg:mt-6 max-md:mt-4">
				{
					details?.seasons?.map((season: {
						id: number;
						name: string;
						poster_path: string | null;
						air_date: number;
						overview: string;
						season_number: number;
					}) => {
						return (
							season.name !== 'Specials' ?
								<div key={season.id} className="">
									<div className="flex max-md:flex-col gap-5 max-md:gap-2">
										<div className="w-[30%] max-md:w-[50%] max-sm:w-full rounded-lg overflow-hidden cursor-pointer bg-slate-700">
											<img className='w-full object-contain' src={season.poster_path ? `https://image.tmdb.org/t/p/w500${season.poster_path}` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'} alt="" />
										</div>
										<div className="w-[100%] flex flex-col justify-around gap-2 px-5 max-xl:px-3 max-md:px-0 || || text-white">
											<div className="">
												<p className='text-4xl max-xl:text-3xl max-lg:text-2xl font-bold'>{season.name}</p>
												<p className='text-sm'>{season.air_date}</p>
											</div>
											{
												season.overview ?
													<p className='text-xl max-xl:text-base max-lg:text-xs max-md:text-sm text-gray-300'>{season.overview}</p>
													: null
											}
										</div>
									</div>
									<div className="">
										<Episode season_number={season.season_number} tv_id={tv_id} />
									</div>
								</div> : null
						)
					})
				}
			</div>
		</div>
	);
}

export default Seasons;

// 