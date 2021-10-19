import React from "react";
import { Link } from 'react-router-dom'
import './NavbarStyles.css'


function NavbarComponents() {

  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
  <div class="container-fluid contain">
    <Link to = "/"class="navbar-brand" href="#">MotoService</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to = "/ges-usuarios" class="nav-link active" aria-current="page" href="#">Usuarios</Link>
        </li>
        <li class="nav-item">
          <Link to = "/ges-ventas" class="nav-link" href="#">Ventas</Link>
        </li>
        <li class="nav-item">
          <Link to ="/ges-service" class="nav-link" href="#">Servicios</Link>
        </li>
        
        <li class="nav-item">
          
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    
     
    
  )
}
export default NavbarComponents;