import propTypes from 'prop-types';
import { BsFillCartCheckFill } from 'react-icons/bs';
import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';

export default function ProductCard({ data }) {
  const { title, thumbnail, price } = data;

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

      <button type="button" className="button_add_cart">
        <BsFillCartCheckFill />
      </button>
    </section>
  );
}

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
