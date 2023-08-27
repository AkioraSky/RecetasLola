import React from "react";

const FrmAgregar = ({ datosRe, setDatosRe }) => {
  const salvarLocal = (dato) => {
    let elemento = JSON.parse(localStorage.getItem("receta"));

    if (Array.isArray(elemento)) {
      elemento.push(dato); //verifica que sea un arreglo y agrega un elemento al final del arreglo
    } else {
      elemento = [dato]; //crea el arreglo por primera vez
    }
    setDatosRe(elemento);
    localStorage.setItem("receta", JSON.stringify(elemento));
  };

  //   const getDatosFrm = (e) => {
  //     e.preventDefault(); // para evitar la recarga
  //     let titulo = e.target.titulo;
  //     let ingredientes = e.target.ingredientes;
  //     let descripcion = e.target.descripcion;

  //     let data = {
  //       id: new Date().getTime(),
  //       titulo: titulo.value,
  //       ingredientes: ingredientes.value,
  //       descripcion: descripcion.value,
  //     };

  //     setDatosRe(data);

  //     salvarLocal(data);
  //   };

  const getDatosReFrm = (e) => {
    e.preventDefault(); // para evitar la recarga
    let titulo = e.target.titulo;
    let ingredientes = e.target.ingredientes;
    let descripcion = e.target.descripcion;

    let dato = {
      id: new Date().getTime(),
      titulo: titulo.value,
      ingredientes: ingredientes.value,
      descripcion: descripcion.value,
    };

    setDatosRe(dato);

    salvarLocal(dato);
  };

  return (
    <>
      <form onSubmit={getDatosReFrm}>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-center"
          >
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            name="titulo"
            placeholder="Nombre"
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-center"
          >
            Ingredientes:
          </label>
          <input
            type="text"
            className="form-control"
            id="ingredientes"
            name="ingredientes"
            placeholder="Ingredientes"
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlTextarea1"
            className="form-label text-center"
          >
            Preparación:
          </label>
          <textarea
            className="form-control"
            id="descripcion"
            name="descripcion"
            rows="2"
            placeholder="Preparación"
          ></textarea>
        </div>
        <div className="btn col-12">
          <input
            type="submit"
            className="btn btn-primary text-center"
            id="save"
            value="Guardar"
          />
        </div>
      </form>
    </>
  );
};

export default FrmAgregar;
