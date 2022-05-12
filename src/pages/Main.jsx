import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../components/Categories/Categories';
import BookBlock from '../components/BookBlock/BookBlock'
import SortPopup from '../components/SortPopup/SortPopup';
import PreLoader from '../components/BookBlock/PreLoader';
import { setCategory, setSortBy } from '../redux/actions/filtersAC';
import { fetchBooks } from '../redux/actions/booksAC';
import { addBookToBasket } from '../redux/actions/basketAC';

const categoryNames = ['Дизайн', 'Управление проектами', 'Разработка', 'Тестирование'];
const sortNames = [
  { name: 'умолчанию', type: 'popular', order: 'desc'},
  { name: 'цене', type: 'price', order: 'desc'},
  { name: 'алфавиту', type: 'name', order: 'asc'},
];

const Main = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ books }) => books.items);
  const basketItems = useSelector(({ basket }) => basket.items);
  const isLoading = useSelector(({ books }) => books.isLoading);
  const {category, sortBy} = useSelector(({ filters }) => filters);
  
  useEffect(() => dispatch(fetchBooks(category, sortBy)), [category, sortBy])
  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((name) => {
    dispatch(setSortBy(name));
  }, []);

  const onClickAddBook = (obj) => {
    dispatch(addBookToBasket(obj));
  };

  return (
    <div className="container">
      <div style={{fontSize:"25px"}}>
        🔍
          <input
            className="input"
            placeholder="Введите название книги..." 
            // value={this.state.input} 
            // onChange={this.handleChange}
          />
        </div>
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames} />
        <SortPopup
          onClickSortType={onSelectSortType}
          activeSortType={sortBy.type}
          items={sortNames} />
      </div>
      <h2 className="content__title">Все книги</h2>
      <div className="content__items">
        {isLoading ? items.map(obj => <BookBlock onClickAddBook={onClickAddBook}
        addedBookCount={basketItems[obj.name] && basketItems[obj.name].items.length}
        key={ obj.name } {...obj} />)
        : Array(12).fill(0).map((_, index) => <PreLoader key={index} />)}
      </div>
    </div>
  )
}

export default Main;
