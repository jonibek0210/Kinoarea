import { useState } from 'react';

import Movie from "./children/Movie"

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface IRecommendationsProps {
	recommendations: any
}

const Recommendations: React.FC<IRecommendationsProps> = ({ recommendations }) => {
	let btn = Math.ceil(recommendations?.length / 4)
	let step = 4
	const [page, setPage] = useState(1);
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	return (
		<div className="mt-20 max-lg:mt-14 max-md:mt-10 max-sm:mt-8">
			<h2 className="text-white font-bold || text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl || text-center">Похожие фильмы</h2>
			<div className="grid grid-cols-4 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 || gap-5 max-lg:gap-4 || mt-10 max-lg:mt-6">
				{
					recommendations?.slice(page * step - 4, page * step).map((item: any) => <Movie key={item.id} item={item} />)
				}
			</div>
			<Stack spacing={2} display={'flex'} alignItems={'center'} className='mt-20 max-xl:mt-14 max-lg:mt-10 max-sm:mt-6'>
				<Pagination count={btn} variant="outlined" defaultPage={1} onChange={handleChange} shape="rounded" size="large" />
			</Stack>
		</div>
	)
}

export default Recommendations