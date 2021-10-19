import React, { Fragment } from "react";
import { Router } from "react-router";
import LoginPage from "./Login/LoginPage.jsx";
import NavbarComponents from "./shared/components/navbar/NavbarComponents";
import { BrowserRouter as Rou, Switch, Route, Link } from 'react-router-dom'
import GesServicePage from "./gestionServicios/GesServicePage.jsx";
import GesVentasPage from "./gestionVentas/GesVentasPage.jsx"
import GesUsuariosPage from "./gestionUsuarios/GesUsuariosPage.jsx"
import RegServicePage from "./RegistroServicio/RegServicePage.jsx";
import EditarUsuarioPage from "./editarUsuario/EditarUsuarioPage.jsx";
function App() {
  return (
    <Rou>
      <NavbarComponents/>
      
      <Switch>
      
      <Route path="/" exact>
      
      </Route>
      <Route path="/login">
        <LoginPage/>
        </Route>
      <Route path = "/ges-service" exact>
      <GesServicePage/>
      </Route>
      <Route path = "/ges-usuarios" exact>
        <GesUsuariosPage/>
      </Route>
      <Route path = "/ges-ventas" exact>
        <GesVentasPage/>
      </Route>
      <Route path ="/reg-service" exact>
        <RegServicePage/>
      </Route>
      <Route path ="/reg-usuario">
        <EditarUsuarioPage/>

      </Route>

      

      </Switch>
    </Rou>
  );
}

export default App;
