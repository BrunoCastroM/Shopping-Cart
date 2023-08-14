import { useContext } from 'react';
import propTypes from 'prop-types';
import { BsFillTrashFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';
import './CartItem.css';

export default function CartItem({ data }) {
  const { cartItems, setCartItems } = useContext(AppContext);

  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <section className="cart_item">
      <img src={thumbnail} alt="product" className="cart_item_image" />

      <div className="cart_item_content">
        <h3 className="cart_item_title">{title}</h3>
        <h3 className="cart_item_price">{formatCurrency(price, 'BRL')}</h3>

        <button
          className="button_remove_item"
          type="button"
          onClick={handleRemoveItem}
        >
          <BsFillTrashFill />
        </button>
      </div>
    </section>
  );
}

CartItem.propTypes = {
  data: propTypes.object,
}.isRequired;
