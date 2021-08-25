import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUtensils, faClock} from "@fortawesome/free-solid-svg-icons";

const RecipeDetails = () => {
  return (<div className='recipe-details d-flex flex-lg-column'>
    <div className='recipe-details-item '>
      <span className='recipe-details-icon'>
        <FontAwesomeIcon icon={faUtensils} />
      </span>
      <div className='recipe-details-desc'>
        <span className='text-left recipe-details-1'>Rinde</span>
        <span className='recipe-details-2'>12 porciones</span>
      </div>
    </div>
    <div className='recipe-details-item'>
      <span className='recipe-details-icon'>
        <FontAwesomeIcon icon={faClock} />
      </span>
      <div className='recipe-details-desc'>
        <span className='text-left recipe-details-1'>Preparación</span>
        <span className='recipe-details-2'>45 minutos</span>
      </div>
    </div>
    <div className='recipe-details-item'>
      <span className='recipe-details-icon'>
        <FontAwesomeIcon icon={faClock} />
      </span>
      <div className='recipe-details-desc'>
        <span className='text-left recipe-details-1'>Cocina</span>
        <span className='recipe-details-2'>45 minutos</span>
      </div>
    </div>
    <div className='recipe-details-item'>
      <span className='recipe-details-icon'>
        <FontAwesomeIcon icon={faClock} />
      </span>
      <div className='recipe-details-desc'>
        <span className='text-left recipe-details-1'>Total</span>
        <span className='recipe-details-2'>3 horas</span>
      </div>
    </div>
  </div>)
}

export default RecipeDetails