import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../components/Categories/Categories';
import BookBlock from '../components/BookBlock/BookBlock'
import SortPopup from '../components/SortPopup/SortPopup';
import PreLoader from '../components/BookBlock/PreLoader';
import { setCategory, setSortBy } from '../redux/actions/filtersAC';
import { fetchBooks } from '../redux/actions/booksAC';
import { addBookToBasket } from '../redux/actions/basketAC';
import BooksService from '../API/BooksService';
import useDebounce from '../utils/useDebounce';
import ScrollToTop from 'react-scroll-up';
import up from '../assets/img/up.png';

const sortNames = [
  { name: 'возрастанию', type: 'priceASC', order: 'ASC'},
  { name: 'убыванию', type: 'priceDESC', order: 'DESC'},
];

const Main = () => {
  
  const [categoriesObj, setCategoriesObj] = useState([])
  const dispatch = useDispatch();
  const items = useSelector(({ books }) => books.items);
  const basketItems = useSelector(({ basket }) => basket.items);

  const isLoading = useSelector(({ books }) => books.isLoading);
  const {category, sortBy} = useSelector(({ filters }) => filters);


  const [search, setSearch] = useState('')
  const debouncedSearchTerm = useDebounce(search,500)


  useEffect(() => {
    dispatch(fetchBooks(null, debouncedSearchTerm, sortBy.order))
    BooksService.getCategories()
    .then((data) => {
      setCategoriesObj(data);
    })
    }, [])


    useEffect(() => {
      if(debouncedSearchTerm){
        dispatch(fetchBooks(category,debouncedSearchTerm,sortBy.order))
      }else{
        dispatch(fetchBooks(category,'',sortBy.order))
      }
    },[debouncedSearchTerm])


  const onSelectCategory = useCallback((id) => {
    dispatch(setCategory(id));
    dispatch(fetchBooks(id === null ? null : id, debouncedSearchTerm, sortBy.order))
  }, [debouncedSearchTerm,sortBy,category]);

  const onSelectSortType = useCallback((obj) => {
    dispatch(setSortBy(obj));
    dispatch(fetchBooks(category, debouncedSearchTerm, obj.order))
  }, [debouncedSearchTerm,sortBy,category]);

  const onClickAddBook = (obj) => {
    dispatch(addBookToBasket(obj));
  };

  const handleSearch = (evt) => {
    setSearch(evt.target.value)
  }
  
  return (
    <div className="container">
      <ScrollToTop showUnder={160}>
        <img src={up} style={{width:"50px", height:"50px"}}/>
      </ScrollToTop>
      <div style={{fontSize:"25px"}}>
        🔍
          <input
            className="input"
            placeholder="Введите название книги..." 
            value={search} 
            onChange={handleSearch}
          />
        </div>
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoriesObj} />
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
        {
          items.length === 0 && <div style={{fontSize:"20px",textAlign:"center"}}>Нет книг &#128532;</div>
        }
    </div>
  )
}

export default Main;
