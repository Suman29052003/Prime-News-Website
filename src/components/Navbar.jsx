import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../slice/newSlice';
import primeNewsLogo from '/fotor-ai-20240619223645-removebg-preview.png';

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="navbar w-full h-[100px] flex items-center justify-center bg-black">
      <div className="nav-main-content w-[90%] h-full flex items-center justify-between">
        <figure className="logo w-[25%] h-full p-[8px] sm:w-[30%]">
          <img
            src={primeNewsLogo}
            alt=""
            className="object-contain h-full w-full rounded-lg scale-150"
          />
        </figure>

        <div className="nav-links md:block hidden">
          <ul className="text-white flex gap-4 font-semibold">
            {['POST', 'POLITICS', 'BUSINESS', 'SPORTS', 'FASHION'].map(
              (link) => (
                <li
                  key={link}
                  className="cursor-pointer hover:text-red-600"
                  onClick={() => handleCategoryChange(link.toLowerCase())}
                >
                  {link}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="search-bar flex items-center justify-center text-white md:w-[20%] w-[60%] border-b-2 text-xl">
          <input
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full h-full p-2 bg-transparent border-0 outline-0"
          />
          <span className="material-symbols-outlined cursor-pointer hover:text-red-600">
            search
          </span>
        </div>

        <div className="menu flex items-center justify-center p-2 block md:hidden">
          <span className="material-symbols-outlined text-white hover:text-red-600">menu</span>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
