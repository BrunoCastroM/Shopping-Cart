import { useContext } from 'react';
import FavoriteItem from '../favoriteitem/FavoriteItem';
import './Favorite.css';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

export default function Favorite() {
  const { favoriteItems, isFavoriteVisible } = useContext(AppContext);

  const totalPrice = favoriteItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section
      className={`favorite ${isFavoriteVisible ? 'favorite_active' : ''} `}
    >
      <div className="favorite_items">
        {favoriteItems.map((favoriteItem) => (
          <FavoriteItem key={favoriteItem.id} data={favoriteItem} />
        ))}
      </div>

      <div className="favorite_resume">{formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}
