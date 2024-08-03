import "./Razas.css";
import bengala from "../../assets/imgRazas/bengala.jpg";
import esfinge from "../../assets/imgRazas/esfinge.jpg";
import persa from "../../assets/imgRazas/persa.jpg";
import siames from "../../assets/imgRazas/siames.jpg";

function Razas() {
  return (
    <div className="bodyhome2">
      <section className="encabezadoRazas">
        <p>
          {" "}
          A continuacion podran encontrar toda la informacion necesaria sobre
          los atributos y comportamientos de los felinos segun sus Razas
        </p>
      </section>
      <>
        <section className="imgA">
          <div className="imgRazas">
            <h2> Bengala</h2>
            <img src={bengala} alt="imgA" />
          </div>
        </section>
        <section className="textimgA">
          <p className="textRazas">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            omnis, laborum sunt tempora odio neque similique velit, aut quo
            iusto consectetur rerum soluta inventore sit minus. Quo beatae
            facere iure?
          </p>
        </section>
      </>

      <>
        <section className="imgB">
          <div className="imgRazas">
            <h2> Esfinge</h2>
            <img src={esfinge} alt="imgB" />
          </div>
        </section>
        <section className="textimgB">
          <p className="textRazas">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            omnis, laborum sunt tempora odio neque similique velit, aut quo
            iusto consectetur rerum soluta inventore sit minus. Quo beatae
            facere iure?
          </p>
        </section>
      </>
      <>
        <section className="imgC">
          <div className="imgRazas">
            <h2> Persa</h2>
            <img src={persa} alt="imgc" />
          </div>
        </section>
        <section className="textimgC">
          <p className="textRazas">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            omnis, laborum sunt tempora odio neque similique velit, aut quo
            iusto consectetur rerum soluta inventore sit minus. Quo beatae
            facere iure?
          </p>
        </section>
      </>
      <>
        <section className="imgD">
          <div className="imgRazas">
            <h2> Siames</h2>
            <img src={siames} alt="imgD" />
          </div>
        </section>
        <section className="textimgD">
          <p className="textRazas">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            omnis, laborum sunt tempora odio neque similique velit, aut quo
            iusto consectetur rerum soluta inventore sit minus. Quo beatae
            facere iure?
          </p>
        </section>
      </>
    </div>
  );
}
export default Razas;
