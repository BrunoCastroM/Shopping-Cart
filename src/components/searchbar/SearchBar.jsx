import { useState } from 'react';
import './SearchBar.css';
import { BsSearch } from 'react-icons/bs';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <form className="search_bar">
      <input
        className="search_input"
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        onChange={(e) => setSearchValue(e.target.value)}
        required
      />
      <button className="search_button">
        <BsSearch />
      </button>
    </form>
  );
}
