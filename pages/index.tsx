/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useState, useEffect } from 'react';
import { useHttp } from "../hook/http.hook";

import { IMovies } from '@/types/data';

import Layout from '@/layout/Layout'
import Movies from '@/components/Movies'
import Popular from '@/components/Popular'
import PopularPersons from '@/components/PopularPersons';

const inter = Inter({ subsets: ['latin'] })
const key = "1bb078d910403b47ba1478583d67aa0b"

export const getStaticProps = async () => {
	// const options = {
	// 	method: 'GET',
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	}
	// };

	const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`)
	const movies = await res.json()

	const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
	const popular = await response.json()

	const person = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${key}&language=en-US&page=1`)
	const persons = await person.json()

	return {
		props: {
			movies: movies.results,
			popular: popular.results,
			persons: persons.results
		}
	}
}

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

const Home: React.FC<any> = (props) => {
	const { movies, popular, persons } = props
	const { loading, error, request } = useHttp();
	const random = Math.floor(Math.random() * 20);

	return (
		<Layout>
			<Head>
				<title>Netflix | Home</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="">
				<div className="absolute top-0 left-0 z-[-1] opacity-30">
					<img className="w-screen h-screen object-cover ease-in duration-100" src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movies[random]?.backdrop_path}`} alt="" />
					<div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-[#1e2538] to-transparent"></div>
				</div>
				<section>
					<Movies movies={movies} />
				</section>
				<section className='mt-8'>
					<Popular popular={popular} />
				</section>
				<section>
					<PopularPersons persons={persons} />
				</section>
			</div>
		</Layout>
	)
}

export default Home