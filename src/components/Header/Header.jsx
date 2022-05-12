import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.svg';
import Button from './Button/Button';


const Header = () => {
  const {totalPrice, totalCount} = useSelector(({basket}) => basket);
  const balance = useSelector((state) => state.balance.balance)
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="50" src={logo} alt="logo" />
            <div>
              <h1>Магазин книг</h1>
              <p>найдешь то что ищещь</p>
            </div>
          </div>
        </Link>
        <div className="block__cart" style={{display:"flex", alignItems:"center"}}>
          <div style={{display:"flex",fontSize:"20px"}}>
              <strong> Баланс: </strong>⁣ ⁣{balance} руб.⁣⁣⁣ ⁣
          </div>
          <div className="header__cart">
            <Button totalCount={totalCount}>{totalPrice}</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
