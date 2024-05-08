import { Block } from "./Block";
import "../CSS/home.css";
import "../CSS/footer-hommepage.css";

export function HommePage() {
  return (
    <>
      <div className="home-container">
        <h1 className="text-home-container">FINDES PADELEROS</h1>
        <h2 className="text-home-container-small">
          Una nueva forma de jugar al pádel, hacer amigos y vivir experiencias
          únicas
        </h2>
      </div>
      <div className="blocks-container">
        <Block
          img="1"
          title="PÁDEL"
          text="¡Nos encanta el pádel!"
          className="block"
        />
        <Block
          img="2"
          title="AMIGOS"
          text="¡Tú trae la pala, nosotros los amigos!"
          className="block"
        />
        <Block
          img="3"
          title="ACTIVIDADES"
          text="Disfrutaremos de diferentes actividades a lo largo del fin de semana"
          className="block"
        />
      </div>
      <footer class="page-footer center">
        <div class="page-footer-container">
          <p>
            Información sobre nuestra{" "}
            <a href="politica-privacidad.html">política de privacidad</a>.
          </p>
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-youtube"></i>
          <p>
            Creado por: <a href="cmuntadag23@hotmail.com">Carla Muntada</a>{" "}
            Teléfono de contacto: <a href="tel:680611790">680 61 17 90</a>.
          </p>
        </div>
      </footer>
    </>
  );
}

export function Calendar() {
  return <h1>Voy a hacer el calendario iepp</h1>;
}

export function Contact() {
  return <h1>Contact</h1>;
}
