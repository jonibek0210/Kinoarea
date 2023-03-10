/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Layout from "@/layout/Layout"
import { GetServerSideProps } from "next"
import Overview from "@/components/Overview";
import Starring from "@/components/Starring";
import Recommendations from "@/components/Recommendations";
import Similar from '@/components/Similar';

const key = "1bb078d910403b47ba1478583d67aa0b"
let url = 'https://api.themoviedb.org/3/movie/'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const movie_id = query.id

	const res = await fetch(`${url}${movie_id}/credits?api_key=${key}&language=en-US`)
	const data = await res.json()

	const resspons = await fetch(`${url}${movie_id}?api_key=${key}&language=en-US`)
	const details = await resspons.json()

	const resspons3 = await fetch(`${url}${movie_id}/similar?api_key=${key}&language=en-US&page=1`)
	const similar = await resspons3.json()

	const resspons4 = await fetch(`${url}${movie_id}/recommendations?api_key=${key}&language=en-US&page=1`)
	const recommendations = await resspons4.json()

	const resspons5 = await fetch(`${url}${movie_id}/reviews?api_key=${key}&language=en-US&page=1`)
	const reviews = await resspons5.json()

	const video = await fetch(`${url}${movie_id}/videos?api_key=${key}&append_to_response=videos&language=en-US`)
	const video2 = await video.json()

	return {
		props: {
			data: data,
			details: details,
			similar: similar.results,
			recommendations: recommendations.results,
			reviews: reviews,
			video: video2,
		}
	}
}

const Movie: React.FC<any> = (props) => {
	const { data, details, similar, recommendations, reviews, video, } = props;

	return (
		<>
			<Head>
				<title>Netflix | {details?.title}</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<Overview details={details} />
				<Starring data={data} />
				<Similar similar={similar} />
				<Recommendations recommendations={recommendations} />
				<div className="">

				</div>
			</Layout>
		</>
	);
}

export default Movie