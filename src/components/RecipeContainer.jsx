import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import IngredientsList from "./IngredientsList";
import InstructionsList from "./InstructionsList";

const RecipeContainer = () =>{
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <IngredientsList />
          <InstructionsList />
        </Col>
        <Col lg={6}>
          Hola 2
        </Col>
      </Row>
    </Container>
  )
}

export default RecipeContainer;