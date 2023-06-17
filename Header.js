import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { CartContext } from './CartContext';

const Header = () => {
  const { cart, getCartCount } = useContext(CartContext);

  return (
    <header className="header">
      <div className="header__links">
        <a className="header__link" href="/">Home</a>
        <a className="header__link" href="/store">Store</a>
        <a className="header__link" href="/about">About</a>
      </div>
      <button className="header__cart-button">
        <Link to="/cart" className="cart-button">
          Cart <span className="cart-count">{getCartCount()}</span>
        </Link>
      </button>
    </header>
  );
};

export default Header;
