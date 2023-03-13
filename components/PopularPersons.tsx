import People from "./children/People"
import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx"
import { IMovies } from '@/types/data';
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

const PopularPersons: React.FC<any> = (props) => {
	const { persons } = props

	const [burger, setBurger] = useState(false)
	let pk = "w-2/5 max-xl:w-2/5 max-md:w-full max-md:h-screen || max-xl:mt-5 max-md:mt-0 || max-md:fixed max-md:-top-full max-md:bg-black/30 ease-out duration-300"
	let mb = "w-2/5 max-xl:w-2/5 max-md:w-full max-md:h-screen || max-xl:mt-5 max-md:mt-0 || z-50 max-md:fixed max-md:top-0 max-md:left-0 max-md:backdrop-blur-sm max-md:bg-black/30 ease-out duration-300"

	return (
		<div className="mt-40 max-xl:mt-28 max-lg:mt-20 max-md:mt-10 max-sm:mt-8">
			<div className="flex max-xl:flex-col justify-between items-center max-xl:items-start">
				<div className="max-md:w-full flex items-center max-md:justify-center max-md:gap-5">
					<h1 className='text-4xl max-xl:text-3xl max-md:text-xl || font-black text-white'>Популярные персоны</h1>
					<button onClick={() => setBurger(true)} className='hidden max-md:block'><RxHamburgerMenu size={25} color='#ffffff' /></button>
				</div>
				<div className={!burger ? pk : mb}>
					<div className="hidden max-md:flex max-md:justify-center max-md:my-5">
						<Image src="/images/logo.svg" alt="logo" width="130" height="30" />
						<button onClick={() => setBurger(false)} className="absolute right-5 top-5"><IoMdClose size={30} color="#ffffff" /></button>
					</div>
					<ul className='flex max-md:flex-col justify-between max-md:justify-center max-md:items-center max-md:gap-5'>
						<li className='text-lg max-md:text-sm font-bold text-[#ffffff90] hover:text-white ease-in duration-75 cursor-pointer'>За неделю</li>
						<li className='text-lg max-md:text-sm font-bold text-[#ffffff90] hover:text-white ease-in duration-75 cursor-pointer'>За месяц</li>
						<li className='text-lg max-md:text-sm font-bold text-[#ffffff90] hover:text-white ease-in duration-75 cursor-pointer'>За год</li>
					</ul>
				</div>
			</div>
			<div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 || gap-5 max-md:gap-x-2 max-md:gap-y-4 || pt-12 max-lg:pt-7 max-md:pt-5 max-sm:pt-4">
				{
					persons.map((item: any) => <People key={item.id} item={item} />)
				}
			</div>
		</div>
	)
}

export default PopularPersons