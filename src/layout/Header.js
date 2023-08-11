import { React, useState } from "react";

import { Link } from "react-router-dom";
import { SearchIcon } from "../assets/icons/icons";
import melilogo from '../assets/images/meli-logo.png'

const Header = () => {
  const [search, setSearch] = useState(null || "");

  return (
    <header className="h-[50px] bg-yellow-400 flex justify-center items-center">
      <div className="flex w-7/12 items-center">
        <a href={'/'}>
        <img src={melilogo} alt='meli-logo' className="w-[50px] h-[40px] mr-4" />
        </a>
        <input
          placeholder="Nunca dejes de buscar"
          className="pl-2 w-full outline-none h-[25px]"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link
          className="flex bg-slate-300 items-center h-[25px] px-2"
          to={`/items?search=${search}`}
        >
          <SearchIcon />
        </Link>
      </div>
    </header>
  );
};

export default Header;
