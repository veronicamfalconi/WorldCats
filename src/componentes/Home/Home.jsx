import "./Home.css";

function Home() {
  return (
    <div className="bodyhome">
      <section className="Objetivos">
        <h1>Bienvenidos a la Página Numero 1 en informacion para felinos </h1>{" "}
        <p>
          Quiénes somos Somos amantes de los animales. Creamos este directorio
          para ayudar a las personas que busca adoptar un nuevo integrante en la
          familia. ¡Esperamos que la información de la web te sea útil y podamos
          ayudarte a cuidar a tu mascota!
        </p>
      </section>

      <section className="boxmodel">
        <div className="boxmodel1">
          <h2>Historia y Origenes</h2>blablabla
        </div>
        <div className="boxmodel2">
          <h2>¿Qué hay que tener en cuenta al adquirir un gatito?</h2>Antes de
          hacerte con un gatito debes pensártelo muy bien e incluir a todos los
          miembros de la familia en tu decisión: ¿estáis todos de acuerdo con
          tener un pequeño felino en casa? ¿Tenéis suficiente tiempo y espacio
          disponible? Si vivís en una vivienda de alquiler, ¿está permitido
          tener animales domésticos? Si tu gatito pasa tiempo fuera es
          importante saber si a los vecinos les gustan los gatos, pues puede
          que, de vez en cuando, tu minino se aventure a la huerta de al lado.
          ¿Quieres un gato de raza o uno de los muchos gatitos que hay en las
          protectoras de animales en busca de un hogar? ¿Tienes los medios
          económicos para asumir los costes veterinarios, que no deben
          subestimarse? ¿Quién se ocupará del minino durante las vacaciones?
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
        <h3>Enlaces Útiles</h3>
        <div className="listaLibros">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
export default Home;
