import { BsCart2 } from 'react-icons/bs';
import './CartButton.css';

export default function CartButton() {
  return (
    <button type="button" className="cart_button">
      <BsCart2 />
      <span className="cart_status">1</span>
    </button>
  );
}
