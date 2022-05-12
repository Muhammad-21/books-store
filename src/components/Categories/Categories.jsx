import React from 'react';

const Categories = React.memo(({ activeCategory, items, onClickCategory }) => {

  const categoriesItems = items && items.map((item) => (
    <li
      className={activeCategory === item.id ? 'active' : ''}
      key={`${item.id}`}
      onClick={() => onClickCategory(item.id)}>
      {item.name}
    </li>
  ));

  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {categoriesItems}
      </ul>
    </div>
  )
}
)

export default Categories;
