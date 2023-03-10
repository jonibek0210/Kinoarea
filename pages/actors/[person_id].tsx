/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { GetServerSideProps } from "next"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import Layout from "@/layout/Layout"
import PersonImages from '@/components/PersonImages'
import Img from '@/components/children/Img'
import Movie from '@/components/children/Movie'
import { useState } from 'react';

const key = "1bb078d910403b47ba1478583d67aa0b"

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const person_id = query.person_id
	console.log(person_id);

	const tagged_images = await fetch(`https://api.themoviedb.org/3/person/${person_id}/tagged_images?api_key=${key}&language=en-US&page=1`)
	const tagged = await tagged_images.json()

	const detail = await fetch(`https://api.themoviedb.org/3/person/${person_id}?api_key=${key}&language=en-US`)
	const details = await detail.json()

	const image = await fetch(`https://api.themoviedb.org/3/person/${person_id}/images?api_key=${key}`)
	const images = await image.json()

	const movie_credits = await fetch(`https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=${key}&language=en-US`)
	const movies = await movie_credits.json()

	return {
		props: {
			tagged: tagged,
			details: details,
			images: images.profiles,
			movies: movies.cast
		}
	}
}

const Person: React.FC<any> = (props) => {
	const { tagged, details, images, movies } = props

	let btn = Math.ceil(movies.length / 4)
	let step = 4
	const [page, setPage] = useState(1);
	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	console.log(details);

	let years = new Date().getFullYear() - new Date(details?.birthday).getFullYear()

	let gender = details?.gender === 1 ? 'Женский' : 'Мужской'
	let adult = details?.adult === 1 ? 'не взрослый' : 'взрослый'

	const img = details?.profile_path ? `https://image.tmdb.org/t/p/w500${details?.profile_path}` : 'https://www.jku.at/fileadmin/bilderpool/Icons/Avatar.jpg'

	return (
		<>
			<Head>
				<title>Netflix | {details?.name}</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<section className="container m-auto flex items-center gap-10 mt-10 max-lg:mt-5 px-48 max-2xl:px-32 max-xl:px-0">
					<div className="w-96 overflow-hidden rounded-xl max-md:hidden">
						<img className='object-cover' src={img} alt={details?.name} />
					</div>
					<div className="text-white max-md:w-full">
						<div className="">
							<h1 className="font-black max-md:font-bold || text-6xl max-xl:text-5xl max-md:text-3xl">{details?.name}</h1>
							<p className="font-medium text-2xl || mt-3 max-lg:mt-2">{details?.also_known_as.at(-1)}</p>
						</div>
						<div className="hidden max-md:flex justify-center rounded-md overflow-hidden my-5">
							<img className='object-cover' src={img} alt={details?.name} />
						</div>
						<ul className='mt-8 flex flex-col || gap-6 max-lg:gap-3 || justify-between h-full'>
							<li className="flex max-sm:flex-col justify-between text-lg font-semibold || mb-6 max-lg:mb-2"><p className="underline text-white">Информация</p><p className="text-[#6D717D]">Биография</p></li>
							<li className="flex max-sm:flex-col justify-between font-semibold text-lg"><p className='mr-11 max-xl:mr-5'>Место рождения:</p> <span className="text-[#F2F60F] text-base max-lg:text-sm truncate">{details?.place_of_birth}</span></li>
							<li className="flex max-sm:flex-col justify-between font-semibold text-lg"><p>Дата рождения:</p> <span className="text-[#F2F60F] text-base max-lg:text-sm">(лет {years}) {details?.birthday}</span></li>
							<li className="flex max-sm:flex-col justify-between font-semibold text-lg"><p>Пол:</p> <span className="text-[#F2F60F] text-base max-lg:text-sm">{gender}</span></li>
							<li className="flex max-sm:flex-col justify-between font-semibold text-lg"><p>Известный отдел:</p> <span className="text-[#F2F60F] text-base max-lg:text-sm">{details?.known_for_department}</span></li>
							<li className="flex max-sm:flex-col justify-between font-semibold text-lg"><p>взрослый:</p> <span className="text-[#F2F60F] text-base max-lg:text-sm">{adult}</span></li>
						</ul>
					</div>
				</section>
				<div className="mt-16 max-xl:mt-11 max-lg:mt-8 max-md:mt-6 max-sm:mt-3">
					<p className='text-xl max-lg:text-lg max-md:text-base || indent-10 max-xl:indent-7 max-lg:indent-5 max-md:indent-3 || leading-10 max-xl:leading-8 max-md:leading-6 || text-white'>{details.biography}</p>
				</div>
				<section className='mt-20 max-xl:mt-14 max-lg:mt-10 max-md:mt-5'>
					<h2 className='text-6xl max-lg:text-4xl max-sm:text-3xl || font-black text-white'>Лучшие фильмы</h2>
					<div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 || gap-5 max-md:gap-x-2 max-md:gap-y-4 || pt-12 max-lg:pt-7 max-md:pt-5 max-sm:pt-4">
						{
							movies.slice(page * step - 4, page * step).map((item: any) => <Movie key={item.id} item={item} />)
						}
					</div>
					<Stack spacing={2} display={'flex'} alignItems={'center'} className='mt-20 max-xl:mt-14 max-lg:mt-10 max-sm:mt-6'>
						<Pagination count={btn} variant="outlined" defaultPage={1} onChange={handleChange} shape="rounded" size="large" />
					</Stack>
				</section>
				<section className="mt-20 max-xl:mt-14 max-lg:mt-10 max-md:mt-5">
					<h2 className='text-6xl max-lg:text-4xl max-sm:text-3xl || font-black max-lg:font-bold text-white'>Фото</h2>
					<p className='text-2xl font-bold text-white mt-5 max-lg:mt-4 max-md:mt-3 max-sm:mt-2'>{details?.name}</p>
					<div className="grid grid-cols-5 max-xl:grid-cols-4	max-lg:grid-cols-3 max-md:grid-cols-2 gap-5 mt-8">
						{
							images.map((img: any) => <Img key={img.file_path} item={img} />)
						}
					</div>
				</section>
			</Layout>
		</>
	)
}

export default Person