import {React, useState} from 'react'

import { Link } from 'react-router-dom';
import { SearchIcon } from '../assets/icons/icons';

const Header = () => {

  const [search, setSearch] = useState(null || '')

    return ( 
        <header className="h-[50px] w-screen bg-yellow-400 flex justify-center items-center">
        <input
          placeholder="Nunca dejes de buscar"
          className="pl-2 w-6/12 outline-none h-[25px]"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link className="flex bg-slate-300 items-center h-[25px] px-2" to={`/items?search=${search}`}>
          <SearchIcon />
        </Link>
      </header>
     );
}
 
export default Header;