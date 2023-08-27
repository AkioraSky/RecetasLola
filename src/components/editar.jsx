import React from "react";

const EditarReceta = ({ receta, datosRe, setDatosRe, leerLs, setEditar }) => {
  const actualizarInformacion = (e, id) => {
    e.preventDefault();

    //leer los datos locales
    let recetasActuales = leerLs();

    //buscar por el id

    let index = recetasActuales.findIndex((receta) => receta.id === id);

    //obtenemos los datos del form y lo almacenamos en un objeto para guardar posteriormente
    let datosForm = {
      id,
      titulo: e.target.titulo.value,
      ingredientes: e.target.ingredientes.value,
      descripcion: e.target.descripcion.value,
    };

    //cambiar los datos de acuerdo al id encontrado

    recetasActuales[index] = datosForm;

    //actualizar la base de datos local
    localStorage.setItem("receta", JSON.stringify(recetasActuales));

    //cerrar el formulario de edicion

    setEditar(0);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          actualizarInformacion(e, receta.id);
        }}
      >
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
            defaultValue={receta.titulo}
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
            defaultValue={receta.ingredientes}
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
            placeholder="DescPreparaciónripción"
            defaultValue={receta.descripcion}
          ></textarea>
        </div>
        <div className="btn col-12">
          <input
            type="submit"
            className="button btn btn-primary text-center"
            id="save"
            value="Actualizar"
          />
        </div>
      </form>
    </>
  );
};

export default EditarReceta;
