import React, { useState } from "react";
import primeNewsLogo from "/fotor-ai-20240619223645-removebg-preview.png";

const Navbar = ({ setSearchInput }) => {
  const [activeLink, setActiveLink] = useState("HOME");

  return (
    <section className="navbar w-full h-[100px] flex items-center justify-center bg-black">
      <div className="nav-main-content w-[90%] h-full flex items-center justify-between">
        <figure className="logo w-[25%] h-full p-[8px] sm:w-[30%]">
          <img
            src={primeNewsLogo}
            alt="Prime News Logo"
            className="object-contain h-full w-full rounded-lg scale-150"
          />
        </figure>

        <div className="nav-links md:block hidden">
          <ul className="text-white flex gap-4 font-semibold">
            {["HOME", "POST", "PAGES", "POLITICS", "BUSINESS", "SPORTS", "FASHION"].map((link) => (
              <li
                key={link}
                className={`cursor-pointer ${activeLink === link ? "text-red-600" : "hover:text-red-600"}`}
                onClick={() => setActiveLink(link)}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="search-bar flex items-center justify-center text-white md:w-[20%] w-[60%] border-b-2 text-xl">
          <input
            type="search"
            placeholder="Search..."
            className="w-full h-full p-2 bg-transparent border-0 outline-0"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <span className="material-symbols-outlined cursor-pointer hover:text-red-600">search</span>
        </div>

        <div className="menu flex items-center justify-center p-2 block md:hidden">
          <span className="material-symbols-outlined text-white hover:text-red-600">menu</span>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
