import React, { Component } from 'react';
import axios from 'axios';
import './Razas.css';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['live_4nPRiI59hQyHWF0vSRDKYlyL7T7hNF4M2czdfkDPtWNzRDR8WURiSpi3mAbq58jT'] = 'DEMO-API-KEY';

class Razas extends Component {

  async getBreeds() {
      const res = await axios('/breeds');
      return res.data;
  }
  async getCatsImagesByBreed(breed_id, amount) {
      const res = await axios('/images/search?breed_ids='+breed_id + "&limit="+ amount);
      
      console.table(res.data)
      return res.data;
  }

  async loadBreedImages() {
    console.log('Load Breed Images:', this.state.selected_breed)

    let breed_images = await this.getCatsImagesByBreed(this.state.selected_breed, 5)

    this.setState({ images: breed_images });
  }

  constructor(...args) {

      super(...args);
      this.state = {
        images: [],
        breeds: [], 
        selected_breed: 0
      };

    this.onBreedSelectChange = this.onBreedSelectChange.bind(this);
  }
  async onBreedSelectChange(e) {
    console.log("Breed Selected. ID:",e.target.value)
    await this.setState({selected_breed:e.target.value});
    await this.loadBreedImages();
  }
  componentDidMount() {
      if (this.state.breeds.length===0) {
          (async () => {
              try {
                  this.setState({breeds: await this.getBreeds()});
              } catch (e) {
                  //...handle the error...
                  console.error(e)
              }
          })();
      }
  }
  render() {
      return (
        <div>

      <select value={this.state.selected_breed} 
              onChange={this.onBreedSelectChange}>
        {this.state.breeds.map((breed) => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
      </select>

      <div>
     {this.state.images.map((image) => <img className="cat-image" alt="" src={image.url}></img>)}
     </div>

     </div>
      );
  }
}


/* import { useEffect, useState } from "react";
import { fetchRazas } from "./api";
import "./Razas.css"
import { Link } from "react-router-dom";

function ListaRazas() {
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
export default Razas;