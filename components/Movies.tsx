import { useState } from "react"

import Image from 'next/image';
import Movie from './children/Movie';

import { RxHamburgerMenu } from "react-icons/rx"
import { IMovies } from '@/types/data';
import { IoMdClose } from "react-icons/io";

export interface IMoviesProps {
	movies: any
}

const Movies: React.FC<any> = (props) => {
	const { movies } = props
	const [burger, setBurger] = useState(false)
	let pk = "w-3/5 max-xl:w-4/5 max-lg:w-full max-md:h-screen || max-xl:mt-5 max-md:mt-0 || max-md:fixed max-md:-top-full max-md:bg-black/30 ease-out duration-300"
	let mb = "w-3/5 max-xl:w-4/5 max-lg:w-full max-md:h-screen || max-xl:mt-5 max-md:mt-0 || z-50 max-md:fixed max-md:top-0 max-md:left-0 max-md:backdrop-blur-sm max-md:bg-black/30 ease-out duration-300"

	return (
		<div className="">
			<div className="flex max-xl:flex-col justify-between items-center max-xl:items-start">
				<div className="max-md:w-full flex items-center max-md:justify-center max-md:gap-5">
					<h1 className='text-6xl max-xl:text-5xl max-md:text-3xl || font-black text-white'>Сейчас в кино</h1>
					<button onClick={() => setBurger(true)} className='hidden max-md:block'><RxHamburgerMenu size={25} color='#ffffff' /></button>
				</div>
				<div className={!burger ? pk : mb}>
					<div className="hidden max-md:flex max-md:justify-center max-md:my-5">
						<Image src="/images/logo.svg" alt="logo" width="130" height="30" />
						<button onClick={() => setBurger(false)} className="absolute right-5 top-5"><IoMdClose size={30} color="#ffffff" /></button>
					</div>
					<ul className='flex max-md:flex-col justify-between max-md:justify-center max-md:items-center max-md:gap-5'>
						<li className='text-lg max-md:text-sm font-bold text-[#ffffff90] hover:text-white ease-in duration-75 cursor-pointer'>Все</li>
						<li className='text-lg max-md:text-sm font-bold text-[#ffffff90] hover:text-white ease-in duration-75 cursor-pointer'>Боевики</li>
						<li className='text-lg max-md:text-sm font-bold text-[#ffffff90] hover:text-white ease-in duration-75 cursor-pointer'>Приключения</li>
						<li className='text-lg max-md:text-sm font-bold text-[#ffffff90] hover:text-white ease-in duration-75 cursor-pointer'>Комедии</li>
						<li className='text-lg max-md:text-sm font-bold text-[#ffffff90] hover:text-white ease-in duration-75 cursor-pointer'>Фантастика</li>
						<li className='text-lg max-md:text-sm font-bold text-[#ffffff90] hover:text-white ease-in duration-75 cursor-pointer'>Триллеры</li>
						<li className='text-lg max-md:text-sm font-bold text-[#ffffff90] hover:text-white ease-in duration-75 cursor-pointer'>Драма</li>
					</ul>
				</div>
			</div>
			<div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 || gap-5 max-md:gap-x-2 max-md:gap-y-4 || pt-12 max-lg:pt-7 max-md:pt-5 max-sm:pt-4">
				{
					movies.slice(0, 12).map((item: { id: any; }) => <Movie key={item.id} item={item} />)
				}
			</div>
			<div className="flex justify-center mt-8">
				<button className='px-12 max-xl:px-8 max-md:px-7 || py-5 max-xl:py-4 max-md:py-3 || border-[2px] rounded-lg || text-lg  || font-bold || text-white border-white'>Все новинки</button>
			</div>
		</div>
	);
}

export default Movies