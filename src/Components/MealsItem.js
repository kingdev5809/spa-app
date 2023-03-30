import React from "react";
import { Link } from "react-router-dom";

function MealsItem(props) {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <div className="card">
      <img src={strMealThumb} alt={strMeal} />
      <div className="content">
        <h2>{strMeal}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          labore laborum necessitatibus quis, earum, repellat facilis adipisci,
          dolores corporis ipsam ratione eaque vitae quia sunt nemo et
          repudiandae porro incidunt.
        </p>
          <Link to={`/meal/${idMeal}`}>
          <button id="accept-button" class="popup-button" type="button">Whatch Recipe</button>
          </Link>
      </div>
      
    </div>

    
  );
}

export default MealsItem;
