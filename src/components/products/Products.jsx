import { useState, useEffect } from 'react';
import fetchProducts from '../../api/fetchProducts';
import './Products.css';
import ProductCard from '../productcard/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <section className="products container">
      <ProductCard />
    </section>
  );
}
