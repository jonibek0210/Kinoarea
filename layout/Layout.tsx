import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

type Layout = {
   children: React.ReactNode
}

const Layout = ({ children }: Layout) => {
   const [hide, setHide] = useState<boolean>(false);

   useEffect(() => {
      window.onscroll = () => {
         const scroll: number = window.pageYOffset;
         if (scroll > 1000) {
            setHide(true);
         } else {
            setHide(false);
         }
      };
   }, []);

   const scrollUP = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <>
         <Header />
         {
            hide ?
               <button onClick={scrollUP} className="arrowUP"><BsArrowUp size={25} color="#ffffff" /></button>
               : null
         }
         <main className="container m-auto px-6">
            {children}
         </main>
         <Footer />
      </>
   );
}

export default Layout;