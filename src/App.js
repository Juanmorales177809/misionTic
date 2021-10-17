import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
//import { useAuth0 } from "@auth0/auth0-react";
import Navbarr from './Navbar/Navbarr';
import Sistemaventas from './Sistemaventas/Sistemaventas.jsx';
import { useAuth0 } from "@auth0/auth0-react";
import Login from './Login/Login';
import Sistemainfoventas from './Sistemainfoventas/Sistemainfoventas';



function App() {

  const { user, isAuthenticated } = useAuth0();

  return (

<Router>

      <Navbarr />

      <Switch>
        <Router path="/" exact>
        </Router>

        {isAuthenticated === true ? <Router path="/Sistemaventas" exact><Sistemaventas /></Router> : <Login/>}

        {isAuthenticated === true ? <Router path="/Sistemainfoventas" exact>
        <Sistemainfoventas /> </Router> : <Login/>}

        <Router path="/forbiden" exact>
        </Router>

      </Switch>

    </Router>
    
  );
}

export default App;