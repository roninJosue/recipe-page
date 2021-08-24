import React from "react";
import { fillingIngredients, doughIngredients, mainIngredients } from "../data/data-recipe";
import Ingredient from "./Ingredient";

const IngredientsList = () => {
  return (
    <>
      <h2>Ingredients</h2>
      <h4>Para el relleno</h4>
      <ul>
        {fillingIngredients.map((ingredient) => {
          return <Ingredient key={ingredient.id} ingredient={ingredient} />
        })}
      </ul>
      <h4>Para la masa</h4>
      <ul>
        {doughIngredients.map((ingredient) => {
          return <Ingredient key={ingredient.id} ingredient={ingredient} />
        })}
      </ul>
      <h4>Ingredientes principales</h4>
      <ul>
        {mainIngredients.map((ingredient) => {
          return <Ingredient key={ingredient.id} ingredient={ingredient} />
        })}
      </ul>
    </>
  )
}

export default IngredientsList