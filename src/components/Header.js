import { Link, NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';
// import './Header.css';

const Header = (prop) => {
  const pages = [
    { name: "Boards List", path: "/boards" },
    { name: "Meet Our Team", path: "/team" },
  ];

  const containerClasses = "flex justify-between py-2 px-4 items-center"
  const colorClasses = "bg-black bg-opacity-30 backdrop-blur"
  const positionClasses = "top-0 left-0 fixed w-screen"


  return (
    <header 
      className={`${containerClasses} ${colorClasses} ${positionClasses}`}
    >
      <Link to="/" className="flex gap-2 w-52">        
        <Icon icon="fluent:board-heart-20-filled" className="text-xl"/>
        <span className="text-base font-bold">Inspiration Board</span>
      </Link>
      <nav className="hidden lg:block">
        <ul className="flex gap-10 justify-center font-bold">
          {pages.map((page, index) => (
            <li key={index}>
              <NavLink to={page.path}>
                {page.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex w-52 justify-end gap-4">
        <Icon icon="mdi:user-circle" className="text-xl"/>
        <Icon icon="mdi:menu" className="text-xl lg:hidden"/>
      </div>
    </header>
  );
}

export default Header;
