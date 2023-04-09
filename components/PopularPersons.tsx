import People from "./children/People"
import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx"
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

interface IPopularPersonsProps {
	persons: [
		{
			id: number;
			name: string; character: string;
			job: string;
			profile_path: string | null;
			roles: any;
			jobs: any;
		}
	]
}

const PopularPersons: React.FC<IPopularPersonsProps> = ({ persons }) => {

	return (
		<div className="mt-40 max-xl:mt-28 max-lg:mt-20 max-md:mt-10 max-sm:mt-8">
			<div className="flex max-xl:flex-col justify-between items-center max-xl:items-start">
				<div className="w-full flex items-center justify-between max-md:gap-5">
					<h1 className='text-4xl max-xl:text-3xl max-md:text-xl || font-black text-white'>Популярные персоны</h1>
					<div className="">
						<Link href={'/actors'}>
							<button className="flex items-center gap-3">
								<p className="text-xl font-medium text-white">All actors</p>
								<BsArrowLeft className="text-[22px] rotate-180" color={'white'} />
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 || gap-5 max-md:gap-x-2 max-md:gap-y-4 || pt-9 max-lg:pt-7 max-md:pt-5 max-sm:pt-4">
				{
					persons.slice(0, 8).map((item: {
						id: number;
						name: string; character: string;
						job: string;
						profile_path: string | null;
						roles: any;
						jobs: any;
					}) =>
						<People key={item.id} item={item} />
					)
				}
			</div>
		</div>
	)
}

export default PopularPersons