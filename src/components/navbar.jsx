import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";

import ModalAgregar from "./modal";

import Buscar from "./buscar";
import { Row } from "react-bootstrap";

const NavbarLink = ({ datosRe, setDatosRe }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="nbar mb-3 bg-black text-white"
        >
          <Container fluid>
            <Row className=" flex-grow-1">
              <Col xs={1}>
                <Navbar.Brand href="#">
                  <img
                    src="./images/recetasLogo.png"
                    alt="Bootstrap"
                    width="85"
                    height="50"
                    className="justify-content-center"
                  />
                </Navbar.Brand>
              </Col>

              <Col xs={11}>
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                  className="bg-dark text-white"
                >
                  <Offcanvas.Header closeButton className="text-white">
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      <img
                        src="./images/recetasLogo.png"
                        alt="Bootstrap"
                        width="85"
                        height="50"
                        className="justify-content-center"
                      />
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className="text-white ">
                    <Container fluid>
                      <Row className="flex-grow-1 ">
                        <Col sm={5}>
                          <Nav className="justify-content-center flex-grow-1 pe-5 mt-2">
                            <ul class="navbar-nav me-auto mt-2 mb-lg-0">
                              <li class="nav-item">
                                <a href="#!" className="n">
                                  Inicio
                                </a>
                              </li>
                              <li class="nav-item">
                                <a href="#!" className="n">
                                  Recetas
                                </a>
                              </li>
                              <li class="nav-item">
                                <a href="#!" className="n">
                                  Contacto
                                </a>
                              </li>
                              <li class="nav-item">
                                <a href="#!" className="n" onClick={handleShow}>
                                  Agregar Receta
                                </a>
                              </li>
                            </ul>
                            {/* <Nav.Link href="#!" className="n nav-link  ">
                              Inicio
                            </Nav.Link>
                            <Nav.Link href="#!" className="n nav-link  ">
                              Recetas
                            </Nav.Link>
                            <Nav.Link href="#!" className="n nav-link  ">
                              Contacto
                            </Nav.Link>
                            <Nav.Link
                              href="#!"
                              className="n nav-link   "
                              onClick={handleShow}
                            >
                              btn agregar
                            </Nav.Link> */}
                          </Nav>
                        </Col>

                        <br />

                        <Col sm={7} className="mt-2">
                          <Buscar datosRe={datosRe} setDatosRe={setDatosRe} />
                        </Col>

                        <ModalAgregar
                          show={show}
                          handleClose={handleClose}
                          datosRe={datosRe}
                          setDatosRe={setDatosRe}
                        />
                      </Row>
                    </Container>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Col>
            </Row>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          </Container>
        </Navbar>
      ))}

      {/* <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid">
          <div className="row collapse navbar-collapse">
            <div className="col-3">
              <a className="n navbar-brand bg-white" href="#">
                Brand
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div className="col-9">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="row collapse navbar-collapse">
                  <div className="col-5 d-inline justify-content-center;">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center;">
                      <li className="nav-item">
                        <a className="n nav-link" aria-current="page" href="#">
                          Inicio
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="n nav-link" aria-current="page" href="#">
                          Recetas
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="n nav-link" aria-current="page" href="#">
                          Contacto
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="n nav-link" aria-current="page" href="#">
                          Agregar
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-7">
                    <Buscar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default NavbarLink;
