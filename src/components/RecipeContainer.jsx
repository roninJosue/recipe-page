import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import IngredientsList from "./IngredientsList";
import InstructionsList from "./InstructionsList";
import RecipeDetails from "./RecipeDetails";

const RecipeContainer = () =>{
  return (
    <section id="recipe-ingredients">
      <Container>
        <Row className='flex-lg-row flex-column-reverse'>
          <Col lg={7}>
            <IngredientsList />
            <InstructionsList />
          </Col>
          <Col lg={5} className='flex-sm-row justify-content-lg-end align-items-start d-flex' >
            <RecipeDetails />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default RecipeContainer;