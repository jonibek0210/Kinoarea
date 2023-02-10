import Image from "next/image";
import { useState } from "react"

import { FiSearch } from "react-icons/fi"
import { FaFacebookF } from "react-icons/fa"
import { IoLogoVk, IoMdClose } from "react-icons/io"
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"

interface IHeader {

}

const Header: React.FC = (props) => {
   const [burger, setBurger] = useState(true)

   return (
      <header className="container m-auto flex justify-between items-center || px-6 py-10 max-xl:py-7 max-md:py-3">
         <div className="flex">
            <button onClick={() => setBurger(true)} className="bg-white p-[14px] max-md:p-[8px] || rounded-[5px] mr-[12px] max-md:block hidden"><RxHamburgerMenu color="#3657CB" /></button>
            <button className="bg-white p-[14px] max-md:p-[8px] || rounded-[5px] mr-[12px] max-xl:block hidden"><FiSearch color="#3657CB" size={15} /></button>
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
                     <li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">Афиша</li>
                     <li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">Медиа</li>
                     <li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">Фильмы</li>
                     <li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">Актёры</li>
                     <li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">Новости</li>
                     <li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">Подборки</li>
                     <li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">Категории</li>
                  </ul>
               </nav>
            </div>
         </div>
         <div className="flex items-center">
            <button className="bg-white p-[17.6px] rounded-[10px] mr-[12px] max-xl:hidden"><FiSearch color="#3657CB" size={15} /></button>
            <button className="bg-[#3657CB] || rounded-[10px] max-xl:rounded-[5px] || py-3 px-11 max-xl:px-7 max-xl:py-2 max-md:my-[6px] max-md:px-3 || text-white max-md:text-xs font-bold leading-[166.5%]">Вайти</button>
         </div>
      </header>
   );
}

export default Header;