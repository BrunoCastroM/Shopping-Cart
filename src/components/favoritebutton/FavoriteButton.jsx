import { useContext } from 'react';
import { BsHeart } from 'react-icons/bs';
import AppContext from '../../context/AppContext';
import './FavoriteButton.css';

export default function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button
      type="button"
      className="favorite_button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <BsHeart />
      {cartItems.length > 0 && (
        <span className="favorite_status">{cartItems.length}</span>
      )}
    </button>
  );
}
