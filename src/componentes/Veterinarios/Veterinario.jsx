import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

const Veterinario = ({ veterinario, onToggleData, onToggleFavorito }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{veterinario.nombre}</Card.Title>
        <Card.Text>
          <p>Especialidad: {veterinario.especialidad}</p>
        </Card.Text>
        <Button variant="primary" onClick={() => onToggleData(veterinario)}>
          Ver Más Información
        </Button>
        <Button
          variant="primary"
          onClick={() => onToggleFavorito(veterinario.id)}
        >
          {veterinario.esFavorito
            ? "Eliminar de Favoritos"
            : "Agregar a Favoritos"}
        </Button>
      </Card.Body>
    </Card>
  );

};

export default Veterinario;
