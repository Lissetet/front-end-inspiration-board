import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({boards, setBoards}) => {
  return (
    <>
			<Header />
			<main className="max-w-7xl mx-auto pt-28 px-4 w-full flex flex-1 flex-col">
      	<Outlet />
			</main>
			<Footer/>
    </>
  )
};

export default Layout;