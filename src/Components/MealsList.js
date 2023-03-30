import React from 'react';
import MealsItem from './MealsItem';

function MealsList({meals}) {
    return (
        <div className='meal-cards'>
           <div className="cards">
            
           {meals.map(meal => (
                <MealsItem key={meal.idMeal} {...meal}/>
            ))}
           </div>
            
            
        </div>

    );
}

export default MealsList;