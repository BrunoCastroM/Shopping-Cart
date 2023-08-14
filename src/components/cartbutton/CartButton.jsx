import { useContext } from 'react';
import { BsCart2 } from 'react-icons/bs';
import AppContext from '../../context/AppContext';
import './CartButton.css';

export default function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button
      type="button"
      className="cart_button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <BsCart2 />
      {cartItems.length > 0 && (
        <span className="cart_status">{cartItems.length}</span>
      )}
    </button>
  );
}
