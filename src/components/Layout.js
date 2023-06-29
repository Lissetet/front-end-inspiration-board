import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
			<Header />
			<main className="max-w-7xl mx-auto pt-28 px-4">
      	<Outlet />
			</main>
			<Footer />
    </>
  )
};

export default Layout;