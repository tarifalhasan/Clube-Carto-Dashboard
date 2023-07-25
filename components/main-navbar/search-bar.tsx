import { SearchIcon } from '@/assets/svg/icons';
import React from 'react';

const SearchBar = () => {
  return (
    <div className=" hidden lg:flex search-bar">
      <SearchIcon />
      <input
        className="  w-full focus:outline-none outline-none text-sm placeholder:text-muted outline border-none"
        type="text"
        placeholder="Pesquisar..."
      />
    </div>
  );
};

export default SearchBar;
