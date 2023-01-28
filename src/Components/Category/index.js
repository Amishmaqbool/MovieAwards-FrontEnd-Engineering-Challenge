import React from 'react';
import './index.css'
const Category = ({ title }) => {
  return (
    <div className="category-title-parent">
      <span>
        <h4 className="category-title">{title}</h4>
      </span>
    </div>
  );
};

export default Category;
