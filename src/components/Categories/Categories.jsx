import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({ activeCategory, items, onClickCategory }) => {

  const categoriesItems = items && items.map((item, index) => (
    <li
      className={activeCategory === index ? 'active' : ''}
      key={`${item}_${index}`}
      onClick={() => onClickCategory(index)}>
      {item}
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

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
}

Categories.defaultProps = {
  activeCategory: null,
  items: [],
}

export default Categories;
