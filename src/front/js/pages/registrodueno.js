import React from "react";
import PropTypes from "prop-types";
import logo from "../../img/dogger_logo.png";
import "../../styles/register.css";

export const RegistroDueno = () => {
  return (
    <div className="container-fluid">
      <div className="container align-items-center ">
        <div className="row d-flex justify-content-center align-items-center h-100 w-50 mx-auto">
          <div className="col">
            <div className="card card-registration my-4 register">
              <div className="row g-0">
                <div className="col-xl-12">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5">CREA TU CUENTA</h3>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label">Nombre</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label">Apellido</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label">Email</label>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label">Contraseña</label>
                        </div>
                      </div>
                    </div>

                    <h3 className="mb-5">REGISTRA A TU MASCOTA</h3>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label">Nombre</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label">Raza</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label">Edad</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-check mb-5">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                          />
                          <label className="form-check-label">
                            Acepto{" "}
                            <a href="#!" className="text-body">
                              <u>Términos y Condiciones</u>
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 ">
                        <button
                          type="submit"
                          className="btn btn-lg ms-2 rounded-pill"
                          id="btn_register"
                        >
                          Registrarse
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>

        <div className="custom-shape-divider-bottom-1659915776">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

RegistroDueno.propTypes = {
  match: PropTypes.object,
};
