import React from "react";

import Modal from "react-bootstrap/Modal";
import FrmAgregar from "./frmAgregar";

const ModalAgregar = ({ show, handleClose, datosRe, setDatosRe }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-Center"> Agregar Receta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FrmAgregar datosRe={datosRe} setDatosRe={setDatosRe} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAgregar;
