import React from "react";
import image from './../image/nacatamal.jpg';
import {Image} from "react-bootstrap";

const ImageRecipe = () => {
  return (
    <section id="recipe-image">
      <Image src={image} fluid rounded />
    </section>
  );
}

export default ImageRecipe;