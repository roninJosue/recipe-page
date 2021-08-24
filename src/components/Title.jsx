import React from "react";
import {Col, Container, Row} from "react-bootstrap";

const Title = () => {
  return (
    <header className='recipe-title'>
      <Row>
        <Col>
          <h1 className='recipe-title-heading'>Nacatamal</h1>
          <p className='recipe-title-description'>
            Este es el tamal tradicional nicaragüense, el desayuno dominguero por excelencia,
            que sorprende a propios y a extraños con su tamaño descomunal (cerca de 10 onzas de delicioso tamal).
            Un nacatamal como Dios manda es grande, envuelto siempre en hojas de plátano.
          </p>
        </Col>
      </Row>
    </header>
  )
}

export default Title;
