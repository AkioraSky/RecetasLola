import React, { useState } from "react";

const Buscar = ({ datosRe, setDatosRe }) => {
  const [busqueda, setBusqueda] = useState("");

  const buscarReceta = (e) => {
    e.preventDefault();

    let busque = e.target.value;

    //creamos el filtro

    let resultado = datosRe.filter((receta) => {
      return receta.titulo.includes(busque);
    });

    //leer el localstorage para verificar la aplicacion

    if (busque.length <= 1 || busque.length <= 0) {
      resultado = JSON.parse(localStorage.getItem("receta"));
    }

    setDatosRe(resultado);
  };

  return (
    <>
      <>
        <form className="d-flex" role="search">
          <div className="input-group rounded">
            <input
              type="search"
              className="inp form-control rounded me-1 bg-black text-white"
              placeholder="Buscar"
              aria-label="Search"
              aria-describedby="search-addon"
              onChange={buscarReceta}
            />
            <span
              className="input-group-text border-0 bg-transparent"
              id="search-addon"
            >
              <i className="bi bi-search text-white"></i>
            </span>
          </div>
        </form>
      </>
    </>
  );
};

export default Buscar;
