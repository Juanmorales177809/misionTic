import React from "react";
import { Link } from 'react-router-dom'
import './NavbarStyles.css'


function NavbarComponents() {

  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <Link to = "/"class="navbar-brand text1" >Equipo 25</Link>
      <span class="navbar-text">
        <Link to="/regservice" href="#" class="text">Registro de Servicios</Link>
        <Link to ="/login"><button to = "/login" class="but">JM</button></Link>
      </span>

    </div>
    <hr class="linea"/>
  </nav>
     
    
  )
}
export default NavbarComponents;