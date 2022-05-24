import React from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export function Header({ navItems }) {
  const [open, setOpen] = React.useState(false);
  const openMenu = () => {
    console.log("toggle menu");
    setOpen(() => true);
  };
  const closeMenu = () => {
    setOpen(() => false);
  };
  const getCls = ({ isActive }) => {
    console.log('getCls', isActive);
    return ("w-56 h-12 my-1 flex justify-center items-center text-center text-gray-900 no-underline " + (isActive ? 'bg-slate-200' : ''))
  }
  return (
    <header className="px-6 h-20 flex justify-between align-center bg-slate-200">
      <span className="text-2xl font-medium flex items-center">
        Laptop Search
      </span>
      <div
        className={
          open
            ? " flex justify-center items-center absolute inset-0 bg-slate-100"
            : " hidden"
        }
      >
        <ul className={"md:hidden flex flex-col justify-center items-center p-0"}>
          {navItems.map((item, index) => (
            <li
              key={index}
              className="px-4 flex justify-center items-center"
            >
              <NavLink to={item.href} className={getCls}>{item.text}</NavLink>
              {/* <a className="text-gray-900 no-underline" href={item.href}>{item.text}</a> */}
            </li>
          ))}
        </ul>
        <HiOutlineX
          size={24}
          style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}
          onClick={closeMenu}
        />
      </div>
      {/* Desktop Nav */}
      <ul className={"hidden md:flex items-stretch h-full"}>
        {navItems.map((item, index) => (
          <li
            key={index}
            className="px-4 hover:bg-slate-300 flex justify-center items-center"
          >
            <NavLink to={item.href} className={(isActive) => (isActive ? "text-gray-700" : "text-gray-900 " + "no-underline")} >{item.text}</NavLink>
            {/* <a className="text-gray-900 no-underline" href={item.href}>
              {item.text}
            </a> */}
          </li>
        ))}
      </ul>
      <div
        className="md:hidden flex-none flex justify-center items-center"
        onClick={openMenu}
      >
        <HiMenu size={24} />
      </div>
    </header>
  );
}
