import React from "react";
import { fillingIngredients, doughIngredients, mainIngredients } from "../data/data-recipe";
import Ingredient from "./Ingredient";

const IngredientsList = () => {
  return (
    <>
      <h2 className='ingredients-heading'>Ingredientes</h2>
      <h4 className='text-left ingredients-title'>Para el relleno</h4>
      <ul className='ingredients-list'>
        {fillingIngredients.map((ingredient) => {
          return <Ingredient key={ingredient.id} ingredient={ingredient} />
        })}
      </ul>
      <h4 className='text-left ingredients-title'>Para la masa</h4>
      <ul className='ingredients-list'>
        {doughIngredients.map((ingredient) => {
          return <Ingredient key={ingredient.id} ingredient={ingredient} />
        })}
      </ul>
      <h4 className='text-left ingredients-title'>Ingredientes principales</h4>
      <ul className='ingredients-list'>
        {mainIngredients.map((ingredient) => {
          return <Ingredient key={ingredient.id} ingredient={ingredient} />
        })}
      </ul>
    </>
  )
}

export default IngredientsList