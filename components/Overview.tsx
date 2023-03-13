/* eslint-disable @next/next/no-img-element */
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from "react"
import { AiFillDislike, AiFillHeart, AiFillLike } from "react-icons/ai"
import { VscPlay } from 'react-icons/vsc'
import Chart from "./children/Chart"
import MovieInfo from "./MovieInfo"
import Starring from "./Starring"

export interface IOverviewProps {
}

const Overview: React.FC<any> = (props) => {
	const { details, item } = props

	// console.log(details);

	const img = details?.poster_path ? `https://image.tmdb.org/t/p/w500${details?.poster_path}` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'

	return (
		<div className="container m-auto mt-10 max-lg:mt-5 px-48 max-2xl:px-32 max-xl:px-20 max-lg:px-0">
			<div className="absolute top-0 left-0 z-[-1] opacity-60">
				<img className="w-screen h-screen object-cover " src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${details?.backdrop_path}`} alt="" />
				<div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-[#1e2538] to-transparent"></div>
			</div>

			<div className="">
				<div className="flex items-center gap-10">
					<div className="w-96 overflow-hidden rounded-xl block max-md:hidden">
						<img className='object-cover' src={img} alt={details?.title} />
					</div>
					<div className="w-3/5 max-md:w-full text-white ">
						<h2 className='text-5xl max-xl:text-3xl max-sm:text-2xl font-black'>{details?.title}</h2>
						<div className="max-md:flex max-md:items-center max-md:justify-center max-md:mt-3">
							<div className="w-3/5 max-sm:w-full overflow-hidden rounded-lg">
								<img className='object-cover hidden max-md:block' src={img} alt={details?.title} />
							</div>
							<Chart voteAverage={details?.vote_average} />
						</div>
						<div className="mt-3">
							<p className='mt-2 text-xl max-xl:text-lg max-lg:text-base max-sm:text-sm'>{details?.overview}</p>
						</div>
						<div className="mt-8 flex max-sm:justify-center">
							<button className='flex items-center gap-3 text-lg py-5 px-9 rounded-lg border-[2px] border-white'><VscPlay className='text-xl' color='#fff' /> Смотреть трейлер</button>
						</div>
					</div>
				</div>
				<div className="flex items-center gap-3 mt-4">
					<button className="p-4 bg-[#1B2133] rounded-lg text-[25px]"><AiFillLike color="white" /></button>
					<button className="p-4 bg-[#1B2133] rounded-lg text-[25px]"><AiFillDislike color="white" /></button>
					<button className="p-4 bg-[#1B2133] rounded-lg text-[25px]"><AiFillHeart color="white" /></button>
					<p className="text-white">popularity {details.popularity}</p>
				</div>
				<div className="flex max-md:flex-col gap-5 mt-11">
					<MovieInfo details={details} />
				</div>
			</div>
		</div>
	)
}

export default Overview