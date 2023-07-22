import { Link, NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';
import MenuDropDown from "./MenuDropDown";
import navigation from "../data/navigation";

const Header = () => {
  return (
    <header
      className="w-screen fixed flex justify-between py-2 px-4 items-center z-50
        bg-black bg-opacity-30 backdrop-blur"
    >
      <Link to="/" className="flex gap-2 items-center">
        <Icon icon="fluent:board-heart-20-filled" className="text-xl"/>
        <span className="text-base font-bold">Inspiration Board</span>
      </Link>
      <nav className="hidden lg:block">
        <ul className="flex gap-10 font-semibold">
          {navigation.map((page, index) => (
            <li key={index}>
              <NavLink to={page.path} className="flex items-center gap-2">
                <Icon icon={page.icon} className="text-lg inline-flex"/>
                <span>{page.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex justify-end gap-4">
        <MenuDropDown />
      </div>
    </header>
  );
}

export default Header;