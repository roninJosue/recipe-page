import React from "react";

const Ingredient = (props) => {
  return (
    <li className='ingredients-item'>
      <input type="checkbox"/>
      <strong>{props.ingredient.quantity}</strong> &nbsp;
      {props.ingredient.unit ? (`${props.ingredient.unit} de `) : ' '}
      <strong>{props.ingredient.ingredient}</strong>
    </li>
  )
}

export default Ingredient