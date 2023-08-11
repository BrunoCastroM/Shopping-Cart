import CartButton from '../cartbutton/CartButton';
import SearchBar from '../searchbar/SearchBar';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Logo</h1>
        <SearchBar />
        <CartButton />
      </div>
    </header>
  );
}
