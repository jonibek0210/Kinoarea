import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Layout = {
   children: React.ReactNode
}

const Layout = ({ children }: Layout) => {
   return (
      <>
         <Header />
         <main className="container m-auto px-6">
            {children}
         </main>
         <Footer />
      </>
   );
}

export default Layout;