import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {Modal, Button} from 'react-bootstrap';




function Login() {

    const { loginWithRedirect } = useAuth0();
    
    

    return (
        <Modal.Dialog>
  <Modal.Header closeButton redurect >
    <Modal.Title>Atención!</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Accesso denegado. Porfavor ingrese al sistema con sus credenciales. </p>
  </Modal.Body>

  <Modal.Footer>
    <Button  variant="secondary" href="https://dev-4qsk899o.us.auth0.com/u/signup?state=hKFo2SBwbW9sREdhVnZKQjBEX09IaS1nTHlxXzlQbk5Cemx0LaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHAwWG0tRW9rSXB5d1hMaE9tMDBGWGNSUDBvdFBkMjBvo2NpZNkgdVZXZ2E1SFduUTA4TzJaRVp2ZlN5S1NvQjFZUEpMWkg" >Registrarse</Button>
    {/* <Button  onClick={() => logout({ returnTo: window.location.origin })} variant="secondary" >Registrarse</Button> */}
    <Button  onClick={() => loginWithRedirect()} variant="primary" >Ingresar</Button>
  </Modal.Footer>
</Modal.Dialog>

    )}


export default Login
