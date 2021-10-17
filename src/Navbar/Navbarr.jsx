import React from 'react'
import { NavDropdown, Nav, Container, Navbar } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";



function Navbarr() {

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Equipo 25</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/sistemaventas">Sistema Ventas</Nav.Link>
            {/* agregar en /sistema-ventas
            {isAuthenticated ? (contenido de sistema-ventas) : <Login/>} */}
            <Nav.Link href="/sistemainfoventas">Sistema información Ventas</Nav.Link>
            {isAuthenticated === true ? <NavDropdown title={user.name} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => logout({ returnTo: window.location.origin })}>Salir</NavDropdown.Item>
            </NavDropdown> :
              <NavDropdown title="Identifícate" id="basic-nav-dropdown">

                <NavDropdown.Item onClick={() => loginWithRedirect()}>Ingresar</NavDropdown.Item>
                <NavDropdown.Item href="https://dev-4qsk899o.us.auth0.com/u/signup?state=hKFo2SBTVVRaaUpWUUJSYmJrbmdGQVlRbXlPRDlMN2hRNXVfeaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHRyVGRQZkx6dW0wTXJDRUNUWHQxTl82bjBKaXg4cVJXo2NpZNkgdVZXZ2E1SFduUTA4TzJaRVp2ZlN5S1NvQjFZUEpMWkg">Crea una cuenta</NavDropdown.Item>
                {/* parece que el link cambia  */}
              </NavDropdown>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Navbarr

