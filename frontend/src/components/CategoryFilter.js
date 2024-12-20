import React from 'react'
import { useDispatch } from 'react-redux'
import { listProduct } from '../actions/productActions'

const CategoryFilter = ({ categories }) => {
  const dispatch = useDispatch()

  const handleCategoryClick = (category) => {
    dispatch(listProduct(category))
  }

  return (
    <div className="category-filter my-4">
<h5 style={{ color: '#ff5733' }}>Filter by Category</h5>
      <ul className="list-group">
        {categories.map((category) => (
          <li
            key={category}
            className="list-group-item list-group-item-action"
            onClick={() => handleCategoryClick(category)}
            style={{ cursor: 'pointer' }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryFilter