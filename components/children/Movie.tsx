/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import Link from 'next/link';

interface IMovieProps {
	item: {
		id: number
		title?: string
		name?: string
		poster_path: string | null
		vote_average: number
		first_air_date?: string
		release_date?: string
	}
}

const Movie: React.FC<IMovieProps> = ({ item }) => {
	const [rate, setRate] = useState<any>('black');
	const img = item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'

	let a = +item.vote_average.toFixed(1)

	useEffect(() => {
		if (a <= 10 && a > 7) {
			setRate(`#28FF04`)
		} else if (a <= 7 && a > 5) {
			setRate(`#78CB36`)
		} else if (a <= 5 && a > 3) {
			setRate(`#CB6C36`)
		} else if (a <= 3) {
			setRate(`#FF0000`)
		}
	}, [a])

	return (
		<Link href={{ pathname: item.title ? `/movies/${item.id}` : `/series/${item.id}`, query: { id: item.id } }} className="flex flex-col justify-between">
			<div className="bg-slate-500 h-full rounded-xl max-lg:rounded-lg max-md:rounded-md || overflow-hidden relative">
				<p className={`absolute || right-3 max-md:right-2 || top-3 max-md:top-2 || px-1 max-lg:px-1 || text-lg max-md:text-sm max-sm:text-xs || font-black max-md:font-bold || rounded text-white`} style={{ backgroundColor: `${rate}` }}>{item.vote_average.toFixed(1)}</p>
				<img className='object-cover h-full' src={img} alt={item?.title} />
			</div>

			<div className="mt-2">
				<p className='text-lg max-md:text-sm || font-bold truncate text-white '>{item.title || item.name}</p>
				<p className='text-sm font-normal text-[#F2F60F] truncate'>{item.release_date || item.first_air_date}</p>
			</div>
		</Link >
	);
};

export default Movie;