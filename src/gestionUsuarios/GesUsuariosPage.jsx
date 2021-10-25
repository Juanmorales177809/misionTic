import React, { Component, Fragment } from "react";
import './GesUsuariosStyles.css'
import { Link } from 'react-router-dom'
import { ElementContext } from "../context/elementContext";




class GesUsuariosPage extends Component {
    static contextType=ElementContext;

    render () {

        function typeChanged(value){
            console.log(value.target.id)
            
        }
        const {radio0value,radio1value,radio2value,initialBoxvalue}=this.context;
        console.log(radio2value);
            console.log(radio1value);
            console.log(radio0value);
        
        
        
    return ( 
       
                <Fragment>
                <h2 className="te">GESTIÓN DE USUARIOS</h2>
                <div className="row">
                    <div className="col ">
                        <a className="texti0 te0">USUARIOS</a>
                    </div>
                </div>
                <hr className="lin"></hr>
                <div className="edit">
                  <Link to="/edit-usuario" href="" className = "color">Editar</Link> 
                </div>
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
                            <td>{initialBoxvalue}</td>
                        <td><input type="radio" name="flexRadioDefault" id="0" checked={radio0value}   /> </td>
                        <td><input type="radio" name="flexRadioDefault" id="1"  checked={radio1value}   /> </td>
                        <td><input type="radio" name="flexRadioDefault" id="2" checked={radio2value}  /> </td>
                        </tr>
                        
                    </tbody>
                </table>
            </Fragment>
    
          

       
    );
    }
}

export default GesUsuariosPage;