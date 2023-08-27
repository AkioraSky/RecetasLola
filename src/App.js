import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// import Banner from "./components/banner";
import NavbarLink from "./components/navbar";
import Cards from "./components/cards";
import { Col, Container, Row } from "react-bootstrap";
import FooterReceta from "./components/footer";

function App() {
  const [datosRe, setDatosRe] = useState([]);
  return (
    <>
      <body>
        <header className="header">
          {/* <Banner /> */}
          <NavbarLink datosRe={datosRe} setDatosRe={setDatosRe} />
        </header>
        <Container fluid>
          <Row>
            <Col className="mb-3">
              <main>
                <div className="layout">
                  <section className="content">
                    <Cards datosRe={datosRe} setDatosRe={setDatosRe} />
                  </section>
                </div>
              </main>
            </Col>
            <hr />
            <Col>
              <footer className="footer">
                <FooterReceta />
              </footer>
            </Col>
          </Row>
        </Container>
      </body>
    </>
  );
}

export default App;
