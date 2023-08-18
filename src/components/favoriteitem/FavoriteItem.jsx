import { BsFillTrashFill } from 'react-icons/bs';
import propTypes from 'prop-types';
import './FavoriteItem.css';
import { useContext } from 'react';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

export default function FavoriteItem({ data }) {
  const { favoriteItems, setFavoriteItems } = useContext(AppContext);

  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = favoriteItems.filter((item) => item.id !== id);
    setFavoriteItems(updatedItems);
  };
  return (
    <section className="favorite_item">
      <img src={thumbnail} alt="product" className="favorite_item_image" />

      <div className="favorite_item_content">
        <h3 className="favorite_item_title">{title}</h3>
        <h3 className="favorite_item_price">{formatCurrency(price, 'BRL')}</h3>

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

FavoriteItem.propTypes = {
  data: propTypes.object,
}.isRequired;
