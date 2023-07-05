import { Menu, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react'
import { Icon } from "@iconify/react";
import navigation from "../data/navigation";

export default function MenuDropdown() {
  const navigate = useNavigate();
  const menuItem = (key, icon, text, onclick) => (
    <Menu.Item key={key}>
      {({ active }) => (
        <button
          
          onClick={onclick}
          className={`${
            active ? 'bg-violet-500 text-white font-bold' : 'text-gray-900'
          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
        >
          <Icon icon={icon} className="text-xl mr-2" />
          {text}
        </button>
      )}
    </Menu.Item>
  )

  return (
    <Menu as="div">
      <Menu.Button className="w-full">
        <Icon icon="mdi:user-circle" className="text-xl hidden md:block" />
        <Icon icon="mdi:menu" className="text-xl md:hidden"/>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items 
          className="absolute right-3 mt-2 w-56 origin-top-right divide-y 
            divide-gray-100 md:divide-y-0 rounded-md bg-white shadow-lg 
            ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
          <div className="px-1 py-1 md:hidden">
            {navigation.map((item) => (
              menuItem(item.key, item.icon, item.name, () => navigate(item.path))
            ))}
          </div>
          <div className="px-1 py-1">
            {menuItem("account", "mdi:account", "My Account", () => navigate('/account'))}
            {menuItem("logout", "mdi:logout", "Log Out", () => navigate('/logout'))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}