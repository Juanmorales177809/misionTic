import React from "react";

/* Barra de navegacion*/
function SectionComponent() {
    return (

        <div className="form-login">
            <h5>Iniciar sesión</h5>


            <input className="controls" type="text" name="usuario" value="" placeholder="Nombre de usuario" />
            <input className="controls" type="password" name="contrasena" value="" placeholder="Contraseña" />

            

            <div class="sign-in-btn">
                <p class="btn-text-sigin"><b>Iniciar Sesion</b></p>
            </div>

            <div class="google-btn">
                <div class="google-icon-wrapper">
                    <img class="google-icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                </div>
                <p class="btn-text"><b>Sign in with google</b></p>
            </div>

            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
                Recordarme
            </label>

            <p><a href="#">Olvidaste tu contraseña?</a></p>





        </div>



    );
}

export default SectionComponent;