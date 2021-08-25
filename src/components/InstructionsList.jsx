import React from "react";
import { instructions } from "../data/data-recipe";
import Instruction from "./Instruction";

const InstructionsList = () => {
  return (
    <div className='instruction-block'>
      {instructions.map((instruction) => {
        return <Instruction instruction={instruction} />
      })}
      <a className='source' rel='noreferrer' target='_blank' href="https://www.quericavida.com/recetas/nacatamal/f02a0ae8-e434-4108-80b6-cb3ac66b9703">
        Source
      </a>
    </div>
  );
}

export default InstructionsList