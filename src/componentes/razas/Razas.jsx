import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./Razas.css";

// Configuración de axios
axios.defaults.baseURL = "https://api.thecatapi.com/v1";
axios.defaults.headers.common["x-api-key"] = "DEMO-API-KEY";

const Razas = () => {
  const [images, setImages] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const res = await axios.get("/breeds");
        setBreeds(res.data);
      } catch (e) {
        console.error("Error fetching breeds", e);
      }
    };

    fetchBreeds();
  }, []);

  useEffect(() => {
    const loadBreedImages = async () => {
      if (selectedBreed) {
        try {
          const res = await axios.get(
            `/images/search?breed_ids=${selectedBreed}&limit=1`
          );
          setImages(res.data);
        } catch (e) {
          console.error("Error fetching breed images", e);
        }
      }
    };

    loadBreedImages();
  }, [selectedBreed]);

  const handleBreedSelectChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  const selectedBreedData = breeds.find(breed => breed.id === selectedBreed);

  return (
    <div className="bodyhome-razas b-1">
      <h2 className="text-danger text-center">
        ¡Bienvenido al crisol de razas felinas del mundo!
      </h2>
      <span className="fs-5">
        Queremos estar seguros de que al elegir un gato le pueda brindar un
        estilo de vida adecuado según sus características. A continuación
        podrá ver cada una de las razas felinas con sus características
        principales, su origen y temperamento. Consideramos útil leer esta
        información con atención antes de tomar una decisión. Lo importante es
        que su gato y usted tengan una calidad de vida óptima y puedan ser
        grandes amigos!<br />
        Sin embargo, sabemos que en el mundo existen millones de gatos que
        habitan en la calle en condiciones que ponen en riesgo su vida. Desde
        Tienda de gatos impulsamos el cuidado de los mismos y la posible
        adopción.
      </span>

      <h4 className="text-muted p-2">
        Haga clic para seleccionar una raza:
      </h4>

      <Card>
        <Card.Body>
          <Form.Select
            className="selector-Razas"
            value={selectedBreed || ""}
            onChange={handleBreedSelectChange}
          >
            <option value="" disabled>Seleccione una raza</option>
            {breeds.map((breed) => (
              <option key={breed.id} value={breed.id}>
                {breed.name}
              </option>
            ))}
          </Form.Select>
          {images.map((image) => (
            <Card.Img className="cat-image" alt="" src={image.url} key={image.id} />
          ))}
          {selectedBreedData && (
            <div className="breed-details">
              <h2 className="fs-2 text-danger">Descripción:</h2>
              <p className="fs-5">{selectedBreedData.description}</p>
              <h2 className="fs-2 text-danger">Orígenes:</h2>
              <p className="fs-5">{selectedBreedData.origin}</p>
              <h2 className="fs-2 text-danger">Temperamento:</h2>
              <p className="fs-5">{selectedBreedData.temperament}</p>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Razas;

/* import React, { Component } from "react";
import axios from "axios";
import "./Razas.css";

axios.defaults.baseURL = "https://api.thecatapi.com/v1";
axios.defaults.headers.common[
  "live_4nPRiI59hQyHWF0vSRDKYlyL7T7hNF4M2czdfkDPtWNzRDR8WURiSpi3mAbq58jT"
] = "DEMO-API-KEY";

class Razas extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      images: [],
      breeds: [],
      selected_breed: 0,
    };

    this.onBreedSelectChange = this.onBreedSelectChange.bind(this);
  }

  async getBreeds() {
    const res = await axios("/breeds");
    return res.data;
  }

  async getCatsImagesByBreed(breed_id, amount) {
    const res = await axios(
      "/images/search?breed_ids=" + breed_id + "&limit=" + amount
    );

    console.table(res.data);
    return res.data;
  }

  async loadBreedImages() {
    console.log("Load Breed Images:", this.state.selected_breed);
    let breed_images = await this.getCatsImagesByBreed(
      this.state.selected_breed,
      1
    );
    this.setState({ images: breed_images });
  }

  async onBreedSelectChange(e) {
    console.log("Breed Selected. ID:", e.target.value);
    await this.setState({ selected_breed: e.target.value });
    await this.loadBreedImages();
  }

  async componentDidMount() {
    if (this.state.breeds.length === 0) {
      try {
        this.setState({ breeds: await this.getBreeds() });
      } catch (e) {
        console.error(e);
      }
    }
  }

  render() {
    const selectedBreed = this.state.breeds.find(
      (breed) => breed.id == this.state.selected_breed
    );

    return (
      <div className="bodyhome-razas">
        <h3 className="h3-razas">
          Aqui podran encontrar un despliegue de todas las Razas de Gatos, sus
          pelajes y caracteristicas distinguidas de cada una.
        </h3>

        <p className="p-Razas">
          Haga click en la Raza que desee ver en detalle:
        </p>

        <select
          className="selector-Razas"
          value={this.state.selected_breed}
          onChange={this.onBreedSelectChange}
        >
          {this.state.breeds.map((breed) => (
            <option key={breed.id} value={breed.id}>
              {breed.name}
            </option>
          ))}
        </select>

        <div className="cat-info">
          {this.state.images.map((image) => (
            <img className="cat-image" alt="" src={image.url} key={image.id} />
          ))}
          {selectedBreed && (
            <div className="breed-details">
              <h2>Descripción:</h2>
              <p>{selectedBreed.description}</p>
              <h2>Orígenes:</h2>
              <p>{selectedBreed.origin}</p>
              <h2>Temperamento:</h2>
              <p>{selectedBreed.temperament}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}


import { useEffect, useState } from "react";
import { fetchRazas } from "./api";
import "./Razas.css"
import { Link } from "react-router-dom";

function Razas() {
  const [razas, setRazas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRazas();
        setRazas(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2> Lista Razas</h2>
      <p> Listado de razas</p>
      {loading ? (
        <p> Cargando Razas...</p>
      ) : (
        <ul className="listaRazas">
          {razas.map((raza) => (
            <li key={raza.name} className="razas-item">
              <h3>{raza.name}</h3>
              <p> Temperamento: {raza.temperament}</p>
              <p> Origen: {raza.origin}</p>

              <Link to={`/DetalleRaza/${razas.id}`}> Ver Detalle</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


/*
 
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
}*/

