import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className='flex items-center w-full md:w-1/2 mx-auto bg-cyan-400 rounded-md'>
      <input
        type='text'
        value={query}
        onChange={handleChange}
        placeholder='Search users...'
        className='w-full p-2 border rounded-l bg-white outline-none'
      />
      <button className=' p-2 rounded-r text-white hover:cursor-pointer active:scale-90'>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
