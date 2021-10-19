import React, { Fragment } from "react";
import './GesUsuariosStyles.css'
import { Link } from 'react-router-dom'



function GesUsuariosPage() {

    return (

        <Fragment>
            <h2 class="te">GESTIÓN DE USUARIOS</h2>
            <div className="row">
                <div className="col ">
                    <a class="texti0 te0">USUARIOS</a>
                </div>
            </div>
            <hr class="lin"></hr>
            <div class="edit">
                <Link to="/reg-usuario" href="" class = "color">Editar</Link>
            </div>
            <table class="table row1">
                <thead class="table-dark ">
                    <tr>
                        <th scope="col">Nombres</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Pendiente</th>
                        <th scope="col">Autorizado</th>
                        <th scope="col">No Autorizado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Camilo Cifuentes</th>
                        <td>Administrador</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    
                </tbody>
            </table>
        </Fragment>
    )
}

export default GesUsuariosPage;
