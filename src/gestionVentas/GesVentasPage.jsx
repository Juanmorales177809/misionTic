import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react'
import { Table, Button, Form, FormControl, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ForbidenComponent from '../shared/components/fordiben/ForbidenComponent';
import { Redirect } from 'react-router';






function GestionVentas() {
  const [ventas, setVentas] = useState();
  const [validUser, setValidUser] = useState(false);
  const { user, isAuthenticated } = useAuth0();



  const getVentas = async () => {
    try {
      const response = await fetch("http://localhost:3001/get-ventas");
      const jsonResponse = await response.json();
      const responseVentas = jsonResponse.data;
      const listVentas = responseVentas.map((venta) =>
        <tr>
          <td>{venta.id}</td>
          <td>{venta.detalle}</td>
          <td>{venta.cantidad}</td>
          <td>{venta.fechaVenta}</td>
          <td>{venta.valor}</td>
          <td>{venta.documento}</td>
          <td>{venta.name}</td>
          <td>{venta.Responsable}</td>
          <td>{venta.estado}</td>
        </tr>
      );
      setVentas(listVentas)

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
        await getVentas();

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
    getVentas();
  }, [isAuthenticated, validUser]);

  const gestventas = <div>

    <hr class="linea"></hr>

    <h2 class="texti">GESTIÓN VENTAS</h2>
    <div className = "row">
    <div className = "col">
    <a class="texti0">VENTAS</a>
    {validUser == true ? <Link class="but0" to="/reg-ventas"><Button variant="dark" redirectTo="/">+ Registrar</Button></Link> : <ForbidenComponent />}
    </div>
    </div>
    <hr class="linea line0"></hr>
    <br /><br />

    <div>
      {validUser == true ? <Form className="d-flex">
        <Row>
          <Form.Control size="sm" type="text" placeholder="Order ID" />
          <Button variant="dark">Search</Button>



        </Row>
      </Form> : <ForbidenComponent />}
    </div>

    {validUser == true ? <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID Venta</th>
          <th>Servicio</th>
          <th>Cantidad</th>
          <th>Fecha Venta</th>
          <th>Valor</th>
          <th>Documento cliente</th>
          <th>Nombre cliente</th>
          <th>Responsable</th>
          <th>Estado</th>

        </tr>
      </thead>
      <tbody>
        {ventas}
      </tbody>
    </Table> : <ForbidenComponent />}
    {validUser == true ? <Button variant="dark" redirectTo="/">Guardar</Button> : <ForbidenComponent />}

  </div>




  return (
    gestventas








  )
}


export default GestionVentas
