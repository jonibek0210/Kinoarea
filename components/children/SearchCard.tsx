/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

interface SearchProps {
	item: {
		id: number
		poster_path: string | null
		profile_path: string | null
		name: string
		title: string
		release_date: string
		first_air_date: string
		vote_average: number
	}
	type: string
}

const SearchCard: React.FC<SearchProps> = ({ item, type }) => {
	const imgMovie = item?.poster_path ? `https://image.tmdb.org/t/p/w500${item?.poster_path}` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
	const imgPeople = item?.profile_path ? `https://image.tmdb.org/t/p/w500/${item?.profile_path}` : 'https://www.jku.at/fileadmin/bilderpool/Icons/Avatar.jpg'

	return (
		<Link href={{ pathname: type == 'person' ? `/actors/${item.id}` : type == 'movie' ? `/movies/${item.id}` : `/series/${item.id}`, query: { id: item.id } }} className="h-full flex justify-between items-center p-3 max-sm:p-2 relative rounded-lg bg-[#1E2538]" >
			<div className="h-full w-full flex max-md:flex-col items-center max-md:justify-between gap-5 max-sm:gap-2">
				<div className=" overflow-hidden rounded-lg max-sm:rounded-md w-1/6 max-lg:w-2/6 max-md:w-full">
					<img className='w-full h-full object-cover' src={type === 'person' ? imgPeople : imgMovie} alt={item?.title || item?.name} />
				</div>
				<div className="">
					<p className='text-3xl max-lg:text-xl max-md:text-sm max-sm:text-xs || font-bold max-sm:font-medium text-white max-md:text-center'>{item?.title || item?.name}</p>
					<p className='text-2xl max-lg:text-lg max-md:text-sm font-normal text-[#F2F60F] max-md:text-center'>{item?.release_date || item?.first_air_date}</p>
				</div>
			</div>
			<div className="w-fit h-fit absolute || right-10 max-md:right-5 || top-10 max-md:top-5">
				{
					item.vote_average ?
						<p className='px-1 max-lg:px-1 || text-lg max-md:text-sm max-sm:text-xs || font-black max-md:font-bold || rounded text-white bg-[#4BCB36]'>{item?.vote_average.toFixed(1) || ''}</p>
						: null
				}
			</div>
		</Link >
	)
}

export default SearchCard