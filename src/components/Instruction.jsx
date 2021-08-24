import React from "react";

const Instruction = (props) => {
  return (
    <div className='instruction'>
      <span className='instruction-number'>{props.instruction.number}</span>
      <p className='instruction-description'>{props.instruction.instruction}</p>
    </div>
  )
}

export default Instruction