import propTypes from 'prop-types';
import { useState } from 'react';
import AppContext from './AppContext';

export default function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isFavoriteVisible, setIsFavoriteVisible] = useState(false);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
    favoriteItems,
    setFavoriteItems,
    isFavoriteVisible,
    setIsFavoriteVisible,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
