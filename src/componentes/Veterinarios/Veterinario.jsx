import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import LikeButton from "./LikeButton";

const Veterinario = ({ veterinario, onToggleData, onToggleFavorito }) => {
  return (
    <Card className="text-center mb-3 shadow-sm p-3 mb-5 bg-white rounded" style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title>{veterinario.nombre}</Card.Title>
        <Card.Text>
          <span className="custom-italic fs-5">Especialidad: {veterinario.especialidad}</span>
        </Card.Text>
        <div className="botones d-flex-wrap">
        <Button variant="light" className="fs-9 m-2 text-danger border border-danger" onClick={() => onToggleData(veterinario)}>
          Ver Más Información
        </Button>
        <LikeButton
          isLike={veterinario.esFavorito}
          onLike={() => onToggleFavorito(veterinario.id)}
          className="ml-2"
        >
        </LikeButton>

        </div>

      </Card.Body>
    </Card>
  );
};

export default Veterinario;
