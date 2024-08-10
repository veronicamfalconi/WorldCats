import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import imagenUno from "../../assets/imgCarrusel/imagenUno.jpg";
import imagenDos from "../../assets/imgCarrusel/imagenDos.jpg";
import imagenTres from "../../assets/imgCarrusel/imagenTres.jpg";
import imagenCuatro from "../../assets/imgCarrusel/imagenCuatro.jpg";
import imagenCinco from "../../assets/imgCarrusel/imagenCinco.jpg";
import imagenSeis from "../../assets/imgCarrusel/imagenSeis.jpg";
import imagenSiete from "../../assets/imgCarrusel/imagenSiete.jpg";
import Carrusel from "./Carrusel.jsx";
import Container from "react-bootstrap/Container";

function Home() {
  return (
    <div className="bodyhome">
      <section className="objetivos">
        <h1 className="text-danger text-center">
          ¡Bienvenido a la página de felinos!
        </h1>
        <p className="fs-5 custom-italic">
          Somos amantes de los animales y queremos compartir nuestra sabiduría
          sobre los gatos. Creamos este directorio por dos motivos principales:
          para ayudar a las personas que busca adoptar un nuevo integrante en la
          familia y para que conozca más sobre el mundo de estos animales que
          hacen de nuestro mundo, un espacio mas confortable ¡Esperamos que la
          información de la web te sea útil y podamos ayudarte a cuidar a tu
          mascota!
        </p>
      </section>

      <section className="boxmodel">
        <div className="boxmodel1">
          <h2>Historia y Orígenes</h2>
          <p className="fs-6 custom-italic">
            Los gatos comparten un antepasado común probablemente relacionado
            con los Aitanis. Los Aitanis era pequeños carnívoros de los bosques
            que aparecieron hace alrededor de 60 millones de años. Tenían un
            cuerpo alargado y una larga cola. Se cree que la domesticación del
            gato comenzó entre el 7500 a. C. y el 7000 a. C. y la manera fue
            cambiando de una época a otra, desde el Antiguo Egipto cuando era
            venerado como un Dios, hasta la Edad Media cuando los quemaban en
            las hogueras, pensando que era un animal diabólico. Los antiguos
            egipcios usaban para llamar al gato la onomatopeya «miu». Se
            convirtió en un animal de compañía apreciado por su dulzura, su
            gracia y su indolencia, pero el gato es sobre todo un animal
            protector. Al cazar pequeños roedores y serpientes, protege los
            silos donde los egipcios guardaban su cosecha y elimina un vector de
            enfermedades graves, haciendo más seguros los alrededores de los
            hogares próximos a donde establece su territorio. Antes, los
            sacerdotes consagraban sus atenciones al león, pero este era grande
            y feroz, y el gato no tuvo problemas para imponerse, ya que se
            mostraba al menos más dócil. Además, los sacerdotes señalaron que
            con el paso de las generaciones, el pequeño felino aceptaba cada vez
            mejor al hombre y se dejaba incluso acariciar.
          </p>
        </div>
        <div className="boxmodel2">
          <h2>¿Qué hay que tener en cuenta al adoptar un gatito?</h2>
          <p className="fs-5 custom-italic">
            Antes de adoptar un gatito debes pensar muy bien e incluir a todos
            los miembros de la familia en tu decisión: ¿están todos de acuerdo
            con tener un pequeño felino en casa? ¿Tenés suficiente tiempo y
            espacio disponible? Si vivís en una vivienda de alquiler, ¿está
            permitido tener animales domésticos? Si tu gatito pasa tiempo fuera
            es importante saber si a los vecinos les gustan los gatos, pues
            puede que, de vez en cuando, busque otros espacios donde no sabemos
            si son bien bienvenidos.
          </p>
          <p className="fs-5 custom-italic">
            ¿Queres un gato de raza o uno de los muchos gatitos que hay en las
            protectoras de animales en busca de un hogar? ¿Tienes los medios
            económicos para asumir los costes veterinarios, que no deben
            subestimarse? ¿Quién se ocupará del minino durante las vacaciones?
            Son todas cuestiones que deben resolverse antes de adoptar uno.
            Encontraras en esta página información últi sobre las razas y
            enlaces sobre lugares de adopción.
          </p>
        </div>
      </section>

      <aside className="sugerencias">
        <h3>Libros Útiles</h3>
        <div className="listaLibros">
          <ul>
            <li>La guia del Gato</li>
            <li>Gatos del Mundo</li>
            <li>Medicina Felina</li>
          </ul>
        </div>
        <h3>Enlace Útiles</h3>
        <div className="listaLibros">
          <ul>
            <li>
              <link rel="stylesheet" href="" />
              https://www.cosasdegatos.es/curiosidades-gatos/que-es-bolsa-primordial-gatos
            </li>
            <li>
              https://www.cosasdegatos.es/enfermedades-salud-gatos/gatos-estres-sintomas-tratamiento
            </li>
            <li>Medicina Felina</li>
          </ul>
        </div>
      </aside>

      <Carrusel className="carrusel" />
    </div>
  );
}

export default Home;
