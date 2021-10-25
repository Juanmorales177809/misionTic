import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import './EditarusuarioStyles.css'

import Form from 'react-bootstrap/Form'
import { ElementContext } from "../context/elementContext";





class EditarUsuarioPage extends Component {

    //  function  getRol(value){
    //     console.log(value.target.value)
    // }
    static contextType=ElementContext;
render(){
    const {changeBoxValue,active2, active1, active0}=this.context;
  
    function getRol(value){
      
        changeBoxValue(value.target.value)
    }
    function typeChanged(value){
     
        if(value.target.id==="2"){
            active2();
        }
        if(value.target.id==="1"){
            active1();
        }
        if(value.target.id==="0"){
            active0();
        }
        
    }

   
    return (

        
        <Fragment>
            <h2 className="te">GESTIÓN DE USUARIOS</h2>
            <div className="row">
                <div className="col ">
                    <a className="texti0 te0">Acceso Autorizado</a>
                </div>
            </div>
            <hr className="lin"></hr>

            <table className="table row1">
                <thead className="table-dark ">
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
                        <td>

                            <Form.Select aria-label="Default select example" onChange={getRol}>
                                <option>Elija un Rol...</option>
                                <option value="Administrador">Administrador</option>
                                <option value="Vendedor">Vendedor</option>
                              
                            </Form.Select>

                        </td>
                        <td><input type="radio" name="flexRadioDefault" id="0" onChange={typeChanged} />  </td>
                        <td><input type="radio" name="flexRadioDefault" id="1" onChange={typeChanged} /> </td>
                        <td><input type="radio" name="flexRadioDefault" id="2" onChange={typeChanged} /> </td>
                    </tr>

                </tbody>
            </table>

            <button type="button" className="btn btn-primary but2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Guardar</button>


            {/* <-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"> <Link to="/ges-usuarios" href="" style={{ color: "white", textDecoration: "none" }} >Understood</Link></button>
                        </div>
                    </div>
                </div>


            </div>

            <hr className="lin"></hr>

            {/* <-- Modal --> */}

        </Fragment>
    )
}
}

export default EditarUsuarioPage;