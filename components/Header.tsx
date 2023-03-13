import { useEffect, useState } from "react"
import axios from "axios";
import Image from "next/image";

import { FiSearch } from "react-icons/fi"
import { FaFacebookF } from "react-icons/fa"
import { IoLogoVk, IoMdClose } from "react-icons/io"
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import Link from "next/link";

const Header: React.FC = (props) => {
	const [burger, setBurger] = useState(false)
	const [search, setSearch] = useState(false)
	const key = "1bb078d910403b47ba1478583d67aa0b"
	const [searchText, setSearchText] = useState('')
	const [content, setContent] = useState([]);

	const fetchSearch = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${searchText}&page=1&include_adult=false`
		)

		setContent(data.results)
	}

	return (
		<>
			<div className={search ? " w-screen h-screen fixed top-0 left-0 z-20 ease-out duration-500" : 'w-screen h-screen fixed -top-full left-0 z-20 ease-out duration-500'}>
				<div className={search ? "backdrop-blur-sm max-md:bg-black/30 w-screen h-screen fixed top-0 left-0 z-[-1]" : "backdrop-blur-sm max-md:bg-black/30 w-screen h-screen fixed -top-full left-0 z-[-1]"}></div>

				<div className="container m-auto mt-10 px-10">
					<div className="flex justify-center">
						<Image src="/images/logo.svg" alt="logo" width="130" height="30" />
					</div>
					<div className="flex mt-5">
						<div className="relative w-full">
							<input onChange={(e) => setSearchText(e.target.value)} className="w-full px-5 py-4 rounded-lg" type="text" />
							<button onClick={fetchSearch} className="absolute right-1 top-1 p-4 rounded-lg bg-[#F2F60F]">
								<FiSearch className="" color="#151A26" size={15} />
							</button>
						</div>
						<button onClick={() => setSearch(false)} className="ml-5"><IoMdClose size={30} color="#ffffff" /></button>
					</div>
				</div>
				<div className="">
					{/* {
						content.map((item: any) =>
							console.log(item)
						)
					} */}
				</div>
			</div>

			<header className="container m-auto flex justify-between items-center || px-6 py-10 max-xl:py-7 max-md:py-3">
				<div className="flex">
					<button onClick={() => setBurger(true)} className="bg-white p-[14px] max-md:p-[8px] || rounded-[5px] mr-[12px] max-md:block hidden"><RxHamburgerMenu color="#3657CB" /></button>
					<button onClick={() => setSearch(true)} className="bg-white p-[14px] max-md:p-[8px] || rounded-[5px] max-xl:block hidden"><FiSearch color="#3657CB" size={15} /></button>
				</div>
				<div className="flex max-xl:flex-col || w-full justify-between items-center">
					<div className="">
						<a href="#">
							<Image src="/images/logo.svg" alt="logo" width="130" height="31" className="max-md:w-24 " />
						</a>
						<div className="flex justify-between || mt-3 max-xl:mt-2">
							<button><IoLogoVk size={17} className="text-[#686868] hover:text-white ease-in duration-100 cursor-pointer " /></button>
							<button><AiOutlineInstagram size={17} className="text-[#686868] hover:text-white ease-in duration-100 cursor-pointer " /></button>
							<button><FaFacebookF size={17} className="text-[#686868] hover:text-white ease-in duration-100 cursor-pointer " /></button>
							<button><AiOutlineTwitter size={17} className="text-[#686868] hover:text-white ease-in duration-100 cursor-pointer " /></button>
						</div>
					</div>
					<div className={!burger ? "w-full || m-auto max-xl:mt-5 || px-20 max-xl:px-8 || max-md:absolute max-md:-top-full ease-out duration-300" : "w-full max-md:h-screen || m-auto max-xl:mt-5 || px-20 max-xl:px-8 || max-md:fixed max-md:-top-5 max-md:left-0 || max-md:z-50 max-md:backdrop-blur-sm max-md:bg-black/30 ease-out duration-300"}>
						<div className="hidden max-md:flex max-md:justify-center max-md:my-5">
							<Image src="/images/logo.svg" alt="logo" width="130" height="30" />
							<button onClick={() => setBurger(false)} className="absolute right-5 top-5"><IoMdClose size={30} color="#ffffff" /></button>
						</div>
						<nav className="">
							<ul className="flex max-md:flex-col || justify-between max-md:justify-center max-md:items-center || max-md:gap-4">
								<li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">
									<Link href="#">Афиша</Link>
								</li>
								<li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">
									<Link href="#">Медиа</Link>
								</li>
								<li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">
									<Link href="#">Фильмы</Link>
								</li>
								<li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">
									<Link href="/actors">Актеры</Link>
								</li>
								<li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">
									<Link href="#">Новости</Link>
								</li>
								<li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">
									<Link href="#">Подборки</Link>
								</li>
								<li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">
									<Link href="#">Категории</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div className="flex items-center">
					<button onClick={() => setSearch(true)} className="bg-white p-[17.6px] rounded-[10px] mr-[12px] max-xl:hidden"><FiSearch color="#3657CB" size={15} /></button>
					<button className="bg-[#3657CB] || rounded-[10px] max-xl:rounded-[5px] || py-3 px-11 max-xl:px-7 max-xl:py-2 max-md:my-[6px] max-md:px-3 || text-white max-md:text-xs font-bold leading-[166.5%]">Вайти</button>
				</div>
			</header>
		</>
	);
}

export default Header;