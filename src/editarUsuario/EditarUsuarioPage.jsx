import React, { Fragment } from "react";
import './EditarusuarioStyles.css'



function EditarUsuarioPage() {

    return (

        <Fragment>
            <h2 class="te">GESTIÓN DE USUARIOS</h2>
            <div className="row">
                <div className="col ">
                    <a class="texti0 te0">Acceso Autorizado</a>
                </div>
            </div>
            <hr class="lin"></hr>

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

            <button type="button" class="btn btn-primary but2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Guardar</button>


            {/* <-- Modal --> */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>


            </div>

            <hr class="lin"></hr>

            {/* <-- Modal --> */}

        </Fragment>
    )
}

export default EditarUsuarioPage;
