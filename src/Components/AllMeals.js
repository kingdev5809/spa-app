import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { getFilterCategory } from "../api";
import Loader from "./Loader";
import MealsList from "./MealsList";

function AllMeals(props) {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const { goBack } = useHistory;

  useEffect(() => {
    getFilterCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Menu</Link>
            </li>
            <li>
              <Link to="/">Category</Link>
            </li>
            <li>
              <Link to="/">Testimonial</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <h1 className="logo">RS</h1>
        </div>
      </nav> 
 
  

      <div id="foot" className="meal-container container">
        <Link to="/">
          <button className="back-button" onClick={goBack}>
            <i className="fa fa-chevron-left"></i> Back
          </button>
        </Link>
        <h1 className="title">Meals</h1>
        {!meals.length ? <Loader /> : <MealsList meals={meals} />}
      </div>
    </div>
  );
}

export default AllMeals;
