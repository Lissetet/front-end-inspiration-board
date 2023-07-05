import { Link, NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';
import MenuDropdown from "./MenuDropdown";
import navigation from "../data/navigation";


const Header = () => {
  const containerClasses = "flex justify-between py-2 px-4 items-center z-50"
  const colorClasses = "bg-black bg-opacity-30 backdrop-blur"
  const positionClasses = "top-0 left-0 fixed w-screen"


  return (
    <header 
      className={`${containerClasses} ${colorClasses} ${positionClasses}`}
    >
      <Link to="/" className="flex gap-2">        
        <Icon icon="fluent:board-heart-20-filled" className="text-xl"/>
        <span className="text-base font-bold">Inspiration Board</span>
      </Link>
      <nav className="hidden md:block">
        <ul className="flex gap-10 font-bold">
          {navigation.map((page, index) => (
            <li key={index}>
              <NavLink to={page.path}>
                {page.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex justify-end gap-4">
        <MenuDropdown />
      </div>
    </header>
  );
}

export default Header;
