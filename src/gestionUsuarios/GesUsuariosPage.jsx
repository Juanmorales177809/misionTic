import React, { Component, Fragment, useEffect, useState } from "react";
import './GesUsuariosStyles.css'
import { Link } from 'react-router-dom'
import { ElementContext } from "../context/elementContext";




function GesUsuariosPage () {

    const [users, setServices] = useState([]);
     
    const getUsers = async () => {
      try {
        const response = await fetch("http://localhost:3001/get-users");
        const jsonResponse = await response.json();
        const responseServices = jsonResponse.data;
        const usersList = responseServices.map((user) => (
          <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.role}</td>
            <td>{user.autorizado}</td>
            <td>{user.email}</td>
          </tr>
        ));
        setServices(usersList);
      } catch (error) {
        console.log(error);
      }
    };

     

   
useEffect(() => {
    getUsers();
   
}, [])
        function typeChanged(value){
            console.log(value.target.id)
            
        }
    
        
        
        
    return ( 
       
        <ElementContext.Consumer>
        {(context) => {
             const {radio0value,radio1value,radio2value,initialBoxvalue}=context;
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
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Role</th>
                            <th scope="col">Autorizado</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users}
                        
                    </tbody>
                </table>
            </Fragment>
          );
        }}
      </ElementContext.Consumer>
          

       
    );
    
}

export default GesUsuariosPage;