import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Layout({ children }) {
  return (
    <div className={`flex flex-col w-full h-full relative ${ptSans.className}`}>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />k
    </div>
  );
}

export { Header, Navbar, Footer, Layout };
