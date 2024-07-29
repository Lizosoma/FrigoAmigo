import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './recipes-container.module.css';
import RecipesCards from './recipes-cards/recipes-cards';

const RecipesContainer = React.forwardRef((props, ref) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const recepieUrl = 'https://dummyjson.com/recipes';
    axios.get(recepieUrl).then((response) => {
      setRecipes(response.data.recipes);
    });
  }, [setRecipes]);

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.heading}>Рецепты</div>
      <RecipesCards recipes={recipes} />
      <button className={styles.button}>
        <p className={styles.buttonText}>Смотреть больше рецептов</p>
      </button>
    </div>
  );
});

export default RecipesContainer;
