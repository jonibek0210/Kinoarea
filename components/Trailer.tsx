import YouTube from 'react-youtube';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface ITrailerProps {
	videos: any
}

const Trailer: React.FC<ITrailerProps> = ({ videos }) => {
	const trailer = videos?.results?.find((vid: any) => vid.type == 'Trailer' && vid.official === true)
	const key = trailer ? trailer.key : videos?.results[0]?.key

	return (
		<div className="mt-20 max-lg:mt-14 max-md:mt-10 max-sm:mt-8">
			<div className="">
				<h2 className='text-white font-bold || text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl'>Trailer</h2>
			</div>
			<div className="mt-10 max-lg:mt-6 relative h-[800px] max-2xl:h-[700px] max-xl:h-[500px] max-lg:h-[400px] max-md:h-[300px] max-sm:h-[200px]">
				<YouTube
					className='absolute top-0 left-0 bottom-0 right-0'
					videoId={key}
					opts={{
						width: '100%',
						height: '100%',
					}}
				/>
			</div>
		</div>
	)
};

export default Trailer;