import { useContext } from 'react';
import CartItem from '../cartitem/CartItem';
import './Cart.css';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

export default function Cart() {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className={`cart ${isCartVisible ? 'cart_active' : ''}`}>
      <div className="cart_items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>
      <div className="cart_resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}
