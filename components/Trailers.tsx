import * as React from 'react';

import { BsArrowRight } from "react-icons/bs"

export interface ITrailersProps {
}

const Trailers: React.FC<any> = (props) => {
	return (
		<div>
			<div className="flex justify-between items-center">
				<h2 className='text-6xl tren font-black text-white'>Новые трейлеры</h2>
				<a href="#" className='flex items-center gap-2'>
					<p className='text-xl font-bold text-white'>Все трейлеры </p>
					<BsArrowRight className='text-2xl' color='white' />
				</a>
			</div>
			<div className="mt-10">
				<iframe src="" frameBorder="0"></iframe>

				<div className="">
				</div>
			</div>
		</div>
	);
}

export default Trailers