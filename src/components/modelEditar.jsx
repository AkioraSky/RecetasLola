import React from "react";
import EditarReceta from "./editar";

import Modal from "react-bootstrap/Modal";
const ModelEditar = ({
  editar,
  setEditar,
  show,
  handleClose,
  receta,
  datosRe,
  setDatosRe,
  leerLs,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-Center"> Editar Receta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editar === receta.id && (
            <EditarReceta
              editar={editar}
              setEditar={setEditar}
              setDatosRe={setDatosRe}
              datosRe={datosRe}
              leerLs={leerLs}
              receta={receta}
            />
          )}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ModelEditar;
