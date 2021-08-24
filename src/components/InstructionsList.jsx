import React from "react";
import { instructions } from "../data/data-recipe";
import Instruction from "./Instruction";

const InstructionsList = () => {
  return (
    <div className='instruction-block'>
      {instructions.map((instruction) => {
        return <Instruction instruction={instruction} />
      })}
    </div>
  );
}

export default InstructionsList