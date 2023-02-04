import Image from "next/image";

import { FiSearch } from "react-icons/fi"

const Header = () => {
   return (
      <header className="container m-auto flex justify-between px-6 py-10">
         <div className="bg-slate-600">
            <Image src="/images/logo.svg" alt="logo" width="100" height="100" />
         </div>
         <div className="w-3/5 max-lg:w-4/5 || bg-slate-300">
            <nav className="">
               <ul className="flex justify-between">
                  <li>Афиша</li>
                  <li>Медиа</li>
                  <li>Фильмы</li>
                  <li>Актёры</li>
                  <li>Новости</li>
                  <li>Подборки</li>
                  <li>Категории</li>
               </ul>
            </nav>
         </div>
         <div className="bg-orange-600">
            <button><FiSearch color="#3657CB" size={15} /></button>
            <button>Вати</button>
         </div>
      </header>
   );
}

export default Header;