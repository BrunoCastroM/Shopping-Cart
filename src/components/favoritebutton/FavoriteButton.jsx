import { useContext } from 'react';
import { BsHeart } from 'react-icons/bs';
import AppContext from '../../context/AppContext';
import './FavoriteButton.css';

export default function CartButton() {
  const { favoriteItems, isFavoriteVisible, setIsFavoriteVisible } =
    useContext(AppContext);

  return (
    <button
      type="button"
      className="favorite_button"
      onClick={() => setIsFavoriteVisible(!isFavoriteVisible)}
    >
      <BsHeart />
      {favoriteItems.length > 0 && (
        <span className="favorite_status">{favoriteItems.length}</span>
      )}
    </button>
  );
}
