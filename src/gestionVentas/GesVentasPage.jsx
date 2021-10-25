import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Table, Button, Form, FormControl, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ForbidenComponent from '../shared/components/fordiben/ForbidenComponent';
import {Redirect} from 'react-router';




function GestionVentas() {

const {isAuthenticated} = useAuth0();

if(localStorage.getItem("state") == 'Admin'){




 
const gestventas = <div>

 <Link to ="/reg-ventas"><Button variant="dark"  redirectTo="/">Registrar</Button></Link>

<br/><br />

<div>
<Form className="d-flex">
<Row>
<Form.Control size="sm" type="text" placeholder="Order ID"/>
        <Button variant="dark">Search</Button>
        
      

</Row>
</Form>
</div>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>ID Venta</th>
      <th>ID Producto</th>
      <th>Cantidad</th>
      <th>Fecha Venta</th>
      <th>Valor</th>
      <th>Documento cliente</th>
      <th>Nombre cliente</th>
      <th>Responsable</th>
      <th>En proceso</th>
      <th>Entregada</th>
      <th>Cancelada</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td> <input type="radio" value="enproceso" name="selección" /> </td>
      <td><input type="radio" value="entregado" name="selección" /> </td>
      <td><input type="radio" value="cancelado" name="selección" /> </td>
    </tr>
    
  </tbody>
</Table>
<Button variant="dark"  redirectTo="/">Guardar</Button>

</div>




  return (
    gestventas 



  
  

  

  )
}
else{
  return <Redirect to = "/"></Redirect>
}
}

export default GestionVentas
