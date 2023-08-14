import { useState, useContext } from 'react';
import './SearchBar.css';
import { BsSearch } from 'react-icons/bs';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';

export default function SearchBar() {
  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValue);

    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <form className="search_bar" onSubmit={handleSearch}>
      <input
        className="search_input"
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        onChange={(e) => setSearchValue(e.target.value)}
        required
      />
      <button className="search_button" type="button">
        <BsSearch />
      </button>
    </form>
  );
}
