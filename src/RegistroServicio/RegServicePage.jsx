import React, { Fragment } from "react";
import './RegStyles.css'



function RegServicePage() {

    return (

        <Fragment>


            <h2 class="te">GESTIÓN DE SERVICIOS</h2>
            <div className="row">
                <div className="col ">
                    <a class="texti0 te0">Registro de Servicios</a>
                </div>
            </div>
            <hr class="lin"></hr>
            <div class="basic_info recuadro">
                <div className="row">
                    <div class="col drp">
                        <div class="dropdown ">
                            <a class="btn btn-secondary dropdown-toggle combo" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Elija tipo de servicio...
                            </a>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Mantenimiento</a></li>
                                <li><a class="dropdown-item" href="#">Cambio de Aceite</a></li>
                                <li><a class="dropdown-item" href="#">Lavado General</a></li>
                                <li><a class="dropdown-item" href="#">Lavado con Polichada</a></li>
                                <li><a class="dropdown-item" href="#">Desinfección</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control intu" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default " placeholder="Detalle" />
                        </div>
                    </div>
                </div>
                <div class="mb-3 row">
            <label for="inputNombre" class="col-sm-2 col-form-label valor" >Valor</label>
            <div class="col-sm-8">
                <input type="number" class="form-control pesos" id="inputNombre"placeholder="$"/>
            </div>
            </div>
            <div class="mb-3 row">
            <div class="form-check radi">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>


                <label class="form-check-label" for="flexRadioDefault1">
                    Activo
                </label>
            </div>
            <div class="form-check radi">
                <label class="form-check-label" for="flexRadioDefault2">
                    No Activo
                </label>
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>

            </div>
        </div>

            </div>
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
        </Fragment>
    )
}

export default RegServicePage;
