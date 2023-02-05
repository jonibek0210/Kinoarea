import Image from "next/image";

import { FiSearch } from "react-icons/fi"
import { FaFacebookF } from "react-icons/fa"
import { IoLogoVk } from "react-icons/io"
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"

const Header = () => {
   return (
      <header className="container m-auto flex justify-between items-center || px-6 py-10 max-xl:py-7 max-md:py-3 || bg-[#55555550]">
         <div className="flex">
            <button className="bg-white p-[14px] max-md:p-[8px] || rounded-[5px] mr-[12px] max-md:block hidden"><RxHamburgerMenu color="#3657CB" /></button>
            <button className="bg-white p-[14px] max-md:p-[8px] || rounded-[5px] mr-[12px] max-xl:block hidden"><FiSearch color="#3657CB" size={15} /></button>
         </div>
         <div className="flex max-xl:flex-col || w-full justify-between items-center">
            <div className="">
               <Image src="/images/logo.svg" alt="logo" width="130" height="31" className="max-md:w-24 " />
               <div className="flex justify-between || mt-3 max-xl:mt-2">
                  <button><IoLogoVk size={17} className="text-[#686868] hover:text-white ease-in duration-100 cursor-pointer " /></button>
                  <button><AiOutlineInstagram size={17} className="text-[#686868] hover:text-white ease-in duration-100 cursor-pointer " /></button>
                  <button><FaFacebookF size={17} className="text-[#686868] hover:text-white ease-in duration-100 cursor-pointer " /></button>
                  <button><AiOutlineTwitter size={17} className="text-[#686868] hover:text-white ease-in duration-100 cursor-pointer " /></button>
               </div>
            </div>
            <div className="w-full || m-auto max-xl:mt-5 || px-20 max-xl:px-8 || max-md:absolute max-md:-top-full">
               <div className="hidden max-md:block">
                  <Image src="/images/logo.svg" alt="logo" width="130" height="31" />
               </div>
               <nav className="">
                  <ul className="flex justify-between">
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