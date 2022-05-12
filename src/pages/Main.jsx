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

const sortNames = [
  { name: 'умолчанию', type: 'popular', order: 'desc'},
  { name: 'цене', type: 'price', order: 'desc'},
  { name: 'алфавиту', type: 'name', order: 'asc'},
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
    dispatch(fetchBooks())
    BooksService.getCategories()
    .then((data) => {
      setCategoriesObj(data);
    })
    }, [])


    useEffect(() => {
      if(debouncedSearchTerm){
        dispatch(fetchBooks(category,debouncedSearchTerm))
      }else{
        dispatch(fetchBooks(category,''))
      }
    },[debouncedSearchTerm])


  const onSelectCategory = useCallback((id) => {
    console.log(debouncedSearchTerm)
    dispatch(setCategory(id));
    dispatch(fetchBooks(id === null ? null : id, debouncedSearchTerm))
  }, [debouncedSearchTerm]);

  const onSelectSortType = useCallback((name) => {
    dispatch(setSortBy(name));
  }, []);

  const onClickAddBook = (obj) => {
    dispatch(addBookToBasket(obj));
  };

  const handleSearch = (evt) => {
    setSearch(evt.target.value)
  }

  return (
    <div className="container">
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
