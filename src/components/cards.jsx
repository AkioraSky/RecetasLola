import React from "react";
import CardConte from "./card";
import { Container, Row } from "react-bootstrap";

const Cards = ({ datosRe, setDatosRe }) => {
  return (
    <>
      <Container className=" justify-content-center h-100">
        <Row className="rowCard">
          <CardConte datosRe={datosRe} setDatosRe={setDatosRe} />
        </Row>
      </Container>
    </>
  );
};

export default Cards;
