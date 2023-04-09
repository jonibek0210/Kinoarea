import { useEffect, useState } from "react"
import axios from "axios";
import Image from "next/image";

import { FiSearch } from "react-icons/fi"
import { FaFacebookF } from "react-icons/fa"
import { IoLogoVk, IoMdClose } from "react-icons/io"
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import Link from "next/link";
import SearchCard from "./children/SearchCard";

const Header: React.FC = () => {
	const key = "1bb078d910403b47ba1478583d67aa0b"
	const [burger, setBurger] = useState<boolean>(false)
	const [search, setSearch] = useState<boolean>(false)
	const [searchText, setSearchText] = useState<string>('')
	const [content, setContent] = useState<any>([]);
	const [type, setType] = useState<string>('movie')

	const fetchSearch = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/search/${type}?api_key=${key}&language=en-US&query=${searchText}&page=1&include_adult=false`
		)
		setContent(data.results)
	}

	const handeleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
		if (event.key === "Enter") fetchSearch()
	}

	return (
		<>
			<div className={search ? "w-screen h-screen fixed top-0 left-0 px-6 z-20 ease-out duration-500" : 'fixed -top-[200%] left-0 px-6 z-20 ease-out duration-500'}>
				<div className={search ? "backdrop-blur-sm bg-black/90 w-screen h-screen fixed top-0 left-0 z-[-1]" : "backdrop-blur-sm bg-black/90 w-screen h-screen fixed -top-[200%] left-0 z-[-1]"}></div>

				<div className="container m-auto w-full flex mt-10 max-md:mt-5">
					<div className="w-full">
						<div className="flex justify-center">
							<Image className="w-auto h-auto" src="/images/logo.svg" alt="logo" width="130" height="30" />
						</div>
						<div className="flex mt-5">
							<div className="relative w-full">
								<input onChange={(e) => setSearchText(e.target.value)} onKeyDown={handeleKeyDown} className="w-full px-5 py-4 rounded-lg" type="text" />
								<button onClick={fetchSearch} className="absolute right-1 top-1 p-4 rounded-lg bg-[#F2F60F]">
									<FiSearch className="" color="#151A26" size={15} />
								</button>
							</div>
						</div>
						<div className="container m-auto flex max-md:flex-col items-center justify-around">
							<button onClick={() => setType('movie')} className={type !== 'movie' ? "w-full pt-5 border-b-[4px] border-transparent text-xl font-medium text-gray-200 hover:border-[#5e78df8b] hover:bg-[#ffffff10]" : "w-full pt-5 border-b-4 border-transparent text-xl font-medium text-gray-200 hover:bg-[#ffffff10] border-[#3657CB] bg-gradient-to-t from-[#3657CB30] to-transparent"}>Movies</button>
							<button onClick={() => setType('person')} className={type !== 'person' ? "w-full pt-5 border-b-[4px] border-transparent text-xl font-medium text-gray-200 hover:border-[#5e78df8b] hover:bg-[#ffffff10]" : "w-full pt-5 border-b-4 border-transparent text-xl font-medium text-gray-200 hover:bg-[#ffffff10] border-[#3657CB] bg-gradient-to-t from-[#3657CB30] to-transparent"}>Peoples</button>
							<button onClick={() => setType('tv')} className={type !== 'tv' ? "w-full pt-5 border-b-[4px] border-transparent text-xl font-medium text-gray-200 hover:border-[#5e78df8b] hover:bg-[#ffffff10]" : "w-full pt-5 border-b-4 border-transparent text-xl font-medium text-gray-200 hover:bg-[#ffffff10] border-[#3657CB] bg-gradient-to-t from-[#3657CB30] to-transparent"}>Series</button>
						</div>
					</div>
					<div className="max-md:absolute max-md:right-10 flex items-center justify-center">
						<button onClick={() => { setSearch(false), setContent([]) }} className="ml-5"><IoMdClose size={30} color="#ffffff" /></button>
					</div>
				</div>
				<div className="h-full">
					<div className="container m-auto grid max-md:grid-cols-2 gap-5 max-sm:gap-2 overflow-auto h-3/5 mt-5 pr-2">
						{
							content.length ?
								content.map((item: {
									id: number
									poster_path: string | null
									profile_path: string | null
									name: string
									title: string
									release_date: string
									first_air_date: string
									vote_average: number
								}) =>
									<SearchCard key={item.id} item={item} type={type} />
								)
								: null
						}
					</div>
				</div>
			</div>

			<header className="container m-auto flex justify-between items-center || px-6 py-10 max-xl:py-7 max-md:py-3">
				<div className="flex">
					<button onClick={() => setBurger(true)} className="bg-white p-[14px] max-md:p-[8px] || rounded-[5px] mr-[12px] max-md:block hidden"><RxHamburgerMenu color="#3657CB" /></button>
					<button onClick={() => setSearch(true)} className="bg-white p-[14px] max-md:p-[8px] || rounded-[5px] max-xl:block hidden"><FiSearch color="#3657CB" size={15} /></button>
				</div>
				<div className="flex max-xl:flex-col || w-full justify-between items-center">
					<div className="">
						<Link href="/">
							<Image src="/images/logo.svg" alt="logo" width="130" height="31" className="max-md:w-24 " />
						</Link>
						<div className="flex justify-between || mt-3 max-xl:mt-2">
							<button><IoLogoVk size={17} className="text-[#686868] hover:text-white ease-in duration-100 cursor-pointer " /></button>
							<button><AiOutlineInstagram size={17} className="text-[#686868] hover:text-white ease-in duration-100 cursor-pointer " /></button>
							<button><FaFacebookF size={17} className="text-[#686868] hover:text-white ease-in duration-100 cursor-pointer " /></button>
							<button><AiOutlineTwitter size={17} className="text-[#686868] hover:text-white ease-in duration-100 cursor-pointer " /></button>
						</div>
					</div>
					<div className={!burger ? "w-full || m-auto max-xl:mt-5 || px-20 max-xl:px-8 || max-md:absolute max-md:-top-[200%] ease-out duration-300" : "w-full max-md:h-screen || m-auto max-xl:mt-5 || px-20 max-xl:px-8 || max-md:fixed max-md:-top-5 max-md:left-0 || max-md:z-50 max-md:backdrop-blur-sm max-md:bg-black/30 ease-out duration-300"}>
						<div className="hidden max-md:flex max-md:justify-center max-md:my-5">
							<Image src="/images/logo.svg" alt="logo" width="130" height="30" />
							<button onClick={() => setBurger(false)} className="absolute right-5 top-5"><IoMdClose size={30} color="#ffffff" /></button>
						</div>
						<nav className="">
							<ul className="flex max-md:flex-col || justify-around max-md:justify-center max-md:items-center || max-md:gap-4">
								<li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">
									<Link href="/series">Сериалы</Link>
								</li>
								<li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">
									<Link href="/movies">Фильмы</Link>
								</li>
								<li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">
									<Link href="/actors">Актеры</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div className="flex items-center">
					<button onClick={() => setSearch(true)} className="bg-white p-[17.6px] rounded-[10px] mr-[12px] max-xl:hidden"><FiSearch color="#3657CB" size={15} /></button>
					<button className="bg-[#3657CB] || rounded-[10px] max-xl:rounded-[5px] || py-3 px-11 max-xl:px-7 max-xl:py-2 max-md:my-[6px] max-md:px-3 || text-white max-md:text-xs font-bold leading-[166.5%]">Войти</button>
				</div>
			</header>
		</>
	);
}

export default Header;