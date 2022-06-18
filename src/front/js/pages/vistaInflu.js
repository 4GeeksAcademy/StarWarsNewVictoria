import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { IframeInstagram } from "../component/iFrameInsta";


export const VistaInflu = ({ imagen, nombre, username, seguidores, provincia, ciudad, sector }) => {
    const { store, actions } = useContext(Context);
    const [url, setUrl] = useState("");

    // var requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow'
    //   };

    //   fetch("https://3001-jaygosling-influere-s5lmjehtutj.ws-eu47.gitpod.io/api/empresas", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));


    return (
        <div className="container" >
            <div className="headerInflu container-fluid " id="imgPerfil2" style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px 80px" }}></div>

            {/* --------------------------------------------------- */}
            <div className="row container" style={{ display: "flex", justifyContent: "right", alignItems:"center", marginTop: "5px" }}>
                
                <div class="btn-group" style={{height: "40px", width: "40px"}}>
                    {/* <button type="button" class="btn btn-light"><i class="fas fa-home"><a class="dropdown-item" href={"/vistaInflu"}></a></i></button> */}
                    <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" >
                        <i class="fas fa-user-edit"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href={"/formulario-influencers"}>Editar Perfil</a></li>
                        {/* <li><a class="dropdown-item" href="/">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Cerrar Sesión</a></li>
                    </ul>
                </div>
            </div>
            {/* ------------------------------------------------- */}
            <div className="container" style={{ maxWidth: "100%" }}>
                <div className="row container">
                    <div className="col-md-6" style={{ paddingLeft: "15px", textAlign: "right", margin: "5% auto 5% auto" }}>
                        <h1
                            action="/influencers" method="GET"
                            className="title1"
                            style={{ color: "#458fff" }}
                        >
                            Nombre: {nombre}
                        </h1>
                        <h2 className="title2 ">Sector: {sector}</h2>
                        <h4 className="textoBreve1 " style={{ opacity: "40%" }}>
                            Usuario: {username}
                        </h4>
                        <h6 className="textoBreve1 " style={{ opacity: "40%" }}>
                            Provincia (ciudad): {provincia} {ciudad}
                        </h6>
                        <br></br>
                        <br></br>
                        <h5 className="textobreve2 " style={{ opacity: "40%", maxWidth: "100%" }}>
                            Breve descripción sobre el influencer, escrito por él mismo, puede
                            introducir actitudes, aptitudes y logros, etc etc.
                        </h5>

                    </div>
                    <div className="col-md-6 rounded-circle " style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                        <img src={"https://modernadepueblo.com/wp-content/uploads/2019/05/Protas-01-1024x1024.png"} style={{ maxWidth: "400px", opacity: "80%", transform: "revert" }} />
                    </div>
                </div>

                <br></br>
                <div className="row" style={{ margin: "auto 25% auto 25%" }}>

                    <table class="table">
                        <thead>
                            <tr style={{ textAlign: "center" }}>
                                <th scope="col">1,221</th>
                                <th scope="col">1,7M</th>
                                <th scope="col">1,082</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ textAlign: "center" }}>
                                <td>Publicaciones</td>
                                <td>Seguidores</td>
                                <td>Seguidos</td>
                            </tr>
                        </tbody>
                    </table>


                </div>
                <br></br>

                <div className="row container " style={{ background: "#458fff", borderRadius: "10px 80px", paddingTop: "5px", color: "white" }}>
                    <h4 className="title2 text-center">ÚLTIMAS PUBLICACIONES</h4>

                </div>
                {/* ---------------AGREGAR UN POST NUEVO-------------------------------------------------------------------------- */}

                <div className="text-center mt-5">
                    <h4 style={{ color: "#458fff" }}>Agrega un nuevo post:</h4>
                    {/* <ContainerLista/> */}

                    <form >
                        <div className="todo-list">
                            <div className="file-input">
                                <input
                                    type={"text"}
                                    onChange={(e) => setUrl(e.target.value)}
                                    value={url}
                                />

                                <button type="button" class="btn-light" style={{ color: "#458fff" }}
                                    // disabled={description ? "" : "disabled"}
                                    onClick={() => {
                                        actions.agregar(url);
                                        setUrl("");

                                    }}
                                >
                                    Ok
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
                {/* --------------------ESPACIO DONDE SE AGREGARÁN LOS POST --------------------------------------------------------*/}

                <div className="row ">
                    {store.posts?.map((e, i) => {
                        return (
                            <div key={i} className="col-4">
                                <IframeInstagram url={e}
                                />
                            </div>
                        );
                    })}
                </div>


            </div>





        </div>
    );
};
