import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { getMealId } from "../api";
import MealsList from "./MealsList";

function Recipe(props) {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const { goBack } = useHistory();

  useEffect(() => {
    getMealId(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);
  return (
    <div className="recipe-container">
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

      <div className="recipe-main container">
        <button className="back-button" onClick={goBack}>
          <i className="fa fa-chevron-left"></i> Back
        </button>
        <h1 className="title">
          {recipe.strCategory} Recipe
        </h1>
        <div className="recipe-item">
          <main>
            <section className="section1">
              <h1>{recipe.strMeal}</h1>
              <div>
                <div>
                  <img
                    src="https://rvs-recipe-page.onrender.com/6dots.svg"
                    alt=""
                  />
                </div>
                <p>
                  Look no further for a creamy and ultra smooth classNameic
                  cheesecake recipe! Paired with a buttery graham cracker crust,
                  no one can deny its simple decadence. For the best results,
                  bake in a water bath.
                </p>
              </div>
            </section>
            <section className="section2">
              <div className="section-img">
                <img src={recipe.strMealThumb} alt="" />
              </div>
            </section>
            <section className="section3">
              <div className="recipe-content">
                <div className="recipe-ingredients">
                  <h2>Ingredients</h2>
                  <div className="ingredients-list">
                    <table>
                      
                      <thead>
                        <tr>
                          <th scope="col">Ingredient</th>
                          <th scope="col">Measuere</th>
                        </tr>
                      </thead>
                      <tbody>
                       {Object.keys(recipe).map(key => {
                        if (key.includes('Ingredient') && recipe[key]) {
                            return(
                              <tr>
                                <td>{recipe[key]}</td>
                                <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                              </tr>
                            )
                        }
                       })}

                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="recipe-instructions">
                  <h2>Instructions</h2>
                  <div className="instructions-list">
                    <div className="list-group">
                      <div className="list-count"></div>
                      <div className="list-content">
                        <p>{recipe.strInstructions}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="recipe-link">
                  <a href={recipe.strYoutube} target='a_blank'>
                    <span>
                      Source:
                     {recipe.strYoutube}
                    </span>
                  </a>
                </div>
              </div>
              <div className="recipe-details">
                <div className="recipe-details-inner">
                  <div className="recipe-details-inner-group">
                    <div className="group-image">
                      <span
                        className="fa fa-thumbs-o-up"
                        style={{ color: " #F2994A" }}
                      ></span>
                    </div>
                    <div className="group-details">
                      <h6>yields</h6>
                      <p style={{ color: " #F2994A" }}>12 servings</p>
                    </div>
                  </div>
                  <div className="recipe-details-inner-group">
                    <div className="group-image">
                      <span className="fa fa-clock-o"></span>
                    </div>
                    <div className="group-details">
                      <h6>prep time</h6>
                      <p>45 minutes</p>
                    </div>
                  </div>
                  <div className="recipe-details-inner-group">
                    <div className="group-image">
                      <span className="fa fa-clock-o"></span>
                    </div>
                    <div className="group-details">
                      <h6>cook time</h6>
                      <p>1 hour</p>
                    </div>
                  </div>
                  <div className="recipe-details-inner-group">
                    <div className="group-image">
                      <span className="fa fa-clock-o"></span>
                    </div>
                    <div className="group-details">
                      <h6>total time</h6>
                      <p>7,75 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Recipe;

// 16:49
