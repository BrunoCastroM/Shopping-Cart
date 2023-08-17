import propTypes from 'prop-types';
import { BsCart4, BsFillHeartFill } from 'react-icons/bs';
import './ProductCard.css';
import { useContext } from 'react';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

export default function ProductCard({ data }) {
  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => setCartItems([...cartItems, data]);

  return (
    <section className="product_card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'L.jpg')}
        alt="product"
        className="card_image"
      />

      <div className="card_infos">
        <h2 className="card_price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card_title">{title}</h2>
      </div>

      <button type="button" className="button_add_cart" onClick={handleAddCart}>
        <span className='cart_icon'><BsCart4 /> </span>Adicione ao carrinho
      </button>

      <button type="button" className="button_add_favorite">
        <BsFillHeartFill />
      </button>
    </section>
  );
}

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
