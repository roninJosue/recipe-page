import React from "react";
import image from './../image/nacatamal.jpg';
import {Image} from "react-bootstrap";

const ImageRecipe = () => {
  return (
    <section id="recipe-image">
      <Image src={image} width='100%' height='100%' fluid rounded alt='Nacatamal'/>
    </section>
  );
}

export default ImageRecipe;