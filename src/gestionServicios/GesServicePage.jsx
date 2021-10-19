import React, { Fragment, useEffect, useState} from "react";
import './GesServiceStyles.css'
import { Link } from 'react-router-dom'


function GesServicePage() {
    const [services, setServices] =  useState([])
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
    );
    const getService = async()=>{
        try{
            const response  =  await fetch("http://localhost:3001/get-Service");
            const jsonResponse = await response.json();
            const responseServices = jsonResponse.data;
            const listservices =responseServices.map((service) =>
            <tr>
                <th scope="row">{service.id}</th>
                <td>{service.detalle}</td>
                <td>{service.valor}</td>
                <td>{service.estado}</td>
            </tr>
        );
        setServices(listservices)
          
    }
    catch(error){
        console.log(error)
    }
    };
    useEffect(() =>{
        getService()

    },[])
    
    return (


        <Fragment>

            <hr class="linea"></hr>

            <h2 class="texti">GESTIÓN DE SERVICIOS</h2>
            <div className="row">
                <div className="col ">
                    <a class="texti0">SERVICIOS</a>
                    <Link to="/reg-service" ><button type="button" class="btn btn-dark but0">+ Registrar</button></Link>

                </div>
            </div>
            <hr class="linea line0"></hr>
            <div class="row row0">
                <div class="col">
                    <input type="text" class="form-control inpu" placeholder="# Servicio" aria-label="Search" />
                </div>
                <div class="col">
                    <button type="button" class="btn btn-dark but1">Buscar</button>
                </div>
            </div>
            <div class="edit">
                <a href="" >Editar</a>
            </div>


            <table class="table row1">
                <thead class="table-dark ">
                    <tr>
                        <th scope="col">Id Servicio</th>
                        <th scope="col">Servicio</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {services}
                </tbody>
            </table>
            <hr class="linea line1"></hr>

            {/* <!-- Button trigger modal --> */}



        </Fragment>

    )
}
export default GesServicePage;