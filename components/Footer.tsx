import { FaFacebookF } from "react-icons/fa"
import { IoLogoVk } from "react-icons/io"
import { AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai"
import Image from "next/image";

const Footer = () => {
   return (
      <footer className="container m-auto px-6 flex flex-col items-center pb-10">
         <div className="w-1/4 max-md:w-2/4 flex justify-between || mt-14 max-xl:mt10 max-md:mt-8">
            <button><IoLogoVk className="text-[30px] max-lg:text-[25px] max-md:text-[20px]  || text-[#3C4767] hover:text-white ease-in duration-100 cursor-pointer " /></button>
            <button><AiOutlineInstagram className="text-[30px] max-lg:text-[25px] max-md:text-[20px]  || text-[#3C4767] hover:text-white ease-in duration-100 cursor-pointer " /></button>
            <button><FaFacebookF className="text-[30px] max-lg:text-[25px] max-md:text-[20px]  || text-[#3C4767] hover:text-white ease-in duration-100 cursor-pointer " /></button>
            <button><AiOutlineTwitter className="text-[30px] max-lg:text-[25px] max-md:text-[20px]  || text-[#3C4767] hover:text-white ease-in duration-100 cursor-pointer " /></button>
            <button><AiFillYoutube className="text-[30px] max-lg:text-[25px] max-md:text-[20px]  || text-[#3C4767] hover:text-white ease-in duration-100 cursor-pointer " /></button>
         </div>
         <div className="w-4/5 || mt-14 max-xl:mt10 max-md:mt-5">
            <nav className="">
               <ul className="flex max-md:flex-col || justify-between items-center max-md:gap-5">
                  <li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">Афиша</li>
                  <li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">Новости</li>
                  <li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">Персоны</li>
                  <li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">Рейтинги</li>
                  <li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">Рецензии</li>
                  <li className="text-[17px] max-xl:text-sm || text-white font-bold leading-5 hover:text-gray-300 ease-in duration-100 cursor-pointer">Каталог фильмов</li>
               </ul>
            </nav>
         </div>
         <div className="mt-20 max-xl:mt-14 max-lg:mt-10 max-md:mt-7">
            <p className="text-[#E3E6F070] font-normal max-sm:text-sm">2020 © Kinoarea.  Все права защищены</p>
         </div>
         <div className="mt-10 max-xl:mt-8 max-lg:mt-6 max-md:mt-4">
            <a className="max-sm:text-sm font-normal underline text-[#E3E6F070]" href="#">Политика конфиденциальности</a>
         </div>
      </footer>
   );
}

export default Footer;