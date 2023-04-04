import { GetServerSideProps } from "next/types"
import Layout from "@/layout/Layout"

const key = "1bb078d910403b47ba1478583d67aa0b"

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const season_number = query.id

	const TV_season = await fetch(`https://api.themoviedb.org/3/tv/1399/season/1?api_key=${key}&language=en-US`)
	const season = await TV_season.json()

	return {
		props: {
			season: season
		}
	}
}

interface ISeasonProps {
	season: any
}

const Season: React.FC<ISeasonProps> = ({ season }) => {

	return (
		<Layout>
			<div className="">

			</div>
		</Layout>
	)
};

export default Season;