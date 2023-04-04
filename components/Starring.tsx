import { useState } from "react";
import People from "./children/People"

interface IStarringProps {
	actors: any
}

const Starring: React.FC<IStarringProps> = ({ actors }) => {

	const [all, setAll] = useState(12);

	return (
		<div className="mt-20 max-lg:mt-14 max-md:mt-10 max-sm:mt-8">
			<div className="flex justify-between items-center">
				<h2 className="text-white font-black || text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">Актёрский состав <span className="text-yellow-400">{actors.cast.length}</span>:</h2>
			</div>
			<div className="grid grid-cols-4 max-xl:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 || gap-5 max-lg:gap-4 || mt-10 max-lg:mt-6 max-md:mt-4">
				{
					actors?.cast?.slice(0, all)?.map((item: any) => <People key={item.id} item={item} />)
				}
			</div>
			{
				all == actors.cast.length ?
					<div className="mt-16 max-lg:mt-14 max-md:mt-10 max-sm:mt-8">
						<div className="flex justify-between items-center">
							<h2 className="text-white font-black || text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">Съёмочный состав <span className="text-yellow-400">{actors.crew.length}</span>:</h2>
						</div>
						<div className="grid grid-cols-4 max-xl:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 || gap-5 max-lg:gap-4 || mt-10 max-lg:mt-6 max-md:mt-4">
							{
								actors?.crew?.slice(0, actors.crew.length)?.map((item: any) => <People key={item.id} item={item} />)
							}
						</div>
					</div>
					: null
			}
			{
				all !== actors.cast.length ?
					<div className="flex justify-center mt-10 max-md:mt-5">
						<button onClick={() => setAll(actors?.cast?.length)} className='px-12 max-xl:px-8 max-md:px-7 || py-5 max-xl:py-4 max-md:py-3 || border-[2px] rounded-lg || text-lg  || font-bold || text-white border-white'>All the actors</button>
					</div> : null
			}
		</div>
	)
}

export default Starring