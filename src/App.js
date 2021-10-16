import React, { Fragment } from "react";
import { Router } from "react-router";
import LoginPage from "./Login/LoginPage.jsx";
import NavbarComponents from "./shared/components/navbar/NavbarComponents";
import { BrowserRouter as Rou, Switch, Route, Link } from 'react-router-dom'
import RegServicePage from "./RegistroServicio/RegServicePage.jsx";
function App() {
  return (
    <Rou>
      <NavbarComponents/>
      <Switch>
      
      <Route path="/" exact>
      <h1>Equipo 25</h1>
      </Route>
      <Route path="/login">
        <LoginPage/>
        </Route>
      <Route path = "/regservice" exact>
      <RegServicePage/>
      </Route>

      

      </Switch>
    </Rou>
  );
}

export default App;
