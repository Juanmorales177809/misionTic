import React, { Fragment, useEffect, useState } from "react";
import './GesServiceStyles.css'
import { Link } from 'react-router-dom'
import apiBaseUrl from "../shared/utils/Api";
import ForbidenComponent from "../shared/components/fordiben/ForbidenComponent";
import { useAuth0 } from "@auth0/auth0-react";
import {Redirect} from 'react-router';



function GesServicePage() {
    const [services, setServices] = useState([]);
    const [validUser, setValidUser] = useState(false);
    const { user, isAuthenticated } = useAuth0();

    const getService = async () => {
        try {
            const response = await fetch("http://localhost:3001/get-Service");
            const jsonResponse = await response.json();
            const responseServices = jsonResponse.data;
            const listservices = responseServices.map((service) =>
                <tr>
                    <th scope="row">{service.id}</th>
                    <td>{service.detalle}</td>
                    <td>{service.valor}</td>
                    <td>{service.estado}</td>
                </tr>
            );
            setServices(listservices)
        }
        catch (error) {
            console.log(error)
        }
    }

    const validateUserRole = async () => {
        const response = await fetch(`http://localhost:3001/get-user?email=${user.email}`);
        const jsonResponse = await response.json();
        return jsonResponse;
    }

    const grantAccess = async () => {
        let userData;
        if (isAuthenticated) {
            userData = await validateUserRole();
        }
        else {
            // window.location.href = "https://dev-hhz06300.us.auth0.com/u/login?state=hKFo2SBKcmFxZUJaZUxvSURwT0FyQWxRUHQzemVlamc4M3IwRKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHZoeXZIb0dJT0pKX0Nvb05aQTVscXBoLXc0azFvTm50o2NpZNkgMmZaemNrR1FKZzJoVTRhUWpGcXNWSXNwZWplRUVvYXE"
            setValidUser(false);
            return;
        }
        if (userData) {
            if (userData.role != 'Invited') {
                setValidUser(true);
                localStorage.setItem("state", true);
                await getService();
                
            }
            else {
                setValidUser(false);
            }
        }
        else {
            setValidUser(false);
        }
    }

    useEffect(() => {
        grantAccess();

        getService();
    }, [isAuthenticated,validUser]);
    
    return (
        <Fragment>

            <hr class="linea"></hr>

            <h2 class="texti">GESTIÓN DE SERVICIOS</h2>
            <div className="row">
                <div className="col ">
                    <a class="texti0">SERVICIOS</a>
                    {validUser == true ? <Link to="/reg-service" ><button type="button" class="btn btn-dark but0">+ Registrar</button></Link>: <ForbidenComponent />}

                </div>
            </div>
            <hr class="linea line0"></hr>
            <div class="row row0">
                <div class="col">
                    { validUser == true ?<input type="text" class="form-control inpu" placeholder="# Servicio" aria-label="Search" />: <ForbidenComponent/>}
                </div>
                <div class="col">
                    { validUser == true?<button type="button" class="btn btn-dark but1">Buscar</button>: <ForbidenComponent/>}
                </div>
            </div>
            <div class="edit">
            {validUser == true ?<a href="" >Editar</a>: <ForbidenComponent/>}
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