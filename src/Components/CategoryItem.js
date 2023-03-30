import React from "react";
import { Link } from "react-router-dom";

function CategoryItem(props) {
  const { idCategory, strCategory, strCategoryThumb } = props;
  return (
    <div className="food-type fruite">
      <div className="img-container">
        <img src={strCategoryThumb} alt="strCategory" />
        <div className="img-content">
          <h3>{strCategory}</h3>
          {idCategory}
          <Link to={`/category/${strCategory}`} className="btn btn-danger">
            More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
// 8:53
