import React from "react";
import NavbarLink from "./navbar";
import Buscar from "./buscar";

const Banner = () => {
  return (
    <>
      <header className="bg-black p-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <div className="text-center">
                <a className="navbar-brand" href="#!">
                  <img
                    src="./images/recetasLogo.png"
                    alt="Bootstrap"
                    width="100"
                    height="60"
                  />
                </a>
              </div>
            </div>

            <div className="col-3">
              <div className="title text-center">
                <h3 className=" fw-bolder">RECETAS LOLA</h3>
              </div>
            </div>

            <div className="col-6">
              <div className="text-center mt-2">
                <Buscar />
              </div>
            </div>
          </div>

          {/* Inicio del navabar */}
          {/* Esta es la navegacion del Navbar */}
          <div className="row">
            <div className="container">
              <NavbarLink />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Banner;
