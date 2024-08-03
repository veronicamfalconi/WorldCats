import "./Home.css"

function Home() {
  return (
    <div className="bodyhome">
      <section className="Objetivos">
        <h1>Bienvenidos a la Página Numero 1 en informacion para felinos </h1>{" "}
        Aqui encontraran.....
      </section>

      <section className="boxmodel">
        <div className="boxmodel1">
          <h2>Historia y Origenes</h2>blablabla
        </div>
        <div className="boxmodel2">
          <h2>Actualidad</h2>blablabla
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
      </aside>
    </div>
  );
}
export default Home;
