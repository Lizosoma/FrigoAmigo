import React from 'react';
import styles from './recipes-cards.module.css';
import arrows from '../../../assets/pictures/recipes-arrows.svg';

const RecipesCards = ({ recipes }) => {
  if (!recipes || recipes.length === 0) return <p>No recipes found</p>;

  return (
    <ul className={styles.recipesList}>
      {recipes.slice(0, 2).map((recipe) => {
        return (
          <li key={recipe.id} className={styles.card}>
            <img className={styles.image} src={recipe.image} alt="recipeImage"></img>
            <button>
              <img className={styles.arrow} src={arrows} alt="arrows"></img>
            </button>
            <div className={styles.texts}>
              <p className={styles.name}>{recipe.name}</p>
              <p className={styles.ingredients}>Ингредиенты:</p>
              <ul className={styles.ingredientsList}>
                {recipe.ingredients.map((ingredient) => {
                  return (
                    <li key={ingredient} className={styles.ingredient}>
                      {ingredient}
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default RecipesCards;
