import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModelEditar from "./modelEditar";

const CardConte = ({ datosRe, setDatosRe }) => {
  const [editar, setEditar] = useState(0);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const leerLs = () => {
    let recetas = JSON.parse(localStorage.getItem("receta"));
    setDatosRe(recetas);
    return recetas;
  };

  const borrarReceta = (id) => {
    console.log(id);

    //leer la base de datos local actual y la transformamos en un array recorrible

    let datosLocal = leerLs();

    //Creamos un nuevo arreglo filtrando por el id
    let bdNueva = datosLocal.filter((recetas) => recetas.id !== parseInt(id));

    //Actualizamos el estado del componente principal
    setDatosRe(bdNueva);

    //Guardamos en la base de datos local
    localStorage.setItem("receta", JSON.stringify(bdNueva));
  };

  useEffect(() => {
    leerLs();
  }, []);

  return (
    <>
      {datosRe == null ? (
        <h1>No hay datos</h1>
      ) : (
        <>
          {datosRe.map((receta) => {
            return (
              <Card className="Cardp peli-item" key={receta.id}>
                <Card.Img
                  variant="top"
                  className="mt-3 imge"
                  src="./images/sopa.jpg"
                />
                <Card.Body>
                  <h1 className="text-center mb-3"> {receta.titulo} </h1>
                  <h5 className="text-start">° Ingredientes </h5>
                  <Card.Text>{receta.ingredientes}</Card.Text>
                  <Card.Title className="text-start">
                    || Preparación ||
                  </Card.Title>
                  <Card.Text>{receta.descripcion}</Card.Text>
                </Card.Body>

                <hr />
                <div className="d-flex justify-content-around">
                  <Button variant="outline-primary" onClick={handleShow}>
                    <div
                      onClick={() => {
                        setEditar(receta.id);
                      }}
                    >
                      Editar
                    </div>
                    {/* <a
                        href="#!"
                        className="btn btn-outline-primary text-decoration-none"
                        onClick={() => {
                          setEditar(receta.id);
                        }}
                      >
                        Editar
                      </a> */}
                  </Button>

                  <Button
                    variant="outline-danger"
                    onClick={() => {
                      borrarReceta(receta.id);
                    }}
                  >
                    Eliminar
                  </Button>
                </div>
                {editar === receta.id && (
                  <ModelEditar
                    show={show}
                    handleClose={handleClose}
                    datosRe={datosRe}
                    setDatosRe={setDatosRe}
                    editar={editar}
                    setEditar={setEditar}
                    receta={receta}
                    leerLs={leerLs}
                  />
                )}
              </Card>
            );
          })}
        </>
      )}
    </>
  );
};

export default CardConte;
