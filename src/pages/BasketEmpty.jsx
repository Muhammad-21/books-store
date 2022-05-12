import React from 'react';
import { Link } from 'react-router-dom';

import emptyBasket from '../assets/img/empty-cart.png';

const BasketEmpty = () => {
  return (
    <div className="cart cart--empty">
      <h2>Корзина пустая 😕</h2>
      <p>
        Вероятней всего, вы не заказывали ещё книг.<br />
        Для того, чтобы заказать книгу, перейди на главную страницу.
      </p>
      <img src={emptyBasket} alt="Empty basket" />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  )
}

export default BasketEmpty;
