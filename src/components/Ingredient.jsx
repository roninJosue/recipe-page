import React from "react";

const Ingredient = (props) => {
  return (
    <li className='ingredients-item'>
      <label htmlFor={props.ingredient.id}>
        <input id={props.ingredient.id} type="checkbox"/>
        <strong>{props.ingredient.quantity}</strong> &nbsp;
        {props.ingredient.unit ? (`${props.ingredient.unit} de `) : ' '}
        <strong>{props.ingredient.ingredient}</strong>
      </label>
    </li>
  )
}

export default Ingredient