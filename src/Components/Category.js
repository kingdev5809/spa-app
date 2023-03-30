import React, { useEffect, useState } from "react";
import { getAllCategories } from "../api";
import CategoryList from "./CategoryList";
import Loader from "./Loader";

function Category(props) {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);

  return (
    <div id="food">
      {!catalog.length ? <Loader /> : <CategoryList catalog={catalog} />}
    </div>
  );
}

export default Category;
