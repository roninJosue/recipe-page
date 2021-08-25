import React from "react";
import { fillingIngredients, doughIngredients, mainIngredients } from "../data/data-recipe";
import Ingredient from "./Ingredient";

const IngredientsList = () => {
  return (
    <>
      <h2 className='ingredients-heading'>Ingredientes</h2>
      <h3 className='text-left ingredients-title'>Para el relleno</h3>
      <ul className='ingredients-list'>
        {fillingIngredients.map((ingredient) => {
          return <Ingredient key={ingredient.id} ingredient={ingredient} />
        })}
      </ul>
      <h3 className='text-left ingredients-title'>Para la masa</h3>
      <ul className='ingredients-list'>
        {doughIngredients.map((ingredient) => {
          return <Ingredient key={ingredient.id} ingredient={ingredient} />
        })}
      </ul>
      <h3 className='text-left ingredients-title'>Ingredientes principales</h3>
      <ul className='ingredients-list'>
        {mainIngredients.map((ingredient) => {
          return <Ingredient key={ingredient.id} ingredient={ingredient} />
        })}
      </ul>
    </>
  )
}

export default IngredientsList