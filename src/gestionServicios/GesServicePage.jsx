import React, { Fragment, useEffect, useState } from "react";
import './GesServiceStyles.css'
import { Link } from 'react-router-dom'
import apiBaseUrl from "../shared/utils/Api";
import ForbidenComponent from "../shared/components/fordiben/ForbidenComponent";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from 'react-router';




function GesServicePage() {
    const [services, setServices] = useState([]);
    const [validUser, setValidUser] = useState(false);
    const { user, isAuthenticated } = useAuth0();

    function deleteElement(id) {
        deleteService(id);
        console.log(id);
    }
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
                    <td>
                        <div className="mb-3">
                            {validUser == true ? <button type="button" class="btn btn-dark">Editar</button> : <ForbidenComponent/>}
                        </div>
                    </td>
                    <div className="mb-3">
                        <td>
                            {validUser == true ?<button onClick={(id) => deleteElement(service.id)} type="button" class="btn btn-dark">{" "}
                                Borrar{" "}</button> : <ForbidenComponent/>}
                        </td>
                    </div>
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
    const deleteService = async (id) => {
        const productData = {
            id: id,
        };

        const response = await fetch(`http://localhost:3001/delete-service`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
    };

    useEffect(() => {
        grantAccess();
        getService();
    }, [isAuthenticated, validUser]);

    return (
        <Fragment>

            <hr class="linea"></hr>

            <h2 class="texti">GESTIÓN DE SERVICIOS</h2>
            <div className="row">
                <div className="col ">
                    <a class="texti0">SERVICIOS</a>
                    {validUser == true ? <Link to="/reg-service" ><button type="button" class="btn btn-dark but0">+ Registrar</button></Link> : <ForbidenComponent />}

                </div>
            </div>
            <hr class="linea line0"></hr>
            <div class="row row0">
                <div class="col">
                    {validUser == true ? <input type="text" class="form-control inpu" placeholder="# Servicio" aria-label="Search" /> : <ForbidenComponent />}
                </div>
                <div class="col">
                    {validUser == true ? <button type="button" class="btn btn-dark but1">Buscar</button> : <ForbidenComponent />}
                </div>
            </div>
            <div class="edit">
                {validUser == true ? <a href="" >Editar</a> : <ForbidenComponent />}
            </div>


            <table class="table row1">
                <thead class="table-dark ">
                    <tr>
                        <th scope="col">Id </th>
                        <th scope="col">Servicio</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acción</th>
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