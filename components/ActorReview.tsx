/* eslint-disable @next/next/no-img-element */
import Network from "./children/Network";

const ActorReview: React.FC<ActorReviewProps> = ({ details, external }) => {
	let years: number = new Date().getFullYear() - new Date(details?.birthday).getFullYear()

	let gender: string = details?.gender === 1 ? 'Женский' : 'Мужской'
	// let adult: string = details?.adult ? 'не взрослый' : 'взрослый'

	const img = details?.profile_path ? `https://image.tmdb.org/t/p/w500${details?.profile_path}` : 'https://www.jku.at/fileadmin/bilderpool/Icons/Avatar.jpg'

	return (
		<div className="container m-auto flex items-center gap-10 mt-10 max-lg:mt-5 px-48 max-2xl:px-32 max-xl:px-0">
			<div className=" overflow-hidden rounded-xl max-md:hidden">
				<img className='object-cover' src={img} alt={details?.name} />
			</div>
			<div className="text-white  max-md:w-full">
				<div className="">
					<h1 className="font-black max-md:font-bold || text-6xl max-xl:text-5xl max-md:text-3xl">{details?.name}</h1>
				</div>
				<div className="hidden max-md:flex justify-center">
					<div className="w-fit flex justify-center rounded-md overflow-hidden my-5">
						<img className='object-cover' src={img} alt={details?.name} />
					</div>
				</div>
				<ul className='mt-8 flex flex-col || gap-6 max-lg:gap-3 || justify-between h-full'>
					<li className="flex max-sm:flex-col justify-between text-lg font-semibold || mb-6 max-lg:mb-2"><p className="underline text-white">Информация</p><p className="text-[#6D717D]">Биография</p></li>
					<li className="flex max-sm:flex-col justify-between font-semibold text-lg"><p className='mr-11 max-xl:mr-5'>Место рождения:</p> <span className="text-[#F2F60F] text-base max-lg:text-sm truncate">{details?.place_of_birth || '-'}</span></li>
					<li className="flex max-sm:flex-col justify-between font-semibold text-lg"><p>Дата рождения:</p> <span className="text-[#F2F60F] text-base max-lg:text-sm"> {details?.birthday ? `(лет ${years}) ${details?.birthday}` : '-'}</span></li>
					<li className="flex max-sm:flex-col justify-between font-semibold text-lg"><p>Пол:</p> <span className="text-[#F2F60F] text-base max-lg:text-sm">{gender}</span></li>
					{/* <li className="flex max-sm:flex-col justify-between font-semibold text-lg"><p>взрослый:</p> <span className="text-[#F2F60F] text-base max-lg:text-sm">{adult}</span></li> */}
					{/* <li className="flex max-sm:flex-col justify-between font-semibold text-lg"><p>Известный отдел:</p> <span className="text-[#F2F60F] text-base max-lg:text-sm">{details?.known_for_department}</span></li> */}
				</ul>
				<div className="mt-7">
					<Network external={external} details={details} />
				</div>
			</div>
		</div>
	);
}

export default ActorReview;