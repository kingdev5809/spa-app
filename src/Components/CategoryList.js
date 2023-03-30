import React from "react";
import CategoryItem from "./CategoryItem";

function CategoryList({ catalog = [] }) {
  return (
    <div>
      <section id="food">
        <h2> Recipe Meals</h2>
        <div className="food-container container">
          {catalog.map((el) => (
            <CategoryItem key={el.idCategory} {...el} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default CategoryList;
