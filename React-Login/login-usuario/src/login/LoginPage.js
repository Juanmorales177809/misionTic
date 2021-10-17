import React, { Fragment } from "react";
import NavbarComponent from "../shared/components/navbar/NabvarComponent";
import SectionComponent from "../shared/components/section/SectionComponent";
import './LoginStyles.css';


/*Se crea una unica funcion */
function LoginPage() {

    /*Debe retornar una unica caja */
    /*El div equivale a l body de html */
    return (
        <Fragment>

            
            <NavbarComponent></NavbarComponent>
            <SectionComponent></SectionComponent>
            




        </Fragment>
    );
}

/* Ya puedo utilizar el archivo en cualquier lugar*/
/* Crear nuestras propias etiquetas*/
export default LoginPage;