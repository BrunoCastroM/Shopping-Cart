import Header from './components/header/Header';
import './App.css';
import Products from './components/products/Products';
import Provider from './context/Provider';
import Cart from './components/cart/Cart';

function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>
  );
}

export default App;
